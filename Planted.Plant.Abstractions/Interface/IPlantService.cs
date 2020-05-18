using Planted.Plant.Data;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Planted.Plant
{
    public interface IPlantService
    {
        List<PlantDto> SearchPlants(string searchText);

        Task<PlantDto> GetPlantAsync(string plantId);
    }
}
