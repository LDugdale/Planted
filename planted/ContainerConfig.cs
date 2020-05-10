using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Planted.Core.Data;
using Planted.Core.Security;
using Planted.Core.Storage;
using Planted.Core.Web;
using Planted.Plant;
using Planted.Plant.Data;
using Planted.User;
using Planted.User.Data;
using Planted.UserPlants;
using Planted.UserPlants.Data;
using System.IdentityModel.Tokens.Jwt;

namespace Planted
{
    public static class ContainerConfig
    {
        public static void RegisterUser(this IServiceCollection services)
        {
            services.AddSingleton<IUserService, UserService>();
            services.AddSingleton<IUserRepository, UserRepository>();
            services.AddSingleton<IUserDbContext, UserDbContext>();
        }

        public static void RegisterPlant(this IServiceCollection services)
        {
            services.AddSingleton<IPlantService, PlantService>();
            services.AddSingleton<IPlantRepository, PlantRepository>();
            services.AddSingleton<IPlantDbContext, PlantDbContext>();
        }

        public static void RegisterUserPlants(this IServiceCollection services)
        {
            services.AddSingleton<IUserPlantService, UserPlantService>();
            services.AddSingleton<IUserPlantsRepository, UserPlantsRepository>();
            services.AddSingleton<IUserPlantsDbContext, UserPlantsDbContext>();
        }

        public static void RegisterCoreAuthentication(this IServiceCollection services)
        {
            services.AddSingleton<IAuthenticationService, AuthenticationService>();

            services.AddSingleton<JwtSecurityTokenHandler>();

            services.AddSingleton<ITokenHandler, TokenHandler>();
            services.AddSingleton<IPasswordHasher, PasswordHasher>();

        }

        public static void RegisterCoreAuthenticationSettings(this IServiceCollection services, IConfiguration configuration)
        {
            var hashingSettingsSection = configuration.GetSection(nameof(HashingSettings));
            services.Configure<HashingSettings>(hashingSettingsSection);
            var tokenSettingsSection = configuration.GetSection(nameof(TokenSettings));
            services.Configure<TokenSettings>(tokenSettingsSection);

            services.AddSingleton<ITokenSettings>(sp =>
                sp.GetRequiredService<IOptions<TokenSettings>>().Value);
            services.AddSingleton<IHashingSettings>(sp =>
                sp.GetRequiredService<IOptions<HashingSettings>>().Value);

            //services.AddSingleton<IHashingSettings, HashingSettings>();
            //services.AddSingleton<ITokenSettings, TokenSettings>();
        }

        public static void RegisterCoreData(this IServiceCollection services)
        {
            services.AddSingleton<IPlantedDatabase, PlantedDatabase>();
        }

        public static void RegisterCoreDataSettings(this IServiceCollection services, IConfiguration configuration)
        {
            var databaseSettingsSection = configuration.GetSection(nameof(DatabaseSettings));
            services.Configure<DatabaseSettings>(databaseSettingsSection);

            services.AddSingleton<IDatabaseSettings>(sp =>
                sp.GetRequiredService<IOptions<DatabaseSettings>>().Value);

            //services.AddSingleton<IDatabaseSettings, DatabaseSettings>();
        }

        public static void RegisterCoreWeb(this IServiceCollection services)
        {
            services.AddSingleton<IMultipartRequestHandler, MultipartRequestHandler>();
            services.AddSingleton<IFileService, FileService>();
        }

        public static void RegisterCoreWebSettings(this IServiceCollection services, IConfiguration configuration)
        {
            var fileUploadSection = configuration.GetSection(nameof(FileUploadSettings));
            services.Configure<FileUploadSettings>(fileUploadSection);

            services.AddSingleton<IFileUploadSettings>(sp =>
                sp.GetRequiredService<IOptions<FileUploadSettings>>().Value);
        }


        public static void RegisterCoreStorageSettings(this IServiceCollection services, IConfiguration configuration)
        {
            var fileUploadSection = configuration.GetSection(nameof(StorageSettings));
            services.Configure<StorageSettings>(fileUploadSection);

            services.AddSingleton<IStorageSettings>(sp =>
                sp.GetRequiredService<IOptions<StorageSettings>>().Value);
        }
    }
}
