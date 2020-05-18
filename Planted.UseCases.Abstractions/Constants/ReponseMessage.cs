namespace Planted.UseCases
{
    public static class ResponseMessage
    {
        public const string RequiredField = "The field is required.";
        public const string EmailExists = "Email address already in use.";

        public const string InvalidToken = "Invalid refresh token.";

        public const string InvalidEmailAddress = "Please enter a valid email address.";
        public const string InvalidPassword = "Please enter a valid password.";
        public const string DetailsIncorrect = "Sign in details are incorrect.";

        public const string SearchTextRequired = "Search text required.";

        public const string PlantIdRequired = "Plant id required.";
        public const string UserIdRequired = "User id required.";
        public const string NicknameRequired = "Nickname required.";

        public const string PlantNotFound = "Plant not found.";
        public const string UserNotFound = "User not found.";
        public const string UserPlantNotFound = "User plant not found.";


    }
}
