import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { ModalHeader } from '../sharedComponents';
import { useAddUserPlantStyles } from '../../../theme/styles';

interface HeaderProps {
    onClose: () => void,
    title: string,
}

const Header: React.FC<HeaderProps> = (props) => {

    const classes = useAddUserPlantStyles();

    return (
        <Box
            className={classes.headerWrapper}
        >
            <ModalHeader 
                onClose={props.onClose}
            />
            <Typography
                className={classes.title}
                variant="h4"
            >
                {props.title}
            </Typography>
        </Box>
    );
}

export default Header;