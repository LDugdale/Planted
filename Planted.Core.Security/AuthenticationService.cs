namespace Planted.Core.Security
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly ITokenSettings _tokenSettings;
        private readonly IPasswordHasher _passwordHasher;
        private readonly ITokenHandler _tokenHandler;

        public AuthenticationService(ITokenSettings tokenSettings, IPasswordHasher passwordHasher, ITokenHandler tokenHandler)
        {
            _tokenSettings = tokenSettings;
            _passwordHasher = passwordHasher;
            _tokenHandler = tokenHandler;
        }

        public string CreatePasswordHash(string password)
        {
            return _passwordHasher.HashPassword(password);
        }

        public bool IsValidPassword(string providedPassword, string passwordHash)
        {
            return _passwordHasher.PasswordMatches(providedPassword, passwordHash);
        }

        public AccessToken CreateAccessToken(string emailAddress)
        {
            return _tokenHandler.CreateAccessToken(emailAddress);
        }

        //public AccessToken RefreshToken(string refreshToken, string emailAddress)
        //{
        //    var token = _tokenHandler.TakeRefreshToken(refreshToken);

        //    if (token == null || token.IsExpired())
        //    {
        //        return Command.Fail<AccessToken>(null, ResponseMessage.InvalidToken);
        //    }

        //    var accessToken = _tokenHandler.CreateAccessToken(emailAddress);

        //    return Command.Success(accessToken);
        //}

        public void RevokeRefreshToken(string refreshToken)
        {
            _tokenHandler.RevokeRefreshToken(refreshToken);
        }
    }
}
