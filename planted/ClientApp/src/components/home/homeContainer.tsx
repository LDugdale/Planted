import React, { Component } from 'react';
import { Container, Drawer } from '@material-ui/core';
import MainNavigation from './mainNavigation';
import Pages from './pages';
import Header from './header';
import DrawerMenu from './drawerMenu';


export interface HomeContainerProps {
};

interface HomeContainerState {
    isDrawerOpen: boolean,
    isAddUserPlantOpen: boolean,
};

export default class HomeContainer extends Component<HomeContainerProps, HomeContainerState> {

    state: HomeContainerState = {
        isDrawerOpen: false,
        isAddUserPlantOpen: false,
    };
    
    constructor(props: HomeContainerProps){
        super(props);
        this.handleAddUserPlantOpen = this.handleAddUserPlantOpen.bind(this);
        this.handleAddUserPlantClose = this.handleAddUserPlantClose.bind(this);
    }

    toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }

        this.setState({ isDrawerOpen: open });
    };

    handleAddUserPlantOpen(){
        this.setState({isAddUserPlantOpen: true})
    }
    handleAddUserPlantClose(){
        this.setState({isAddUserPlantOpen: false})
    }

    render() {
        
        return (
            <>
                <Header
                    onDrawerClick={this.toggleDrawer}
                    onAddUserPlantClick={this.handleAddUserPlantOpen}
                />

                <Drawer 
                    open={this.state.isDrawerOpen} 
                    onClose={this.toggleDrawer(false)}
                >
                    <DrawerMenu />
                </Drawer>

                <Container>
                    <Pages 
                        isAddUserPlantOpen={this.state.isAddUserPlantOpen}
                        onAddUserPlantClose={this.handleAddUserPlantClose}
                    />
                </Container>
                
                <MainNavigation />
            </>
        );
    }
}