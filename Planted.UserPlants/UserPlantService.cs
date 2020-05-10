using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Planted.UserPlants.Data;

namespace Planted.UserPlants
{
    public class UserPlantService : IUserPlantService
    {

        private readonly IUserPlantsRepository _userPlantRepository;

        public UserPlantService(IUserPlantsRepository userPlantRepository)
        {
            _userPlantRepository = userPlantRepository ?? throw new ArgumentNullException(nameof(userPlantRepository));
        }

        public async Task AddUserPlantAsync(AddUserPlantDto addUserPlant, string userId)
        {
            var userPlantDto = new UserPlantDto
            {
                Nickname = addUserPlant.Nickname,
                PlantId = addUserPlant.PlantId.ToString(),
                UserId = userId
            };

            await _userPlantRepository.AddUserPlantAsync(userPlantDto);
        }

        public async Task<IEnumerable<UserPlantDto>> GetUserPlantsAsync(string userId)
        {
            return await _userPlantRepository.GetUserPlantsAsync(userId);
        }

        public async Task<UserPlantDto> GetUserPlantAsync(string userPlantId)
        {
            return await _userPlantRepository.GetUserPlantAsync(userPlantId);
        }

        //public async Task AddUserPlantActivityAsync(AddUserPlantActivity addUserPlantActivity,  UserDto user)
        //{

        //    var userPlantActivityDto = JsonSerializer.Deserialize<UserPlantActivityDto>(addUserPlantActivity.UserPlantActivitySerialized);

        //    // store media and return info {path, guid-name}

        //    // add media info to db

        //    // add activity info to DB



        //    userPlantActivityDto.UserId = user.Id.ToString();
        //    await _userPlantRepository.AddUserPlantActivity(userPlantActivityDto);

        //}
    }
}
