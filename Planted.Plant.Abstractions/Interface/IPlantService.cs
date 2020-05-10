using Planted.Plant.Data;
using System.Collections.Generic;

namespace Planted.Plant
{
    public interface IPlantService
    {
        List<PlantListItemDto> SearchPlants(string searchText);
    }
}
