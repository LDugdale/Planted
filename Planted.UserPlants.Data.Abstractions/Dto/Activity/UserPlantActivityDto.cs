using System.Collections.Generic;

namespace Planted.UserPlants.Data
{
    public class UserPlantActivityDto
    {
        
        public string UserPlantActivityId { get; set; }

        public string UserId { get; set; }

        public string UserPlantId { get; set; }

        public string PlantId { get; set; }

        public List<UserPlantActivityType> ActivityTypes { get; set; }

        public string PostText { get; set; }
    }
}
