using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;

namespace Planted.UserPlants.Data
{
    public class UserPlantActivity
    {
        [BsonId(IdGenerator = typeof(ObjectIdGenerator))]
        public object Id { get; set; }

        public UserPlantActivityType ActivityType { get; set; }

        public int? WaterAmmount { get; set; }

        public string UserPlantId { get; set; }

        public string PlantId { get; set; }

        public string UserId { get; set; }
    }
}
