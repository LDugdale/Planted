import { PlantName } from './plantName'

export interface Plant {
    id: string, 
    latinName: string,
    genus: string,
    names: Array<PlantName>
}