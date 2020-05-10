using System;
using System.IO;
using System.Threading.Tasks;

namespace Planted.Core.Storage
{
    public class LocalFileClient : IFileClient
    {
        private readonly IStorageSettings _storageSettings;

        public LocalFileClient(IStorageSettings storageSettings)
        {
            _storageSettings = storageSettings ?? throw new ArgumentNullException(nameof(storageSettings));
        }

        public Task DeleteFile(ContainerDefinition containerDefinition, FileDefinition fileDefinition)
        {
            throw new System.NotImplementedException();
        }

        public Task<bool> FileExists(ContainerDefinition containerDefinition, FileDefinition fileDefinition)
        {
            throw new System.NotImplementedException();
        }

        public Task<Stream> GetFile(ContainerDefinition containerDefinition, FileDefinition fileDefinition)
        {
            throw new System.NotImplementedException();
        }

        public Task<string> GetFileUrl(ContainerDefinition containerDefinition, FileDefinition fileDefinition)
        {
            throw new System.NotImplementedException();
        }

        public Task SaveFile(ContainerDefinition containerDefinition, FileDefinition fileDefinition)
        {
            var path = Path.Combine(_storageSettings.FileRoot, containerDefinition.Path, fileDefinition.Name);

            if (File.Exists(path))
            {
                File.Delete(path);
            }

            using (var file = new FileStream(path, FileMode.CreateNew))
            {
                await fileStream.CopyToAsync(fileDefinition.Data);
            }
        }

        public Task SaveFile(ContainerDefinition containerDefinition, FileDefinition fileDefinition, Stream fileStream)
        {
            var path = Path.Combine(_storageSettings.FileRoot, containerDefinition.Name, fileDefinition.Path);

            if (File.Exists(path))
            {
                File.Delete(path);
            }

            using (var file = new FileStream(path, FileMode.CreateNew))
            {
                await fileStream.CopyToAsync(file);
            }
        }
    }
}
