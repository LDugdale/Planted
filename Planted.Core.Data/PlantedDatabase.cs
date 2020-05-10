using MongoDB.Driver;
using Planted.Exceptions;
using System;
using System.Threading.Tasks;

namespace Planted.Core.Data
{
    public class PlantedDatabase : IPlantedDatabase
    {

        private IDatabaseSettings _databaseSettings;
        private IMongoDatabase _database;
        private MongoClient _mongoClient;


        public PlantedDatabase(IDatabaseSettings settings)
        {
            _databaseSettings = settings;

            try
            {
                var mongoSettings = MongoClientSettings.FromUrl(new MongoUrl(settings.ConnectionString));

                //if (IsSSL)
                //{
                //    settings.SslSettings = new SslSettings { EnabledSslProtocols = System.Security.Authentication.SslProtocols.Tls12 };
                //}4*4482

                _mongoClient = new MongoClient(mongoSettings);
                _database = _mongoClient.GetDatabase(settings.DatabaseName);
            }
            catch (Exception ex)
            {
                throw new System.Exception("Can not access to db server.", ex);
            }
        }

        public IMongoCollection<T> GetCollection<T>() => _database.GetCollection<T>(typeof(T).Name.ToLower());

        public async Task<T> TransactionAsync<T>(string collectionName, Func<IMongoCollection<T>, Task<T>> operations)
        {

            using (var session = _mongoClient.StartSession())
            {
                var userConnection = session.Client.GetDatabase(_databaseSettings.DatabaseName).GetCollection<T>(collectionName);
                session.StartTransaction();

                try
                {
                    var value = await operations(userConnection);

                    await session.CommitTransactionAsync();

                    return value;

                }
                catch (PlantedException)
                {
                    await session.AbortTransactionAsync();
                    throw;
                }
                catch (Exception)
                {
                    await session.AbortTransactionAsync();
                    throw;
                }
            }

        }

    }
}
