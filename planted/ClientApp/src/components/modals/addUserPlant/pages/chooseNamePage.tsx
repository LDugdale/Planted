import React from 'react';
import { Box, TextField } from '@material-ui/core';
import { useAddUserPlantStyles } from '../../../../theme/styles';

export interface ChooseNamePageProps {
    userPlantName: string
    onUserPlantNameChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

const ChooseNamePage: React.FC<ChooseNamePageProps> = (props) => {

    const classes = useAddUserPlantStyles();

    return(
        <Box
            className={classes.contentWrapper}
        >
            <TextField 
                autoFocus={true}
                value={props.userPlantName}
                onChange={props.onUserPlantNameChange}
                className={classes.textBox}
                placeholder="Name" 
                variant="outlined"
            />
        </Box>
    );
} 

export default ChooseNamePage;