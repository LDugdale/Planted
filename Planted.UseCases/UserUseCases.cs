using Planted.Core.Security;
using Planted.User;
using Planted.User.Data;
using System.Threading.Tasks;

namespace Planted.UseCases
{
    public class UserUseCases : IUserUseCases
    {

        private readonly IUserService _userService;
        private readonly IAuthenticationService _authenticationService;

        public async Task<IUseCaseResult<UserDto>> SignUp(SignUpUserDto signUpUserDto)
        {
            // Check if user exists
            var user = await _userService.GetUserAsync(signUpUserDto.EmailAddress);
            if (user != null)
            {
                return UseCase.Fail<UserDto>(null, ResponseMessage.EmailExists);
            }

            // Hash Password
            signUpUserDto.Password = _authenticationService.CreatePasswordHash(signUpUserDto.Password);

            // Create User
            var newUser = await _userService.CreateUserAsync(signUpUserDto);

            // Create JWT (access token)
            var accessToken = _authenticationService.CreateAccessToken(newUser.EmailAddress);
            newUser.Token = accessToken.Token;


            return UseCase.Success(newUser);
        }

        public async Task<IUseCaseResult<UserDto>> SignIn(SignInUserDto signInUserDto)
        {
            // Get User
            var user = await _userService.GetUserAsync(signInUserDto.EmailAddress);
            if (user == null)
            {
                return UseCase.Fail<UserDto>(null, ResponseMessage.DetailsIncorrect);
            }

            // Create JWT (access token)
            var accessToken = _authenticationService.CreateAccessToken(user.EmailAddress);
            user.Token = accessToken.Token;

            return UseCase.Success(user);
        }
    }
}
