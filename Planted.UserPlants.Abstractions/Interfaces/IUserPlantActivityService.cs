using Planted.Core.Storage;
using Planted.Storage;
using Planted.UserPlants.Data;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Planted.UserPlants
{
    public interface IUserPlantActivityService
    {
        Task<List<AddedFileDto>> AddUserPlantMediaAsync(List<AddFileDto> files, string userPlantId, string userId);

        Task AddUserPlantActivityAsync(UserPlantActivityDto userPlantActivityDto, List<AddedFileDto> files, string userId);
    }
}
