using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Planted.UseCases;
using Planted.UserPlants.Data;
using Planted.Exceptions;
using Planted.Core.Extensions;
using System;
using Planted.Core.Web;

namespace Planted.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class UserPlantController : PlantedController
    {
        private readonly IMultipartRequestHandler _multiPartRequestHandler;
        private readonly IUserPlantUseCases _userPlantUseCases;

        public UserPlantController(IMultipartRequestHandler multiPartRequestHandler, IUserPlantUseCases userPlantUseCases)
        {
            _multiPartRequestHandler = multiPartRequestHandler ?? throw new ArgumentNullException(nameof(multiPartRequestHandler));
            _userPlantUseCases = userPlantUseCases ?? throw new ArgumentNullException(nameof(userPlantUseCases));
        }

        [HttpPost("[action]")]
        public async Task<ActionResult> AddUserPlant([FromBody]AddUserPlantDto addUserPlant)
        {
            try
            {
                var emailAddress = User.GetEmail();
                var userPlantsResult = await _userPlantUseCases.AddUserPlantAsync(addUserPlant, emailAddress);

                return UseCaseResponse(userPlantsResult);

            }
            catch (Exception ex)
            {
                return BadRequest(ExceptionMessage.Unexpected);
            }
        }

        [HttpGet("[action]")]
        public async Task<ActionResult<IEnumerable<UserPlantDto>>> GetUserPlants()
        {
            try
            {
                var emailAddress = User.GetEmail();

                var userPlantsResult = await _userPlantUseCases.GetUserPlantsAsync(emailAddress);

                return UseCaseResponse(userPlantsResult);
            }
            catch (Exception ex)
            {
                return BadRequest(ExceptionMessage.Unexpected);
            }
        }

        [HttpGet("[action]")]
        public async Task<ActionResult<UserPlantResponseDto>> GetUserPlant([FromQuery]string userPlantId)
        {
            try
            {
                var userPlantsResult = await _userPlantUseCases.GetUserPlantAsync(userPlantId);
                return UseCaseResponse(userPlantsResult);
            }
            catch (Exception ex)
            {
                return BadRequest(ExceptionMessage.Unexpected);
            }
        }

        [HttpPost("[action]")]
        [DisableFormValueModelBinding]
        public async Task<IActionResult> AddUserPlantActivityWithMedia()
        {
            try
            {
                var multiPartRequestDto = await _multiPartRequestHandler.HandleMultiPartRequest(Request);

                var addUserPlantActivity = await BindFormDataToModelAsync<AddUserPlantActivityDto>(multiPartRequestDto.FormValueProvider);
                if (addUserPlantActivity == null)
                {
                    return BadRequest();
                }

                var emailAddress = User.GetEmail();

                var userPlantsResult = await _userPlantUseCases.AddUserPlantActivityAsync(addUserPlantActivity, multiPartRequestDto.File, emailAddress);

                return UseCaseResponse(userPlantsResult);

            }
            catch (Exception ex)
            {
                return BadRequest(ExceptionMessage.Unexpected);
            }
        }
         
        private async Task<T> BindFormDataToModelAsync<T>(FormValueProvider formValueProvider) where T : class, new()
        {
            var data = new T();
            var bindingSuccessful = await TryUpdateModelAsync(data, prefix: "", valueProvider: formValueProvider);

            return data;
        }

    }
}
