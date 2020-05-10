namespace Planted.Core.Security
{
    public interface ITokenSettings
    {
        string Secret { get; set; }

        int AccessTokenExpiration { get; set; }

        int RefreshTokenExpiration { get; set; }

        string Audience { get; set; }

        string Issuer { get; set; }
    }
}
