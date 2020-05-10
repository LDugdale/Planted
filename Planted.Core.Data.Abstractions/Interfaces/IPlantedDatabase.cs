using MongoDB.Driver;
using System;
using System.Threading.Tasks;

namespace Planted.Core.Data
{
    public interface IPlantedDatabase
    {
        IMongoCollection<T> GetCollection<T>();

        Task<T> TransactionAsync<T>(string collectionName, Func<IMongoCollection<T>, Task<T>> operations);
    }
}
