using Microsoft.AspNetCore.Http;
using Microsoft.Net.Http.Headers;
using System.Threading.Tasks;

namespace Planted.Core.Web
{
    public interface IMultipartRequestHandler
    {

        Task<MultiPartRequestDto> HandleMultiPartRequest(HttpRequest request);

        string GetBoundary(MediaTypeHeaderValue contentType, int lengthLimit);

        bool IsMultipartContentType(string contentType);

        bool HasFormDataContentDisposition(ContentDispositionHeaderValue contentDisposition);

        bool HasFileContentDisposition(ContentDispositionHeaderValue contentDisposition);
    }
}
