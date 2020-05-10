namespace Planted.UseCases
{
    public class UseCaseResult<T> : IUseCaseResult<T>
    {

        public UseCaseResult(bool isSuccess, string message, T data) =>
            (IsSuccess, Message, Data) = (isSuccess, message, data);


        public bool IsSuccess { get; set; }

        public string Message { get; set; }

        public T Data { get; set; }
    }

    public class UseCaseResult : IUseCaseResult
    {

        public UseCaseResult(bool isSuccess, string message) =>
            (IsSuccess, Message) = (isSuccess, message);

        public bool IsSuccess { get; set; }

        public string Message { get; set; }
    }
}
