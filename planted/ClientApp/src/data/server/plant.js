import { postData } from './helpers';

export const searchPlants = (searchText) => {
    let path = 'https://localhost:44347/api/Plant/Search';
     
    return postData(path, searchText);
}
