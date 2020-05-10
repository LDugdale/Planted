import React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useModalComponentStyles } from '../../../theme/styles';

export interface ModalHeaderProps {
    onClose: () => void
}

export const ModalHeader: React.FC<ModalHeaderProps> = (props) => {

    const classes = useModalComponentStyles();

    return(
        <AppBar
            position="static"
            color="inherit"
        >
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => props.onClose()}
                >
                    <ArrowBackIosIcon />
                </IconButton>
                <div className={classes.spacer}></div>

                {props.children}

            </Toolbar>
        </AppBar>
    );
}