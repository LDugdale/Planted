import React from 'react';
import { Box, Stepper, Step, StepLabel, IconButton } from '@material-ui/core';
import { useAddUserPlantStyles } from '../../../theme/styles';
import ChooseNamePage from './pages/chooseNamePage';
import ChoosePlantTypePage from './pages/choosePlantTypePage';
import { Plant } from '../../../types/plant';

interface ContentProps {
    currentPage: number,
    userPlantName: string
    onUserPlantNameChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
    plants: Array<Plant>,
    userPlantTypeInput: string,
    onPlantSearch: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
    selectedPlant: Plant | null,
    onSelectedPlant: (plant: Plant) => void,
}

const Content: React.FC<ContentProps> = (props) => {

    return (
        <>
            { props.currentPage === 0 &&
                <ChooseNamePage 
                    userPlantName={props.userPlantName}
                    onUserPlantNameChange={props.onUserPlantNameChange}
                />
            }
            { props.currentPage === 1 &&
                <ChoosePlantTypePage
                    onPlantSearch={props.onPlantSearch}
                    plants={props.plants}
                    userPlantTypeInput={props.userPlantTypeInput}
                    selectedPlant={props.selectedPlant}
                    onSelectedPlant={props.onSelectedPlant}
                />
            }
        </>
    );
}

export default Content;