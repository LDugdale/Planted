using MongoDB.Driver;
using System;
using System.Threading.Tasks;

namespace Planted.Plant.Data
{
    public interface IPlantDbContext
    {

        IMongoCollection<Plant> Plants { get; }


        Task<T> TransactionAsync<T>(string collectionName, Func<IMongoCollection<T>, Task<T>> operations);
    }
}
