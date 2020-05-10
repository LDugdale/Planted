import React from 'react';
import { Grid, IconButton, Box} from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import { useAddUserPlantActivityStyles } from '../../../theme/styles';

interface ActivityFooterProps {
    onMediaChange: (event: React.ChangeEvent<HTMLInputElement>, media: FileList | null) => void
}

const ActivityFooter: React.FC<ActivityFooterProps> = (props: ActivityFooterProps) => {
    const classes = useAddUserPlantActivityStyles();

    return (
        <Box
            className={classes.footer}
        >
            <Grid item xs={12}> 

                <input
                    className={classes.input}
                    id="mediaUpload"
                    multiple
                    accept='image/x-png,image/gif,image/jpeg'
                    type="file"
                    onChange={event => props.onMediaChange(event, event.target!.files)}

                />
                <label htmlFor="mediaUpload">
                    <IconButton color="primary" className={classes.footerButton} component="span">
                        <FolderIcon />
                    </IconButton>
                </label>

                <IconButton color="primary"className={classes.footerButton}>
                    <FolderIcon />
                </IconButton>
            </Grid>
        </Box>     
    );
}

export default ActivityFooter;