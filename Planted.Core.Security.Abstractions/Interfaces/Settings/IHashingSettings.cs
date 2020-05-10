namespace Planted.Core.Security
{
    public interface IHashingSettings
    {
        int Iterations { get; set; }

        int SaltSize { get; set; }

        int KeySize { get; set; }
    }
}
