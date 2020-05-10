using Planted.User.Data;
using System;
using System.Threading.Tasks;

namespace Planted.User
{
    public class UserService : IUserService
    {
 
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository ?? throw new ArgumentNullException(nameof(userRepository));
        }

        public async Task<UserDto> CreateUserAsync(SignUpUserDto signUpUser)
        {
            return await _userRepository.CreateUserAsync(signUpUser);
        }

        public Task<UserDto> GetUserAsync(string emailAddress)
        {
            return _userRepository.GetUserAsync(emailAddress);
        }
    }
}
