using MongoDB.Driver;
using System;
using System.Threading.Tasks;

namespace Planted.UserPlants.Data
{
    public interface IUserPlantsDbContext
    {
        IMongoCollection<UserPlant> UserPlants { get; }

        IMongoCollection<UserPlantActivity> UserPlantActivity { get; }


        Task<T> TransactionAsync<T>(string collectionName, Func<IMongoCollection<T>, Task<T>> operations);
    }
}
