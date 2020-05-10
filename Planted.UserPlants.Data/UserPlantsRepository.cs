using MongoDB.Bson;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Planted.UserPlants.Data
{
    public class UserPlantsRepository : IUserPlantsRepository
    {

        private readonly IUserPlantsDbContext _dbContext;

        public UserPlantsRepository(IUserPlantsDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task AddUserPlantAsync(UserPlantDto userPlantDto)
        {
            var userPlant = new UserPlant
            {
                Id = userPlantDto.Id,
                Nickname = userPlantDto.Nickname,
                PlantId = userPlantDto.PlantId,
                UserId = userPlantDto.UserId
            };
            await _dbContext.UserPlants.InsertOneAsync(userPlant);
        }


        public async Task<IEnumerable<UserPlantDto>> GetUserPlantsAsync(string userId)
        {
            var plants = await _dbContext.UserPlants.Find(x => x.UserId == userId).Project(x => 
                new UserPlantDto { 
                    Id = x.Id.ToString(),
                    Nickname = x.Nickname,
                    PlantId = x.PlantId,
                    UserId = x.UserId
                }).ToListAsync();

            return plants;
        }

        public async Task<UserPlantDto> GetUserPlantAsync(string userPlantId)
        {
            var plantObjectId = ObjectId.Parse(userPlantId);

            var plant = await _dbContext.UserPlants.Find(x => x.Id.Equals(plantObjectId)).Project(x =>
                new UserPlantDto
                {
                    Id = x.Id.ToString(),
                    Nickname = x.Nickname,
                    PlantId = x.PlantId,
                    UserId = x.UserId
                }).FirstOrDefaultAsync();

            return plant;
        }

        public async Task AddUserPlantActivity(UserPlantActivityDto userPlantActivityDto)
        {
            //var userPlantActivity = new UserPlantActivity
            //{
            //    Id = userPlantActivityDto.Id,
            //    UserId = userPlantActivityDto.UserId,
            //    PlantId = userPlantActivityDto.PlantId,
            //    ActivityType = userPlantActivityDto.ActivityType,
            //    UserPlantId = userPlantActivityDto.UserPlantId,
            //};
            //await _dbContext.UserPlantActivity.InsertOneAsync(userPlantActivity);
        }
    }
}
