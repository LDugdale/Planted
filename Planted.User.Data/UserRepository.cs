using MongoDB.Bson;
using MongoDB.Driver;
using System.Threading.Tasks;

namespace Planted.User.Data
{
    public class UserRepository : IUserRepository
    {

        private readonly IUserDbContext _dbContext;

        public UserRepository(IUserDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<UserDto> CreateUserAsync(SignUpUserDto signUpUser)
        {

            var user = await _dbContext.TransactionAsync<UserDto>(typeof(User).Name, async (collection) =>
            {

                await _dbContext.Users.InsertOneAsync(new User
                {
                    EmailAddress = signUpUser.EmailAddress,
                    Username = signUpUser.Username,
                    Password = signUpUser.Password
                });

                var createdUser = await collection.Find(x => x.EmailAddress == signUpUser.EmailAddress).SingleAsync();

                return createdUser;
            });

            return user;
        }

        public async Task<UserDto> GetUserByIdAsync(string userId)
        {
            var userObjectId = ObjectId.Parse(userId);

            var userDto = await _dbContext.Users.Find(x => x.Id.Equals(userObjectId)).Project(user =>
                new UserDto
                {
                    Id = user.Id.ToString(),
                    EmailAddress = user.EmailAddress,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Token = user.Token,
                    Username = user.Username
                }).SingleOrDefaultAsync();

            return userDto;
        }

        public async Task<UserDto> GetUserByEmailAsync(string emailAddress)
        {
            var userDto = await _dbContext.Users.Find(x => x.EmailAddress == emailAddress).Project(user =>
                new UserDto
                {
                    Id = user.Id.ToString(),
                    EmailAddress = user.EmailAddress,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Token = user.Token,
                    Username = user.Username
                }).SingleOrDefaultAsync();

            return userDto;
        }
    }
}
