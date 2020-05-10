import React from 'react';
import Box from '@material-ui/core/Box';
import { HomeRoutes } from '../../routing';
import { useHomeStyles } from '../../theme/styles';

interface PagesProps{
    isAddUserPlantOpen: boolean,
    onAddUserPlantClose: () => void
}

const Pages: React.FC<PagesProps> = (props) => {

    const classes = useHomeStyles();

    return(
        <Box className={classes.boxWrapper}>
            <HomeRoutes
                isAddUserPlantOpen={props.isAddUserPlantOpen}
                onAddUserPlantClose={props.onAddUserPlantClose}
            />
        </Box>
    );
}

export default Pages;