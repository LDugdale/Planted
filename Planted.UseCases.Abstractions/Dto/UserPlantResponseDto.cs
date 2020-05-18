using Planted.Plant.Data;
using Planted.User.Data;
using Planted.UserPlants.Data;

namespace Planted.UseCases
{
    public class UserPlantResponseDto : UserPlantDto
    {
        public PlantDto Plant { get; set; }

        public UserDto User { get; set; }
    }
}
