using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace Planted.Core.Security
{
    public class TokenHandler : ITokenHandler
    {
        private readonly ISet<RefreshToken> _refreshTokens = new HashSet<RefreshToken>();

        private readonly ITokenSettings _tokenSettings;
        private readonly IPasswordHasher _passwordHaser;
        private readonly JwtSecurityTokenHandler _jwtSecurityTokenHandler;

        public TokenHandler(ITokenSettings tokenSettings, IPasswordHasher passwordHaser, JwtSecurityTokenHandler jwtSecurityTokenHandler)
        {
            _tokenSettings = tokenSettings;
            _passwordHaser = passwordHaser;
            _jwtSecurityTokenHandler = jwtSecurityTokenHandler;
        }

        public AccessToken CreateAccessToken(string emailAddress)
        {
            var refreshToken = BuildRefreshToken();
            var accessToken = BuildAccessToken(emailAddress, refreshToken);
            _refreshTokens.Add(refreshToken);

            return accessToken;
        }

        public RefreshToken TakeRefreshToken(string token)
        {
            if (string.IsNullOrWhiteSpace(token))
                return null;

            var refreshToken = _refreshTokens.SingleOrDefault(t => t.Token == token);
            if (refreshToken != null)
                _refreshTokens.Remove(refreshToken);

            return refreshToken;
        }

        public void RevokeRefreshToken(string token)
        {
            TakeRefreshToken(token);
        }

        private RefreshToken BuildRefreshToken()
        {
            var refreshToken = new RefreshToken
            (
                token : _passwordHaser.HashPassword(Guid.NewGuid().ToString()),
                expiration : DateTime.UtcNow.AddSeconds(_tokenSettings.RefreshTokenExpiration).Ticks
            );

            return refreshToken;
        }

        private AccessToken BuildAccessToken(string emailAddress, RefreshToken refreshToken)
        {
            var accessTokenExpiration = DateTime.UtcNow.AddSeconds(_tokenSettings.AccessTokenExpiration);
            var key = Encoding.ASCII.GetBytes(_tokenSettings.Secret);

            var securityToken = new JwtSecurityToken
            (
                issuer: _tokenSettings.Issuer,
                audience: _tokenSettings.Audience,
                claims: GetClaims(emailAddress),
                expires: accessTokenExpiration,
                notBefore: DateTime.UtcNow,
                signingCredentials: new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            );

            var handler = new JwtSecurityTokenHandler();
            var accessToken = handler.WriteToken(securityToken);

            return new AccessToken(accessToken, accessTokenExpiration.Ticks, refreshToken);
        }

        private IEnumerable<Claim> GetClaims(string emailAddress)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Sub, emailAddress)
            };

            return claims;
        }
    }
}
