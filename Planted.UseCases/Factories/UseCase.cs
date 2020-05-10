namespace Planted.UseCases
{
    public class UseCase
    {
        public static IUseCaseResult Success(string message = "")
        {
            return new UseCaseResult(true, message);
        }

        public static IUseCaseResult Fail(string message = "")
        {
            return new UseCaseResult(false, message);
        }


        public static IUseCaseResult<T> Success<T>(T data = null, string message = "") where T : class
        {
            return new UseCaseResult<T>(true, message, data);

        }

        public static IUseCaseResult<T> Fail<T>(T data = null, string message = "") where T : class
        {
            return new UseCaseResult<T>(false, message, data);
        }
    }
}
