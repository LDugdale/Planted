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

        public async Task SaveFile(ContainerDefinition containerDefinition, FileDefinition fileDefinition)
        {
            var directory = Path.Combine(_storageSettings.FileRoot, containerDefinition.Path);

            Directory.CreateDirectory(directory);

            var path = Path.Combine(directory, fileDefinition.Name);

            using (FileStream target = File.Create(path))
            {
                await target.WriteAsync(fileDefinition.Data, 0, fileDefinition.Data.Length);   
            }
        }

        public Task SaveFile(ContainerDefinition containerDefinition, FileDefinition fileDefinition, Stream fileStream)
        {
            //var path = Path.Combine(_storageSettings.FileRoot, containerDefinition.Name, fileDefinition.Path);

            //if (File.Exists(path))
            //{
            //    File.Delete(path);
            //}

            //using (var file = new FileStream(path, FileMode.CreateNew))
            //{
            //    await fileStream.CopyToAsync(file);
            //}
            throw new System.NotImplementedException();
        }
    }
}
