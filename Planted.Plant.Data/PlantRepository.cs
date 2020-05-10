using MongoDB.Driver;
using System.Collections.Generic;

namespace Planted.Plant.Data
{
    public class PlantRepository : IPlantRepository
    {

        private readonly IPlantDbContext _dbContext;

        public PlantRepository(IPlantDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<PlantListItemDto> SearchPlants(string searchText)
        {
            //var filterDefinition = Builders<Tenant>.Filter.Where(< Build whatever filter you need here >);
            var filter = Builders<Plant>.Filter.Regex("LatinName", searchText);
            var result = _dbContext.Plants
                .Find(filter)
                .Project(plant => new PlantListItemDto
                {
                    Id = plant.Id.ToString(),
                    LatinName = plant.LatinName,
                    Genus = plant.Genus,
                    Names = plant.Names
                })
                .Limit(10)
                .ToList();

            return result;
        }
    }
}
