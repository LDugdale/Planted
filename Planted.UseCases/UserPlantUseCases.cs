using Planted.Plant;
using Planted.Storage;
using Planted.User;
using Planted.UserPlants;
using Planted.UserPlants.Data;
using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Threading.Tasks;

namespace Planted.UseCases
{
    public class UserPlantUseCases : IUserPlantUseCases
    {
        private readonly IUserService _userService;
        private readonly IUserPlantService _userPlantService;
        private readonly IUserPlantActivityService _userPlantActivityService;
        private readonly IPlantService _plantService;

        public UserPlantUseCases(IUserService userService, IUserPlantService userPlantService, IUserPlantActivityService userPlantActivityService, IPlantService plantService)
        {
            _userService = userService ?? throw new ArgumentNullException(nameof(userService));
            _userPlantService = userPlantService ?? throw new ArgumentNullException(nameof(userPlantService));
            _userPlantActivityService = userPlantActivityService ?? throw new ArgumentNullException(nameof(userPlantActivityService));
            _plantService = plantService ?? throw new ArgumentNullException(nameof(plantService));
        }

        public async Task<IUseCaseResult> AddUserPlantAsync(AddUserPlantDto addUserPlantDto, string emailAddress)
        {
            var user = await _userService.GetUserByEmailAsync(emailAddress);
            if (user == null)
            {
                return UseCase.Fail(ResponseMessage.DetailsIncorrect);
            }

            await _userPlantService.AddUserPlantAsync(addUserPlantDto, emailAddress);

            return UseCase.Success();
        }

        public async Task<IUseCaseResult<IEnumerable<UserPlantDto>>> GetUserPlantsAsync(string emailAddress)
        {
            var user = await _userService.GetUserByEmailAsync(emailAddress);
            if (user == null)
            {
                return UseCase.Fail<IEnumerable<UserPlantDto>>(null, ResponseMessage.DetailsIncorrect);
            }

            var userPlants = await _userPlantService.GetUserPlantsAsync(user.Id);

            return UseCase.Success(userPlants);
        }

        public async Task<IUseCaseResult<UserPlantResponseDto>> GetUserPlantAsync(string userPlantId)
        {
            // get user plant
            var userPlant = await _userPlantService.GetUserPlantAsync(userPlantId);
            if (userPlant == null)
            {
                return UseCase.Fail<UserPlantResponseDto>(null, ResponseMessage.UserPlantNotFound);
            }

            // get plant
            var plant = await _plantService.GetPlantAsync(userPlant.PlantId);
            if (userPlant == null)
            {
                return UseCase.Fail<UserPlantResponseDto>(null, ResponseMessage.PlantNotFound);
            }

            // get user
            var user = await _userService.GetUserByIdAsync(userPlant.UserId);
            if (userPlant == null)
            {   
                return UseCase.Fail<UserPlantResponseDto>(null, ResponseMessage.UserNotFound);
            }

            // combine the data
            var userPlantResponseDto = new UserPlantResponseDto
            {
                Id = userPlant.Id,
                PlantId = userPlant.PlantId,
                UserId = userPlant.UserId,
                Nickname = userPlant.Nickname,
                Plant = plant,
                User = user
            };

            return UseCase.Success(userPlantResponseDto);
        }

        public async Task<IUseCaseResult> AddUserPlantActivityAsync(AddUserPlantActivityDto addUserPlantActivityDto, List<AddFileDto> files, string emailAddress)
        {
            // Get user details
            var user = await _userService.GetUserByEmailAsync(emailAddress);
            if (user == null)
            {
                return UseCase.Fail(ResponseMessage.DetailsIncorrect);
            }

            // Get Dto
            var userPlantActivityDto = JsonSerializer.Deserialize<UserPlantActivityDto>(addUserPlantActivityDto.UserPlantActivitySerialized, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
            if (userPlantActivityDto == null)
            {
                return UseCase.Fail(ResponseMessage.DetailsIncorrect);
            }

            // Add files
            var addedFiles = await _userPlantActivityService.AddUserPlantMediaAsync(files, userPlantActivityDto.UserPlantId, user.Id);

            // Add activity
            await _userPlantActivityService.AddUserPlantActivityAsync(userPlantActivityDto, addedFiles, user.Id);

            return UseCase.Success();


        }
    }

}
