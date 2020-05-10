import React from 'react';
import { Box } from '@material-ui/core';
import {ToggleButton, ToggleButtonGroup} from '@material-ui/lab';
import FolderIcon from '@material-ui/icons/Folder';
import { useAddUserPlantActivityStyles } from '../../../theme/styles';

interface ActivityTypeProps {
    activities: Array<string>,
    onActivitySelect: (event: React.MouseEvent<HTMLElement | MouseEvent>, newActivities: Array<string>) => void,
}

const ActivityType: React.FC<ActivityTypeProps> = (props) => {
    const classes = useAddUserPlantActivityStyles();

    return (
        <Box
            className={classes.activityButtonsWrapper}
        >
            <ToggleButtonGroup
                className={classes.activityButtons}
                value={props.activities} 
                onChange={props.onActivitySelect}
            >
                <ToggleButton 
                    classes={{selected: classes.activityButtonsSelected}}
                    className={classes.activityButton}
                    value="1" // water
                >  
                    <FolderIcon />
                </ToggleButton>
                <ToggleButton 
                    classes={{selected: classes.activityButtonsSelected}}
                    className={classes.activityButton}
                    value="2" // Feed
                >  
                    <FolderIcon />
                </ToggleButton>
                <ToggleButton 
                    classes={{selected: classes.activityButtonsSelected}}
                    className={classes.activityButton}
                    value="3" // Repot
                >  
                    <FolderIcon />
                </ToggleButton>
                <ToggleButton 
                    classes={{selected: classes.activityButtonsSelected}}
                    className={classes.activityButton}
                    value="4" // Mist
                >  
                    <FolderIcon />
                </ToggleButton>
                <ToggleButton 
                    classes={{selected: classes.activityButtonsSelected}}
                    className={classes.activityButton}
                    value="5" // Rotate
                >  
                    <FolderIcon />
                </ToggleButton>  
            </ToggleButtonGroup>
        </Box>    
    );
}

export default ActivityType;