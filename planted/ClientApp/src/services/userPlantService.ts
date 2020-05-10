import { userPlant } from '../data/server';
import * as storage from '../constants/storage';
import { Plant } from '../types/plant';
import { AddUserPlant, UserPlant, UserPlantActivity, UserPlantActivityUpload } from '../types/userPlant';

export const addUserPlant = async (plant: Plant, nickname: string) => {
    
    let data: AddUserPlant = {
        plantId: plant.id,
        nickname: nickname
    };

    await userPlant.addUserPlant(data);
}

export const getUserPlants = async (): Promise<Array<UserPlant>> => {    

    let userPlants = undefined// JSON.parse(localStorage.getItem(storage.USER_PLANT_STORAGE));
    if(!userPlants) {
        userPlants = await userPlant.getUserPlants();
        localStorage.setItem(storage.USER_PLANT_STORAGE, JSON.stringify(userPlants));
    }
    
    return userPlants;
}

export const getUserPlant = async (userPlantId: string) => {   
    return await userPlant.getUserPlant(userPlantId);
}

export const addUserPlantActivity = async (media: Array<File>, activity: UserPlantActivity) => {

    let medias: any = {};
    for (let i = 0; i < 4; i++) {
        medias[`media${1}`] = media[i]
    }

    let userPlantActivityUpload: UserPlantActivityUpload = medias;
    userPlantActivityUpload.userPlantActivitySerialized = JSON.stringify(activity);

    const response = await userPlant.addUserPlantActivity(userPlantActivityUpload);
    return response;
}