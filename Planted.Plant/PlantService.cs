using Planted.Plant.Data;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Planted.Plant
{
    public class PlantService : IPlantService
    {

        private readonly IPlantRepository _plantRepository;

        public PlantService(IPlantRepository plantRepository)
        {
            _plantRepository = plantRepository;
        }

        public async Task<PlantDto> GetPlantAsync(string plantId)
        {
            return await _plantRepository.GetPlantAsync(plantId);
        }

        public List<PlantDto> SearchPlants(string searchText)
        {
            return _plantRepository.SearchPlants(searchText);
        }
    }
}
