import { UserPlantActivityType } from './userPlantActivityType';
import { UserPlant } from './userPlant';

export interface UserPlantActivityUpload {
    userPlantActivitySerialized: string,
    media1: File,
    media2: File,
    media3: File,
    media4: File,
}