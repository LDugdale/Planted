namespace Planted.Core.Data
{
    public interface IDatabaseSettings
    {
        string BooksCollectionName { get; set; }

        string ConnectionString { get; set; }

        string DatabaseName { get; set; }
    }
}
