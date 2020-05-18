using System;
using System.Collections.Generic;
using System.Text;

namespace Planted.Core.Web
{
    public class FileUploadSettings : IFileUploadSettings
    {
        public IEnumerable<string> AllowedExtensions { get; set; }

        public int fileSizeLimit { get; set; }
    }
}
