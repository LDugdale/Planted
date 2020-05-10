import React, { Component } from 'react';
import { Container, Box } from '@material-ui/core';
import Header from './header';
import Content from './content';
import Footer from './footer';
import { getPages } from './pages/pageInfo';
import { plantService, userPlantService } from '../../../services';
import { Plant } from '../../../types/plant';
import { AddUserPlant } from '../../../types/userPlant';
import { plant } from '../../../data/server';


export interface AddUserPlantProps {
    onActivityClose: () =>  void,
};

interface AddUserPlantState {
    currentPage: number,
    userPlantName: string, 
    selectedPlant: Plant | null,
    userPlantTypeInput: string
    plants: Array<Plant>,
};

export default class AddUserPlantContainer extends Component<AddUserPlantProps, AddUserPlantState> {

    state: AddUserPlantState = {
        currentPage: 0,
        userPlantName: '', 
        selectedPlant: null,  
        userPlantTypeInput: '',
        plants: [],
    };

    constructor(props: AddUserPlantProps) {
        super(props);
        this.handleNextPage = this.handleNextPage.bind(this);
        this.handleBackPage = this.handleBackPage.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleUserPlantNameChange = this.handleUserPlantNameChange.bind(this);
        this.handlePlantSearchInput = this.handlePlantSearchInput.bind(this);
        this.handleSelectedPlant = this.handleSelectedPlant.bind(this);
    }

    handleNextPage() {
        if(this.state.currentPage < 1){
            this.setState((prevState) => {
                return {currentPage: prevState.currentPage + 1};
            });
        } else {

            if(!this.state.selectedPlant){
                return;
            }
            
            userPlantService.addUserPlant(this.state.selectedPlant, this.state.userPlantName)
        }
    }
    
    handleBackPage() {
        this.setState((prevState) => {
            return {currentPage: prevState.currentPage - 1};
        });
    }

    handleClose() {
        this.props.onActivityClose()
    }

    handleUserPlantNameChange(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const target = event.target;
        const value = target.value;
        
        this.setState({userPlantName: value});
    }

    isPageCompleted(): boolean {
        if(this.state.currentPage === 0){
            return this.state.userPlantName.length > 0 && this.state.userPlantName !== null
        } else if (this.state.currentPage === 1){
            return this.state.selectedPlant !== null;
        }

        return false;
    }

   async handlePlantSearchInput(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const target = event.target;
        const value = target.value;
        
        this.setState({userPlantTypeInput: value});

        const plants: Array<Plant> = await plantService.searchPlants(value);
        this.setState({plants: plants});
    }

    handleSelectedPlant(plant: Plant){
        this.setState({selectedPlant: plant});
    }
    
    render(){

        const currentPage = getPages(this.state.userPlantName)[this.state.currentPage]


        return (
            <Container
                style={{
                    backgroundColor: 'white',
                    height:'100%',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 0}}
            >
                <Header
                    onClose={this.handleClose}
                    title={currentPage.title}
                />
                <Content
                    currentPage={this.state.currentPage}
                    userPlantName={this.state.userPlantName}
                    onUserPlantNameChange={this.handleUserPlantNameChange}
                    onPlantSearch={this.handlePlantSearchInput}
                    plants={this.state.plants}
                    userPlantTypeInput={this.state.userPlantTypeInput}
                    selectedPlant={this.state.selectedPlant}
                    onSelectedPlant={this.handleSelectedPlant}
                />
                <Footer
                    isCompleted={this.isPageCompleted()}     
                    currentPage={this.state.currentPage}
                    onBack={this.handleBackPage}
                    onNext={this.handleNextPage}
                />
            </Container>
            
        );
    }
}