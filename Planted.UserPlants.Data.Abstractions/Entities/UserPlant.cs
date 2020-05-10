using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;

namespace Planted.UserPlants.Data
{
    public class UserPlant
    {
        [BsonId(IdGenerator = typeof(ObjectIdGenerator))]
        public object Id { get; set; }

        public string PlantId { get; set; }

        public string UserId { get; set; }

        public string Nickname { get; set; }

    }
}
