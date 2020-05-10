using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace Planted.Core.Storage
{
    public interface IFileClient
    {
        Task DeleteFile(ContainerDefinition containerDefinition, FileDefinition fileDefinition);

        Task<bool> FileExists(ContainerDefinition containerDefinition, FileDefinition fileDefinition);

        Task<Stream> GetFile(ContainerDefinition containerDefinition, FileDefinition fileDefinition);
        
        Task<string> GetFileUrl(ContainerDefinition containerDefinition, FileDefinition fileDefinition);
        
        Task SaveFile(ContainerDefinition containerDefinition, FileDefinition fileDefinition, Stream fileStream);
    }
}
