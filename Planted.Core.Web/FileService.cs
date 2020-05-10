using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Net.Http.Headers;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Planted.Core.Web
{
    public class FileService : IFileService
    {

        private readonly IFileUploadSettings _fileUploadSettings;

        public FileService(IFileUploadSettings fileUploadSettings)
        {
            _fileUploadSettings = fileUploadSettings;
        }

        // For more file signatures, see the File Signatures Database (https://www.filesignatures.net/)
        // and the official specifications for the file types you wish to add.
        private static readonly Dictionary<string, List<byte[]>> _fileSignature = new Dictionary<string, List<byte[]>>
        {
            { ".gif", new List<byte[]> { new byte[] { 0x47, 0x49, 0x46, 0x38 } } },
            { ".png", new List<byte[]> { new byte[] { 0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A } } },
            { ".jpeg", new List<byte[]>
                {
                    new byte[] { 0xFF, 0xD8, 0xFF, 0xE0 },
                    new byte[] { 0xFF, 0xD8, 0xFF, 0xE2 },
                    new byte[] { 0xFF, 0xD8, 0xFF, 0xE3 },
                }
            },
            { ".jpg", new List<byte[]>
                {
                    new byte[] { 0xFF, 0xD8, 0xFF, 0xE0 },
                    new byte[] { 0xFF, 0xD8, 0xFF, 0xE1 },
                    new byte[] { 0xFF, 0xD8, 0xFF, 0xE8 },
                }
            }
        };

        public async Task<byte[]> ProcessStreamedFileAsync(MultipartSection section, ContentDispositionHeaderValue contentDisposition)
        {
            try
            {
                using (var memoryStream = new MemoryStream())
                {
                    await section.Body.CopyToAsync(memoryStream);

                    // Check if the file is empty or exceeds the size limit.
                    if (memoryStream.Length == 0)
                    {
                        _ = "The file is empty.";
                    }
                    else if (memoryStream.Length > _fileUploadSettings.fileSizeLimit)
                    {
                        var megabyteSizeLimit = _fileUploadSettings.fileSizeLimit / 1048576;
                        _ = $"The file exceeds {megabyteSizeLimit:N1} MB.";
                    }
                    else if (!IsValidFileExtensionAndSignature(contentDisposition.FileName.Value, memoryStream))
                    {
                       _ = "The file type isn't permitted or the file's signature doesn't match the file's extension.";
                    }
                    else
                    {
                        return memoryStream.ToArray();
                    }
                }
            }
            catch (Exception ex)
            {
                _ = $"The upload failed. Please contact the Help Desk for support. Error: {ex.HResult}";
            }

            return new byte[0];
        }

        private bool IsValidFileExtensionAndSignature(string fileName, Stream data)
        {
            if (string.IsNullOrEmpty(fileName) || data == null || data.Length == 0)
            {
                return false;
            }

            var extension = Path.GetExtension(fileName).ToLowerInvariant();
            
            if (string.IsNullOrEmpty(extension) || !_fileUploadSettings.AllowedExtensions.Contains(extension))
            {
                return false;
            }

            data.Position = 0;
            using var reader = new BinaryReader(data);

            var signatures = _fileSignature[extension];
            var headerBytes = reader.ReadBytes(signatures.Max(m => m.Length));

            return signatures.Any(signature =>
                headerBytes.Take(signature.Length).SequenceEqual(signature));
        }
    }
}
