using System.Threading.Tasks;

namespace Planted.User.Data
{
    public interface IUserRepository
    {
        Task<UserDto> CreateUserAsync(SignUpUserDto signUpUser);

        Task<UserDto> GetUserByIdAsync(string userId);

        Task<UserDto> GetUserByEmailAsync(string emailAddress);
    }
}
