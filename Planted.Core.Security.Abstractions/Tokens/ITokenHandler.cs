namespace Planted.Core.Security
{
    public interface ITokenHandler
    {
        AccessToken CreateAccessToken(string emailAddress);
        
        RefreshToken TakeRefreshToken(string token);
        
        void RevokeRefreshToken(string token);
    }
}
