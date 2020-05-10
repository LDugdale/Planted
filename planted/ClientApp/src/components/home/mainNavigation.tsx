import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder.js';
import RestoreIcon from '@material-ui/icons/Restore';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useLocation, useHistory } from 'react-router-dom';
import * as routes from '../../constants/routes';

interface MainNavigationProps{
}

const getCurrentPage = (currentRoute: string) : string | undefined => {
    const homeRoutes = [routes.USER_PLANTS]
    const route = homeRoutes.find(x => currentRoute.indexOf(x) !== -1 )
    return route
}

const MainNavigation: React.FC<MainNavigationProps> = (props) => {

    let history = useHistory();
    const location = useLocation();
    const [currentPage, setCurrentPage] = React.useState(getCurrentPage(location.pathname));

    const handlePageChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setCurrentPage(newValue);
        history.push(newValue);
    };

    return(
        <BottomNavigation value={currentPage} onChange={handlePageChange}>
            <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Nearby" value={routes.USER_PLANTS} icon={<LocationOnIcon />} />
            <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
        </BottomNavigation>
    );
}

export default MainNavigation;