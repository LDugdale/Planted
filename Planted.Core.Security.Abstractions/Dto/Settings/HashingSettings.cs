namespace Planted.Core.Security
{
    public class HashingSettings : IHashingSettings
    {
        public int Iterations { get; set; } = 10000;

        public int SaltSize { get; set; }

        public int KeySize { get; set; }
    }
}
