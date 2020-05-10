using Planted.UserPlants.Data;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Planted.UserPlants
{
    public interface IUserPlantService
    {
        Task AddUserPlantAsync(AddUserPlantDto addUserPlant, string userId);

        Task<IEnumerable<UserPlantDto>> GetUserPlantsAsync(string userId);

        Task<UserPlantDto> GetUserPlantAsync(string userPlantId);

        //Task AddUserPlantActivityAsync(AddUserPlantActivity addUserPlantActivity, List<AddFileDto>, UserDto user);

    }
}
