using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;
using System.Collections.Generic;

namespace Planted.UserPlants.Data
{
    public class UserPlantActivity
    {
        [BsonId(IdGenerator = typeof(ObjectIdGenerator))]
        public object Id { get; set; }

        public string UserPlantId { get; set; }

        public string PlantId { get; set; }

        public string UserId { get; set; }

        public List<UserPlantActivityType> ActivityTypes { get; set; }

        public List<string> UserPlantMediaIds { get; set; }

        public string PostText { get; set; }
    }
}
