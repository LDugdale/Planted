using MongoDB.Driver;
using Planted.Core.Data;
using System;
using System.Threading.Tasks;

namespace Planted.User.Data
{
    public class UserDbContext : IUserDbContext
    {

        private IPlantedDatabase _plantedDatabase;

        public UserDbContext(IPlantedDatabase plantedDatabase)
        {
            _plantedDatabase = plantedDatabase ?? throw new ArgumentNullException(nameof(plantedDatabase));
        }

        public async Task<T> TransactionAsync<T>(string collectionName, Func<IMongoCollection<T>, Task<T>> operations) =>  await _plantedDatabase.TransactionAsync(collectionName, operations);  

        public IMongoCollection<User> Users => _plantedDatabase.GetCollection<User>();
    }
}
