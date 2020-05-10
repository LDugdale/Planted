using Microsoft.AspNetCore.Mvc.ModelBinding;
using Planted.Storage;
using System;
using System.Collections.Generic;
using System.Text;

namespace Planted.Core.Web
{
    public class MultiPartRequestDto
    {
        public FormValueProvider  FormValueProvider { get; set; }
        
        public List<AddFileDto> File { get; set; }
    }
}
