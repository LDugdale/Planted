using System;
using System.Collections.Generic;
using Planted.Plant;
using Planted.Plant.Data;
using Planted.UseCases.Abstractions;

namespace Planted.UseCases
{
    public class PlantUseCases : IPlantUseCases
    {

        private readonly IPlantService _plantService;

        public PlantUseCases(IPlantService plantService)
        {
            _plantService = plantService ?? throw new ArgumentNullException(nameof(plantService));
        }

        public IUseCaseResult<List<PlantListItemDto>> SearchPlants(string searchText)
        {
            var plants = _plantService.SearchPlants(searchText);

            return UseCase.Success(plants);
        }
    }
}
