using Planted.User.Data;
using System.Threading.Tasks;

namespace Planted.UseCases
{
    public interface IUserUseCases
    {
        Task<IUseCaseResult<UserDto>> SignUp(SignUpUserDto signUpUserDto);

        Task<IUseCaseResult<UserDto>> SignIn(SignInUserDto signInUserDto);
    }
}
