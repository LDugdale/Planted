namespace Planted.UserPlants.Data
{
    public class UserPlantActivityDto
    {
        public string UserId { get; set; }

        public UserPlantDto UserPlant { get; set; }

        public UserPlantActivityType ActivityType { get; set; }

        public string PostText { get; set; }
    }
}
