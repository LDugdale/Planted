import { UserPlantActivityType } from './userPlantActivityType';
import { UserPlant } from './userPlant';

export interface UserPlantActivity {
    userPlant: UserPlant,
    userPlantActivityTypes: Array<UserPlantActivityType>
    postText: string,
}