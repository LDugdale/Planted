using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Net.Http.Headers;
using System.Threading.Tasks;

namespace Planted.Core.Web
{
    public interface IFileService
    {
        Task<byte[]> ProcessStreamedFileAsync(MultipartSection section, ContentDispositionHeaderValue contentDisposition);
    }
}
