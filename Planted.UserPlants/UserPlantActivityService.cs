using Planted.Core.Storage;
using Planted.Storage;
using Planted.UserPlants.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Planted.UserPlants
{
    public class UserPlantActivityService : IUserPlantActivityService
    {
        private readonly IFileClient _fileClient;
        private readonly IUserPlantsRepository _userPlantsRepository;

        public UserPlantActivityService(IFileClient fileClient, IUserPlantsRepository userPlantsRepository)
        {
            _fileClient = fileClient ?? throw new ArgumentNullException(nameof(fileClient));
            _userPlantsRepository = userPlantsRepository ?? throw new ArgumentNullException(nameof(userPlantsRepository));
        }

        public async Task<List<AddedFileDto>> AddUserPlantMediaAsync(List<AddFileDto> files, string userPlantId, string userId)
        {

            var path = $"{userId}\\{userPlantId}";

            var addedFiles = new List<AddedFileDto>();
            foreach (var file in files)
            {
                var fileName = $"{Guid.NewGuid().ToString()}{file.FileExtension}";

                var containerDefinition = new ContainerDefinition { Name = "UserPlants", Path = path };
                var fileDefinition = new FileDefinition { Name = fileName, Data = file.File };

                await _fileClient.SaveFile(containerDefinition, fileDefinition);

                var addedFile = new AddedFileDto
                {
                    FileName = fileName,
                    FilePath = path
                };
                addedFiles.Add(addedFile);

            }

            return addedFiles;
        }

        public async Task AddUserPlantActivityAsync(UserPlantActivityDto userPlantActivityDto, List<AddedFileDto> files, string userId)
        {
            
            var userPlantMedia = files.Select(x => new UserPlantMediaDto
            {
                FileName = x.FileName,
                FilePath = x.FilePath,
                PlantId = userPlantActivityDto.PlantId,
                UserPlantId = userPlantActivityDto.UserPlantId
            });

            userPlantActivityDto.UserId = userId;
            await _userPlantsRepository.AddUserPlantActivityAsync(userPlantActivityDto, userPlantMedia);

        }
    }
}
