using System.Collections.Generic;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;

namespace Planted.Plant.Data
{
    public class Plant
    {
        [BsonId(IdGenerator = typeof(ObjectIdGenerator))]
        public object Id { get; set; }

        public string LatinName { get; set; }

        public string Genus { get; set; }

        public List<PlantNames> Names { get; set; }

        public List<PlantInformation> Information { get; set; }

    }
}
