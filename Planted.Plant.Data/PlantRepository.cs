using MongoDB.Bson;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Planted.Plant.Data
{
    public class PlantRepository : IPlantRepository
    {

        private readonly IPlantDbContext _dbContext;

        public PlantRepository(IPlantDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<PlantDto> GetPlantAsync(string plantId)
        {
            var plantObjectId = ObjectId.Parse(plantId);

            var result = await _dbContext.Plants
                .Find(x => x.Id.Equals(plantObjectId))
                .Project(plant => new PlantDto
                {
                    Id = plant.Id.ToString(),
                    LatinName = plant.LatinName,
                    Genus = plant.Genus,
                    Names = plant.Names
                }).FirstOrDefaultAsync();

            return result;
        }

        public List<PlantDto> SearchPlants(string searchText)
        {
            var filter = Builders<Plant>.Filter.Regex("LatinName", searchText);
            var result = _dbContext.Plants
                .Find(filter)
                .Project(plant => new PlantDto
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
