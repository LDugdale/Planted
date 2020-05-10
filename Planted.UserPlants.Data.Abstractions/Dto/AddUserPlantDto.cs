using System.ComponentModel.DataAnnotations;

namespace Planted.UserPlants.Data
{
    public class AddUserPlantDto
    {
        [Required]
        public object PlantId { get; set; }

        [Required]
        public string Nickname { get; set; }
    }
}
