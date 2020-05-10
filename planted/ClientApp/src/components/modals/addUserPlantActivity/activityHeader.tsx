import React from 'react';
import { Grid, Button, IconButton, Box} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useAddUserPlantActivityStyles } from '../../../theme/styles';
import { ModalHeader } from '../sharedComponents/modalHeader';


interface ActivityHeaderProps {
    onActivityClose: () => void,
    onActivityPost: () => void,
}

const ActivityHeader: React.FC<ActivityHeaderProps> = (props: ActivityHeaderProps) => {

    const classes = useAddUserPlantActivityStyles();

    return(
        <Box
            className={classes.header}
        >
            <ModalHeader
                onClose={() => props.onActivityClose()}
            >
                <Button
                    onClick={props.onActivityPost}
                    variant="contained"
                    color="primary"
                    className={classes.headerButton}
                    endIcon={<SendIcon />}
                >
                    Post
                </Button>
            </ModalHeader>
        </Box>
    );
}

export default ActivityHeader;