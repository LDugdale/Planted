using Planted.Plant.Data;
using System.Collections.Generic;

namespace Planted.Plant
{
    public class PlantService : IPlantService
    {

        private readonly IPlantRepository _plantRepository;

        public PlantService(IPlantRepository plantRepository)
        {
            _plantRepository = plantRepository;
        }

        public List<PlantListItemDto> SearchPlants(string searchText)
        {
            return _plantRepository.SearchPlants(searchText);
        }
    }
}
