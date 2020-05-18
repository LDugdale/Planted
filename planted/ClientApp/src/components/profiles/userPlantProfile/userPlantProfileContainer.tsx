import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from "react-router-dom";
import { CircularProgress, GridList, GridListTile, Button, Card, CardActions, CardActionArea, CardMedia, CardContent, Typography, Link } from '@material-ui/core';
import Header from './header';
import ActivityList from './activity/activityList';
import { UserPlant } from '../../../types/userPlant';
import { Token } from '../../../types/authentication';
import { userPlantService } from '../../../services/';
import withAuthorization from '../../../session/withAuthorization' 



interface UserPlantProfileParams {
    userPlantId: string
}

interface userPlantProfileProps  extends RouteComponentProps<UserPlantProfileParams>{
    authUser: Token
}

interface UserPlantsProfileContainerState {
    userPlant: UserPlant,
    pageNumber: number,
    pageLoadProgress: number,
}

class UserPlantsProfileContainer extends Component<userPlantProfileProps, UserPlantsProfileContainerState> {

    state: UserPlantsProfileContainerState = {
        userPlant: {} as UserPlant,
        pageNumber: 0,
        pageLoadProgress: 0
    };

    constructor(props: userPlantProfileProps){
        super(props);

        this.handleClose = this.handleClose.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this)
    }

    async componentDidMount(){
        const userPlant = await userPlantService.getUserPlant(this.props.match.params.userPlantId)
        this.setState({userPlant: userPlant,
            pageLoadProgress: 100});
    }

    isUsersPlant(): boolean {
        return this.props.authUser.sub === this.state.userPlant.user.emailAddress
    }

    handlePageLoadComplete(){
        this.setState({pageLoadProgress: 100})
    }

    handleClose(){

    }

    handlePageChange(event: React.ChangeEvent<{}>, newPageNumer: number){
        this.setState({pageNumber: newPageNumer})
    }

    render() {

        if(this.state.pageLoadProgress < 100) {        
            return (
                <CircularProgress variant="determinate" value={this.state.pageLoadProgress}  />
            )
        }

        return (
            <div>
                <Header
                    onClose={this.handleClose}
                    onPageChange={this.handlePageChange}
                    pageNumber={this.state.pageNumber}
                    userPlant={this.state.userPlant}
                    isUsersPlant={this.isUsersPlant()}
                />
                <ActivityList />
            </div>
        )
    }
}

export default withAuthorization(UserPlantsProfileContainer)
