using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Planted.Exceptions;
using Planted.Plant.Data;
using Planted.UseCases;
using System;
using System.Collections.Generic;

namespace Planted.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/[controller]")]
    public class PlantController : PlantedController
    {

        private readonly IPlantUseCases _plantUseCases;

        public PlantController(IPlantUseCases plantUseCases)
        {
            _plantUseCases = plantUseCases ?? throw new ArgumentNullException(nameof(plantUseCases));
        }

        [HttpPost("[action]")]
        public ActionResult<List<PlantDto>> Search([FromBody]string searchText)
        {
            try
            {
                var plants = _plantUseCases.SearchPlants(searchText);

                return UseCaseResponse(plants);
            }
            catch (Exception)
            {
                return BadRequest(ExceptionMessage.Unexpected);
            }
        }
    }
}
