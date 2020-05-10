using System.Collections.Generic;

namespace Planted.Plant.Data
{
    public interface IPlantRepository
    {
        List<PlantListItemDto> SearchPlants(string searchText);
    }
}
