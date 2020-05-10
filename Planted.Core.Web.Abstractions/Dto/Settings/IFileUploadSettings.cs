using System.Collections.Generic;

namespace Planted.Core.Web
{
    public interface IFileUploadSettings
    {
        IEnumerable<string> AllowedExtensions { get; set; }

        int fileSizeLimit { get; set; }
    }
}
