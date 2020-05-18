import React from 'react'
import { useUserPlantStyles } from '../../../../theme/styles';
import { GridList, GridListTile, Button, Card, CardActions, CardActionArea, CardMedia, CardContent, Typography, Link } from '@material-ui/core';
import { UserPlantList } from '../../../../types/userPlant';
import { userPlantLinks } from '../../../../routing/links';

export interface UserPlantsGridContainerProps {
    userPlants: Array<UserPlantList>,
    onAddUserPlantActivityOpen: (userPlant: UserPlantList) => void,
}

const UserPlantsGridContainer: React.FC<UserPlantsGridContainerProps> = (props) => {

    const classes = useUserPlantStyles();

    return( 
        <GridList
            spacing={15}
            cellHeight='auto'
            cols={2} 
        >
            {props.userPlants.map((userPlant: UserPlantList) => (
                <GridListTile>
                    <Card>
                    <CardActionArea>
                        <Link 
                            component={userPlantLinks.userPlantLink(userPlant.id)}
                        >
                            <CardMedia
                                image="https://i.pinimg.com/236x/32/57/5a/32575a6e4e4e78920256288f11d6a295.jpg"
                                title={userPlant.latinName}
                                className={classes.cardMedia}
                            />
                            <CardContent>
                            <Typography 
                                className={classes.cardTitle} 
                                gutterBottom 
                                variant="h3" 
                                component="h3"
                            >
                                {userPlant.nickname}
                            </Typography>
                            <Typography 
                                className={classes.cardSubtitle} 
                                variant="body1" 
                                component="p"
                            >
                                by: {userPlant.latinName}
                            </Typography>
                            </CardContent>
                        </Link>
                    </CardActionArea>
                    <CardActions 
                        className={classes.cardActions}
                    >
                        <Button 
                            className={classes.cardButton} 
                            variant="contained" 
                            color="primary" 
                            onClick={() => props.onAddUserPlantActivityOpen(userPlant)}
                        >
                            Add Activity
                        </Button>
                    </CardActions>
                    </Card>
                </GridListTile>
            ))}
            <GridListTile>
                <Card>
                    <CardActionArea>
                        
                    </CardActionArea>
                </Card>
            </GridListTile>
        </GridList>     
    );
};

export default UserPlantsGridContainer;