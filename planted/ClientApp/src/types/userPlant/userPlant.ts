import { Plant } from '../plant/plant';
import { User } from '../user/user';

export interface UserPlant {
    id: string,
    plantId: string, 
    userId: string, 
    nickname: string,
    latinName: string,
    plant: Plant,
    user: User,
}