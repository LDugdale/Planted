using MongoDB.Driver;
using System;
using System.Threading.Tasks;
using Planted.Core.Data;

namespace Planted.Plant.Data
{
    public class PlantDbContext : IPlantDbContext
    {

        private readonly IPlantedDatabase _plantedDatabase;

        public PlantDbContext(IPlantedDatabase plantedDatabase)
        {
            _plantedDatabase = plantedDatabase ?? throw new ArgumentNullException(nameof(plantedDatabase));
        }


        public async Task<T> TransactionAsync<T>(string collectionName, Func<IMongoCollection<T>, Task<T>> operations) => await _plantedDatabase.TransactionAsync(collectionName, operations);

        public IMongoCollection<Plant> Plants => _plantedDatabase.GetCollection<Plant>();
    }
}
