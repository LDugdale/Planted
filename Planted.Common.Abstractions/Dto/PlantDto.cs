using System.Collections.Generic;

namespace Planted.Plant.Data
{
    public class PlantDto
    {
        public string Id { get; set; }

        public string LatinName { get; set; }

        public string Genus { get; set; }

        public List<PlantNamesDto> Names { get; set; }
    }
}
