namespace Planted.UseCases
{
    public interface IUseCaseResult<T>
    {
        bool IsSuccess { get; set; }

        string Message { get; set; }

        T Data { get; set; }
    }

    public interface IUseCaseResult
    {
        bool IsSuccess { get; set; }

        string Message { get; set; }
    }
}
