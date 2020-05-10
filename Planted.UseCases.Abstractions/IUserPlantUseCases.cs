using Planted.Storage;
using Planted.UserPlants.Data;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Planted.UseCases
{
    public interface IUserPlantUseCases
    {
        Task<IUseCaseResult> AddUserPlantAsync(AddUserPlantDto addUserPlantDto, string emailAddress);

        Task<IUseCaseResult<IEnumerable<UserPlantDto>>> GetUserPlantsAsync(string emailAddress);

        Task<IUseCaseResult<UserPlantDto>> GetUserPlantAsync(string userPlantId);

        Task<IUseCaseResult> AddUserPlantActivityAsync(AddUserPlantActivityDto addUserPlantActivity, List<AddFileDto> Files, string emailAddress);
    }
}
