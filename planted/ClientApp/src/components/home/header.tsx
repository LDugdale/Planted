import React from 'react';
import { AppBar, Toolbar, IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import MenuIcon from '@material-ui/icons/Menu';
import { useHeaderStyles } from '../../theme/styles';

interface HeaderProps {
    onDrawerClick: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void,
    onAddUserPlantClick: () => void,
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {

    const classes = useHeaderStyles();

    return(
        <AppBar
            className={classes.appBar} 
            position="static"
            color="inherit"
        >
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => props.onDrawerClick(true)}
                >
                    <MenuIcon
                        className={classes.icon}
                    />
                </IconButton>
                <div className={classes.spacer}></div>
                <IconButton
                    edge="end"
                    color="inherit"
                    onClick={() => props.onAddUserPlantClick()}
                >
                    <AddIcon
                        className={classes.icon}
                    />
                </IconButton>

            </Toolbar>
        </AppBar>
    );
}

export default Header;