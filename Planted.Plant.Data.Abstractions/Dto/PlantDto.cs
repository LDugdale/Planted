using System;
using System.Collections.Generic;
using System.Text;

namespace Planted.Plant.Data
{
    public class PlantDto
    {
        public string Id { get; set; }

        public string LatinName { get; set; }

        public string Genus { get; set; }

        public List<PlantNamesDto> Names { get; set; }

        public List<PlantInformationDto> Information { get; set; }
    }
}
