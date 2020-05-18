import React, { Component } from 'react';
import ActivityFooter from './activityFooter';
import ActivityHeader from './activityHeader';
import ActivityPost from './activityPost';
import ActivityType from './activityType';
import MediaInfo from './types/mediaInfo';
import { Container } from '@material-ui/core';
import { userPlantService } from '../../../services';
import { UserPlantActivity, UserPlantActivityType, UserPlantList } from '../../../types/userPlant';


const INITIAL_STATE: AddUserPlantActivityState = {
    activities: [],
    media: [],
    postText: '',
  };

export interface AddUserPlantActivityProps {
    userPlant: UserPlantList
    onActivityClose: () => void;
};

interface AddUserPlantActivityState {
    activities: Array<string>,
    media: Array<MediaInfo>,
    postText: string,
};

export default class AddUserPlantActivityContainer extends Component<AddUserPlantActivityProps, AddUserPlantActivityState> {

    state: AddUserPlantActivityState = {
        activities: [],
        media: [],
        postText: '',
    };

    constructor(props: AddUserPlantActivityProps) {
        super(props);
        this.handleActivitySelect = this.handleActivitySelect.bind(this);
        this.handleMediaChange = this.handleMediaChange.bind(this);
        this.handleDeleteSelectedImage = this.handleDeleteSelectedImage.bind(this);
        this.handleActivityClose = this.handleActivityClose.bind(this);
        this.handlePost = this.handlePost.bind(this);
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    }
    
    async handlePost(){
        const activityTypes = this.state.activities.map(x => Number.parseInt(x) as UserPlantActivityType)
        const media = this.state.media.map(x => x.media);

        const activity: UserPlantActivity = {
            activityTypes: activityTypes,
            postText: this.state.postText,
            plantId: this.props.userPlant.plantId,
            userPlantId: this.props.userPlant.id,
        };

        await userPlantService.addUserPlantActivity(media, activity);

        this.handleActivityClose();
    }

    handleActivityClose(){
        this.setState(INITIAL_STATE);
        this.props.onActivityClose();
    }

    handleActivitySelect(event: React.MouseEvent<HTMLElement | MouseEvent>, newActivities: Array<string>){
        this.setState({activities: newActivities});
    }

    handleMediaChange(event: React.ChangeEvent<HTMLInputElement>, mediaToAdd: FileList | null){
        
        if(mediaToAdd == null){
            return;
        }
        
        const currentMediaList = [...this.state.media];

        Array.from(mediaToAdd).forEach(file => {

            const media: MediaInfo = {
                mediaUrl: URL.createObjectURL(file),
                media: file
            }
    
            currentMediaList.push(media);
        });

        this.setState({
            media: currentMediaList
        }); 
    }

    handleDeleteSelectedImage(mediaToRemove: MediaInfo){

        const currentMediaList = [...this.state.media];

        const filteredMediaList = currentMediaList.filter(media => media.mediaUrl !== mediaToRemove.mediaUrl)

        this.setState({
            media: filteredMediaList
        }); 
    }
    
    handleTextAreaChange(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const target = event.target;
        const value = target.value;

        this.setState({
            postText: value
        });    
    }

    render(){

        return (
            <Container
                style={{
                    height:'100%',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 0}}
            >
                <ActivityHeader
                    onActivityClose={this.handleActivityClose}
                    onActivityPost={this.handlePost}
                />
                <ActivityType
                    activities={this.state.activities}
                    onActivitySelect={this.handleActivitySelect}
                />
                <ActivityPost          
                    postText={this.state.postText}       
                    selectedMedia={this.state.media}
                    onTextAreaChange={this.handleTextAreaChange}
                    onDeleteSelectedImage={this.handleDeleteSelectedImage}
                />
                <ActivityFooter
                    onMediaChange={this.handleMediaChange}
                />
            </Container>
        );
    }
}