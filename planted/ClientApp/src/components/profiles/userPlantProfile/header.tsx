import React from 'react';
import { Box, Typography, Avatar, Tabs, Tab } from '@material-ui/core';
import { ModalHeader } from '../../modals/sharedComponents';
import { useProfileStyles } from '../../../theme/styles';
import { UserPlant } from '../../../types/userPlant';

interface HeaderProps {
    userPlant: UserPlant,
    onClose: () => void,
    onPageChange: (event: React.ChangeEvent<{}>, newPageNumber: number) => void,
    pageNumber: number,
    isUsersPlant: boolean
}

const Header: React.FC<HeaderProps> = (props) => {

    const classes = useProfileStyles();

    return (
        <Box>
            <ModalHeader 
                onClose={props.onClose}
            />

            <Box 
                className={classes.headerBackground}
            >
                <Box>
                    <Box
                        className={classes.headerInfoWrapper}
                    >
                        <Avatar
                            className={classes.avatar}
                        />
                    </Box>

                    <Box
                        className={classes.headerActionWrapper}
                    >
                    </Box>
                </Box>
                <Box >
                    <Typography variant="h5">
                        {props.userPlant.nickname}
                    </Typography>
                    <Typography variant="subtitle1">
                        {props.userPlant.plant.latinName}
                    </Typography>
                </Box>
            </Box>
            <Tabs
                className={classes.tabbedMenu}
                value={props.pageNumber}
                onChange={props.onPageChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Activity" />
                <Tab label="Media" />
            </Tabs>
        </Box>
    );
}

export default Header;