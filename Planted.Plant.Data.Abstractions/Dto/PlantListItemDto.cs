using System.Collections.Generic;

namespace Planted.Plant.Data
{
    public class PlantListItemDto
    {
        public string Id { get; set; }

        public string LatinName { get; set; }

        public string Genus { get; set; }

        public List<PlantNames> Names { get; set; }
    }
}
