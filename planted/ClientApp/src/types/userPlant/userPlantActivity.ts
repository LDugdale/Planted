import { UserPlantActivityType } from './userPlantActivityType';

export interface UserPlantActivity {
    activityTypes: Array<UserPlantActivityType>
    postText: string,
    userPlantId: string,
    plantId: string
}

