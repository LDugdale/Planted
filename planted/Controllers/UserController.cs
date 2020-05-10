using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Planted.UseCases;
using System;
using Planted.Exceptions;
using Planted.User.Data;

namespace Planted.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : PlantedController
    {
        private readonly ILogger<UserController> _logger;
        private readonly IUserUseCases _userUseCases;

        public UserController(ILogger<UserController> logger, IUserUseCases userUseCases)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            _userUseCases = userUseCases ?? throw new ArgumentNullException(nameof(userUseCases));
        }

        [HttpPost("[action]")]
        public async Task<ActionResult<UserDto>> SignUp([FromBody]SignUpUserDto signUpUser)
        {
            try
            {
                var signUpResult = await _userUseCases.SignUp(signUpUser);

                return UseCaseResponse(signUpResult);
            }
            catch(PlantedException ex)
            {
                _logger.LogDebug(ex.Message);
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                _logger.LogDebug(ex.Message);
                return BadRequest(ExceptionMessage.Unexpected);
            }
        }

        [HttpPost("[action]")]
        public async Task<ActionResult<UserDto>> SignIn([FromBody]SignInUserDto signInUser)
        {
            try
            {
                var signInResult = await _userUseCases.SignIn(signInUser);

                return UseCaseResponse(signInResult);
            }
            catch (Exception ex)
            {
                _logger.LogDebug(ex.Message);
                return BadRequest(ExceptionMessage.Unexpected);
            }
        }
    }
}