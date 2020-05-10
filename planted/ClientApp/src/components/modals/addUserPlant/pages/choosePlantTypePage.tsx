import React from 'react';
import { Input, Box, List, ListItem, ListItemText } from '@material-ui/core';
import { useAddUserPlantStyles } from '../../../../theme/styles';
import { Plant } from '../../../../types/plant';

export interface ChoosePlantTypePageProps {
    plants: Array<Plant>,
    userPlantTypeInput: string,
    onPlantSearch: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
    selectedPlant: Plant | null,
    onSelectedPlant: (plant: Plant) =>  void
}

const ChoosePlantTypePage: React.FC<ChoosePlantTypePageProps> = (props) => {

    const classes = useAddUserPlantStyles();

    return(
        <>
            <Box
                className={classes.typeContentWrapper}
            >
                <Input 
                    autoFocus={true}
                    value={props.userPlantTypeInput}
                    onChange={props.onPlantSearch}
                    className={classes.searchBox}
                    placeholder="Type"                     
                    disableUnderline={true}
                />
            </Box>

            <List 
                component="nav"
                className={classes.listWrapper}
            >
                {(props.plants && props.plants.length > 0) &&
                    props.plants.map((plant) => {
                        const secondaryName = plant.names[0].name ? plant.names[0].name: '';
                        const isSelected = props.selectedPlant !== undefined && props.selectedPlant !== null && props.selectedPlant.id === plant.id
                        return(

                            <ListItem 
                                key={plant.id}
                                button
                                selected={isSelected}
                                className={classes.listItem}
                                classes={{selected: classes.listItemSelected}}
                                onClick={() => props.onSelectedPlant(plant)}
                            >
                                <ListItemText
                                    primary={plant.latinName} 
                                    secondary={secondaryName}
                                />
                            </ListItem>
                        )})
                }
            </List>
        </>
    );
} 

export default ChoosePlantTypePage;