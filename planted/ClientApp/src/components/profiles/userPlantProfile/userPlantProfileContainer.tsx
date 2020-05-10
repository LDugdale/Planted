import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from "react-router-dom";
import { GridList, GridListTile, Button, Card, CardActions, CardActionArea, CardMedia, CardContent, Typography, Link } from '@material-ui/core';
import { UserPlant } from '../../../types/userPlant';
import { userPlantService } from '../../../services/';

interface UserPlantProfileParams {
    userPlantId: string
}

interface UserPlantsProfileContainerState {
    userPlant: UserPlant,
}

class UserPlantsProfileContainer extends Component<RouteComponentProps<UserPlantProfileParams>, UserPlantsProfileContainerState> {

    constructor(props: RouteComponentProps<UserPlantProfileParams>){
        super(props);
    }

    async componentDidMount(){
        const userPlant = await userPlantService.getUserPlant(this.props.match.params.userPlantId)
        this.setState({userPlant: userPlant});
    }

    render() {
        return (
            <div>
                {this.state && this.state.userPlant &&
                    <h1>{this.state.userPlant.nickname}</h1>
                }
            </div>
        )
    }
}

export default withRouter(UserPlantsProfileContainer);
