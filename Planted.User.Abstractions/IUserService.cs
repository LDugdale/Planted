using Planted.User.Data;
using System.Threading.Tasks;

namespace Planted.User
{
    public interface IUserService
    {
        Task<UserDto> CreateUserAsync(SignUpUserDto signUpUser);

        Task<UserDto> GetUserByIdAsync(string userId);

        Task<UserDto> GetUserByEmailAsync(string emailAddress);
    }
}
