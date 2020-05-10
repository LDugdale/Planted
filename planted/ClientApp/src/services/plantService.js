import { plant } from '../data/server';

export const searchPlants = (searchText) => {
    let data = {
        searchText: searchText
    };
    
    return new Promise((resolve, reject) => {
        plant.searchPlants(searchText)    
        .then((data) => {
            resolve(data)
        })
        .catch((error) => {
            reject(error)
        });
    });
}