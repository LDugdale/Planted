using System.Collections.Generic;
using System.Threading.Tasks;

namespace Planted.UserPlants.Data
{
    public interface IUserPlantsRepository
    {
        Task AddUserPlantAsync(UserPlantDto userPlant);

        Task<IEnumerable<UserPlantDto>> GetUserPlantsAsync(string userId);

        Task<UserPlantDto> GetUserPlantAsync(string userPlantId);

        Task AddUserPlantActivity(UserPlantActivityDto userPlantActivity);

    }
}
