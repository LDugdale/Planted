import { postData, getData, postMultiPartData } from './helpers';

export const addUserPlant = (data) => {
    let path = 'https://localhost:44347/api/UserPlant/AddUserPlant';
    return postData(path, data); 
}

export const getUserPlants = () => {
    let path = 'https://localhost:44347/api/UserPlant/GetUserPlants';
    return getData(path); 
}

export const getUserPlant = (userPlantId) => {    
    const queryString = userPlantId ? '?userPlantId=' + userPlantId : '';
    let path = 'https://localhost:44347/api/UserPlant/GetUserPlant' + queryString;
    return getData(path); 
}

export const addUserPlantActivity = (userPlantActivity) => {

        let path = 'https://localhost:44347/api/UserPlant/AddUserPlantActivityWithMedia';

        return postMultiPartData(path, userPlantActivity);
}