using System.Collections.Generic;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;

namespace Planted.User.Data
{
    public class User
    {
        [BsonId(IdGenerator = typeof(ObjectIdGenerator))]
        public object Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Username { get; set; }

        public string EmailAddress { get; set; }

        public string Password { get; set; }

        public string Token { get; set; }

        public IEnumerable<string> Roles { get; set; }
    }
}
