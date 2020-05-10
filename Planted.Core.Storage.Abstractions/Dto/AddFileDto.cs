namespace Planted.Storage
{
    public class AddFileDto
    {
        public string TrustedFileName { get; set; }

        public string UnTrustedFileName { get; set; }

        public byte[] File { get; set; }
    }
}
