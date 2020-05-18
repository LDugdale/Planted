using Planted.Plant.Data;
using System.Collections.Generic;

namespace Planted.UseCases
{
    public interface IPlantUseCases
    {
        IUseCaseResult<List<PlantDto>> SearchPlants(string searchText);
    }
}
