using Planted.Storage;
using Planted.User;
using Planted.UserPlants;
using Planted.UserPlants.Data;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Planted.UseCases
{
    public class UserPlantUseCases : IUserPlantUseCases
    {
        private readonly IUserService _userService;
        private readonly IUserPlantService _userPlantService;

        public UserPlantUseCases(IUserService userService, IUserPlantService userPlantService)
        {
            _userService = userService ?? throw new ArgumentNullException(nameof(userService));
            _userPlantService = userPlantService ?? throw new ArgumentNullException(nameof(userPlantService));
        }

        public async Task<IUseCaseResult> AddUserPlantAsync(AddUserPlantDto addUserPlantDto, string emailAddress)
        {
            var user = await _userService.GetUserAsync(emailAddress);
            if (user == null)
            {
                return UseCase.Fail(ResponseMessage.DetailsIncorrect);
            }

            await _userPlantService.AddUserPlantAsync(addUserPlantDto, emailAddress);

            return UseCase.Success();
        }

        public async Task<IUseCaseResult<IEnumerable<UserPlantDto>>> GetUserPlantsAsync(string emailAddress)
        {
            var user = await _userService.GetUserAsync(emailAddress);
            if (user == null)
            {
                return UseCase.Fail<IEnumerable<UserPlantDto>>(null, ResponseMessage.DetailsIncorrect);
            }

            var userPlants = await _userPlantService.GetUserPlantsAsync(user.Id);

            return UseCase.Success(userPlants);
        }

        public async Task<IUseCaseResult<UserPlantDto>> GetUserPlantAsync(string userPlantId)
        {

            var userPlant = await _userPlantService.GetUserPlantAsync(userPlantId);

            return UseCase.Success(userPlant);
        }

        public async Task<IUseCaseResult> AddUserPlantActivityAsync(AddUserPlantActivityDto addUserPlantActivity, List<AddFileDto> Files, string emailAddress)
        {
            //get user details
            var user = await _userService.GetUserAsync(emailAddress);
            if (user == null)
            {
                return UseCase.Fail(ResponseMessage.DetailsIncorrect);
            }

            //add files



            //add activity
            await _userPlantService.AddUserPlantActivityAsync(addUserPlantActivity, multiPartRequestDto.Media, user);

            return UseCase.Success();


        }
    }

}
