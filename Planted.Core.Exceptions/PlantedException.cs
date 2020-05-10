using System;

namespace Planted.Exceptions
{
    public class PlantedException : Exception
    {
        public PlantedException()
        {
        }

        public PlantedException(string message)
            : base(message)
        {
        }

        public PlantedException(string message, System.Exception inner)
            : base(message, inner)
        {
        }
    }
}
