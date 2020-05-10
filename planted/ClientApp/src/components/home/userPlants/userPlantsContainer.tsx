import React, { Component } from 'react';
import { Modal, Slide , Backdrop } from '@material-ui/core';
import AddUserPlantActivityModal from '../../modals/addUserPlantActivity';
import AddUserPlantModal from '../../modals/addUserPlant';
import { userPlantService } from '../../../services'; 
import UserPlantsGrid from './grid';
import { UserPlant } from '../../../types/userPlant';


export interface UserPlantsContainerProps { 
    onAddUserPlantClose: () => void,
    isAddUserPlantOpen: boolean,

}

interface UserPlantsContainerState {
    userPlants: Array<UserPlant>,
    isAddUserPlantActivityOpen: boolean,
    userPlant: UserPlant,
}

export default class UserPlantsContainer extends Component<UserPlantsContainerProps, UserPlantsContainerState> {

    state: UserPlantsContainerState = {
        userPlants: [],
        isAddUserPlantActivityOpen: false,
        userPlant: {} as UserPlant
    };

    constructor(props: UserPlantsContainerProps){
        super(props);
        this.handleAddUserPlantActivityOpen = this.handleAddUserPlantActivityOpen.bind(this);
        this.handleAddUserPlantActivityClose = this.handleAddUserPlantActivityClose.bind(this);
    }

    componentDidMount(){
        this.getPlants();
    }

    async getPlants(){
        const userPlants = await userPlantService.getUserPlants();
        this.setState({ userPlants: userPlants});
    }

    handleAddUserPlantActivityOpen(userPlant: UserPlant) {
        this.setState({userPlant: userPlant});
        this.setState({ isAddUserPlantActivityOpen: true});
    };
    
    handleAddUserPlantActivityClose() {
        this.setState({userPlant: {} as UserPlant});
        this.setState({ isAddUserPlantActivityOpen: false});
    };
    
    render(){
        return(
            <>
                <UserPlantsGrid
                    userPlants={this.state.userPlants}
                    onAddUserPlantActivityOpen={this.handleAddUserPlantActivityOpen}
                />

                <Modal
                    open={this.state.isAddUserPlantActivityOpen}
                    onClose={this.handleAddUserPlantActivityClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                >
                    <Slide direction="up"  in={this.state.isAddUserPlantActivityOpen} timeout={500}>
                        <div
                            style={{height: '100%'}}
                        >
                        <AddUserPlantActivityModal
                            userPlant={this.state.userPlant}
                            onActivityClose={this.handleAddUserPlantActivityClose}
                        />
                        </div>
                    </Slide>
                </Modal>

                <Modal
                    open={this.props.isAddUserPlantOpen}
                    onClose={this.props.onAddUserPlantClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                >
                    <Slide direction="up" in={this.props.isAddUserPlantOpen} timeout={500}>
                        <div
                            style={{height: '100%'}}
                        >                        
                        <AddUserPlantModal
                            onActivityClose={this.props.onAddUserPlantClose}
                        />
                        </div>
                    </Slide>
                </Modal>
            </>
        );
    }
}