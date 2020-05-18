using System.Collections.Generic;
using System.Threading.Tasks;

namespace Planted.Plant.Data
{
    public interface IPlantRepository
    {
        List<PlantDto> SearchPlants(string searchText);

        Task<PlantDto> GetPlantAsync(string plantId);
    }
}
