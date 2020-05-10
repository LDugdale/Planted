namespace Planted.Core.Security
{
    public class TokenSettings : ITokenSettings
    {
        public string Secret { get; set; }

        public int AccessTokenExpiration { get; set; }

        public int RefreshTokenExpiration { get; set; }

        public string Audience { get; set; }

        public string Issuer { get; set; }
    }
}
