import React, { useRef } from 'react';
import { Avatar, Box, Input } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import CancelIcon from '@material-ui/icons/Cancel';
import MediaInfo from './types/mediaInfo';
import { useAddUserPlantActivityStyles } from '../../../theme/styles';

interface ActivityPostProps {
    postText: string,
    onTextAreaChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
    selectedMedia: Array<MediaInfo>,
    onDeleteSelectedImage: (mediaToRemove: MediaInfo) => void,
}

const ActivityPost: React.FC<ActivityPostProps> = (props) => {
    const postText = useRef<HTMLInputElement>(null);
    const classes = useAddUserPlantActivityStyles();

    const focusTextBox = () =>{
        if(postText == null || postText.current == null){
            return;
        }
        postText.current.focus();
    }

    return (
        <Box
            className={classes.post}
            onClick={focusTextBox}
        >
            <Box
                className={classes.postWrapper}
            >
                <Box>
                    <Avatar>  
                        <FolderIcon />
                    </Avatar>
                </Box>
                
                <Box
                    className={classes.inputWrapper}
                >
                    <Input
                        autoFocus={true}
                        inputRef={postText}
                        className={classes.postText}
                        placeholder="Whats happening?"
                        multiline
                        disableUnderline={true}
                        value={props.postText}
                        onChange={props.onTextAreaChange}
                    />

                </Box>
            </Box>

            <Box
                className={classes.selectedImageWrapper}
            >
                    { (props.selectedMedia && props.selectedMedia.length > 0) &&
                        props.selectedMedia.map((media, index) => {

                            const selectedImagseClass = index === 0 ? classes.selectedImagesFirst : classes.selectedImages; 

                            return (
                                <Box className={selectedImagseClass}>
                                    <CancelIcon
                                        className={classes.cancelImage}
                                        onClick={() => props.onDeleteSelectedImage(media)}
                                    />
                                    <img 
                                        className={classes.selectedImage}
                                        src={media.mediaUrl}
                                        alt='selected'
                                    />
                                </Box>
                            );
                        })
                    }
            </Box>

        </Box> 
    );
}

export default ActivityPost;