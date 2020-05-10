using MongoDB.Driver;
using System;
using System.Threading.Tasks;
using Planted.Core.Data;

namespace Planted.UserPlants.Data
{
    public class UserPlantsDbContext : IUserPlantsDbContext
    {

        private readonly IPlantedDatabase _plantedDatabase;

        public async Task<T> TransactionAsync<T>(string collectionName, Func<IMongoCollection<T>, Task<T>> operations) => await _plantedDatabase.TransactionAsync(collectionName, operations);

        public IMongoCollection<UserPlant> UserPlants => _plantedDatabase.GetCollection<UserPlant>();

        public IMongoCollection<UserPlantActivity> UserPlantActivity => _plantedDatabase.GetCollection<UserPlantActivity>();
    }
}
