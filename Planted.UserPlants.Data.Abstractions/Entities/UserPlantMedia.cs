using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;

namespace Planted.UserPlants.Data
{
    public class UserPlantMedia
    {
        [BsonId(IdGenerator = typeof(ObjectIdGenerator))]
        public object Id { get; set; }

        public string UserPlantId { get; set; }

        public string PlantId { get; set; }

        public string FileName { get; set; }

        public string FilePath { get; set; }
    }
}
