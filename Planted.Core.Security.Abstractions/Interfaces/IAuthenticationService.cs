namespace Planted.Core.Security
{
    public interface IAuthenticationService
    {
        string CreatePasswordHash(string password);

        bool IsValidPassword(string providedPassword, string passwordHash);

        AccessToken CreateAccessToken(string emailAddress);

        //ICommandResult<AccessToken> RefreshToken(string refreshToken, string emailAddress);

        void RevokeRefreshToken(string refreshToken);
    }
}
