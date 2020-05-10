using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Net.Http.Headers;
using Planted.Storage;

namespace Planted.Core.Web
{
    public class MultipartRequestHandler : IMultipartRequestHandler
    {
        private readonly FormOptions _defaultFormOptions = new FormOptions();

        private readonly IFileService _fileService;

        public MultipartRequestHandler(FormOptions defaultFormOptions, IFileService fileService)
        {
            _defaultFormOptions = defaultFormOptions ?? throw new ArgumentNullException(nameof(defaultFormOptions));
            _fileService = fileService ?? throw new ArgumentNullException(nameof(fileService));
        }

        public async Task<MultiPartRequestDto> HandleMultiPartRequest(HttpRequest request)
        {
            if (!IsMultipartContentType(request.ContentType))
            {
                throw new Exception($"Expected a multipart request, but got {request.ContentType}");
            }

            var formAccumulator = new KeyValueAccumulator();

            var boundary = GetBoundary(
                MediaTypeHeaderValue.Parse(request.ContentType),
                _defaultFormOptions.MultipartBoundaryLengthLimit);
            var reader = new MultipartReader(boundary, request.Body);

            var section = await reader.ReadNextSectionAsync();

            var media = new List<AddFileDto>();

            while (section != null)
            {
                var hasContentDispositionHeader = ContentDispositionHeaderValue.TryParse(section.ContentDisposition, out var contentDisposition);

                if (hasContentDispositionHeader)
                {
                    if (HasFileContentDisposition(contentDisposition))
                    {
                        var processedMedia = await _fileService.ProcessStreamedFileAsync(section, contentDisposition);
                        var mediaDto = new AddFileDto
                        {
                            UnTrustedFileName = contentDisposition.FileName.Value,
                            TrustedFileName = WebUtility.HtmlEncode(contentDisposition.FileName.Value),
                            File = processedMedia,
                        };
                        media.Add(mediaDto);

                    }
                    else if ( HasFormDataContentDisposition(contentDisposition))
                    {
                        var key = HeaderUtilities.RemoveQuotes(contentDisposition.Name).Value;
                        var encoding = GetEncoding(section);

                        using (var streamReader = new StreamReader(section.Body, encoding, detectEncodingFromByteOrderMarks: true, bufferSize: 1024, leaveOpen: true))
                        {

                            var value = await streamReader.ReadToEndAsync();

                            if (string.Equals(value, "undefined",
                                StringComparison.OrdinalIgnoreCase))
                            {
                                value = string.Empty;
                            }

                            formAccumulator.Append(key, value);

                            if (formAccumulator.ValueCount >
                                int.MaxValue)
                            {
                                throw new InvalidDataException($"Form key count limit {_defaultFormOptions.ValueCountLimit} exceeded.");

                            }
                        }
                    }
                }

                section = await reader.ReadNextSectionAsync();
            }

            request.Body.Position = 0;

            var formAccumulatorResults = formAccumulator.GetResults();
            var formValueProvider = new FormValueProvider(
                BindingSource.Form,
                new FormCollection(formAccumulatorResults),
                CultureInfo.CurrentCulture);

            return new MultiPartRequestDto
            {
                FormValueProvider = formValueProvider,
                File = media,
            };
        }

        public string GetBoundary(MediaTypeHeaderValue contentType, int lengthLimit)
        {
            var boundary = HeaderUtilities.RemoveQuotes(contentType.Boundary).Value;

            if (string.IsNullOrWhiteSpace(boundary))
            {
                throw new InvalidDataException("Missing content-type boundary.");
            }

            if (boundary.Length > lengthLimit)
            {
                throw new InvalidDataException(
                    $"Multipart boundary length limit {lengthLimit} exceeded.");
            }

            return boundary;
        }

        public bool IsMultipartContentType(string contentType)
        {
            return !string.IsNullOrEmpty(contentType)
                   && contentType.IndexOf("multipart/", StringComparison.OrdinalIgnoreCase) >= 0;
        }

        public bool HasFormDataContentDisposition(ContentDispositionHeaderValue contentDisposition)
        {
            // Content-Disposition: form-data; name="key";
            return contentDisposition != null
                && contentDisposition.DispositionType.Equals("form-data")
                && string.IsNullOrEmpty(contentDisposition.FileName.Value)
                && string.IsNullOrEmpty(contentDisposition.FileNameStar.Value);
        }

        public bool HasFileContentDisposition(ContentDispositionHeaderValue contentDisposition)
        {
            // Content-Disposition: form-data; name="myfile1"; filename="Misc 002.jpg"
            return contentDisposition != null
                && contentDisposition.DispositionType.Equals("form-data")
                && (!string.IsNullOrEmpty(contentDisposition.FileName.Value)
                    || !string.IsNullOrEmpty(contentDisposition.FileNameStar.Value));
        }

        private static Encoding GetEncoding(MultipartSection section)
        {
            var hasMediaTypeHeader = MediaTypeHeaderValue.TryParse(section.ContentType, out var mediaType);

            if (!hasMediaTypeHeader || Encoding.UTF7.Equals(mediaType.Encoding))
            {
                return Encoding.UTF8;
            }

            return mediaType.Encoding;
        }
    }
}
