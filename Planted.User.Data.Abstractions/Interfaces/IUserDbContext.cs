using System;
using System.Threading.Tasks;
using MongoDB.Driver;

namespace Planted.User.Data
{
    public interface IUserDbContext
    {
        IMongoCollection<User> Users { get; }


        Task<T> TransactionAsync<T>(string collectionName, Func<IMongoCollection<T>, Task<T>> operations);
    }
}
