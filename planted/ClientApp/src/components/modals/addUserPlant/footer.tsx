import React from 'react';
import { Box, Stepper, Step, StepLabel, IconButton } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import DoneIcon from '@material-ui/icons/Done';
import { getPages } from './pages/pageInfo';
import { useAddUserPlantStyles } from '../../../theme/styles';

interface FooterProps {
    currentPage: number,
    onBack: () => void,
    onNext: () => void,
    isCompleted: boolean
}

const Footer: React.FC<FooterProps> = (props) => {
    
    const classes = useAddUserPlantStyles();
    const pages = getPages('');

    return(
        <Box>
            <Stepper activeStep={props.currentPage} alternativeLabel>
                {pages.map((page) => (
                    <Step key={page.id} completed={props.isCompleted}>
                        <StepLabel>{page.label}</StepLabel>
                    </Step>
                ))} 
            </Stepper>

            <Box
                className={classes.footerButtonWrapper}
            >
                <IconButton
                    disabled={props.currentPage === 0}
                    onClick={props.onBack}
                >
                    <ArrowBackIosIcon />
                </IconButton>
                <IconButton
                    disabled={!props.isCompleted}
                    onClick={props.onNext}>
                    {props.currentPage === pages.length - 1 ? <DoneIcon /> : <ArrowForwardIosIcon />}
                </IconButton>
            </Box>
        </Box>
    );    
}

export default Footer;