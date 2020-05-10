using Planted.Plant.Data;
using System.Collections.Generic;

namespace Planted.UseCases.Abstractions
{
    public interface IPlantUseCases
    {
        IUseCaseResult<List<PlantListItemDto>> SearchPlants(string searchText);
    }
}
