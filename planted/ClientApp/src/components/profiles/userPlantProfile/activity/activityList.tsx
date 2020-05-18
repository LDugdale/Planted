import React from 'react';
import { Divider, Box, Typography, Avatar, List, ListItem, ListItemAvatar, ListItemText, ListItemIcon  } from '@material-ui/core';
import EcoIcon  from '@material-ui/icons/Eco';
import { ModalHeader } from '../../../modals/sharedComponents';
import { useActivityStyles } from '../../../../theme/styles';
import { UserPlant } from '../../../../types/userPlant';

interface ActivityListProps {
}

const ActivityList: React.FC<ActivityListProps> = (props) => {

    const classes = useActivityStyles();

    return (
        <Box>


    <List>
        <ListItem 
            className={classes.spacerListItem}
            alignItems="flex-start">
          <Divider 
            className={classes.activityDivider}
            orientation="vertical" flexItem 
            />
      </ListItem>

      <ListItem alignItems="flex-start">
          <Divider 
            className={classes.activityDivider}
            orientation="vertical" flexItem 
            />
        <ListItemIcon >
          <EcoIcon color="primary" />
        </ListItemIcon>
        <ListItemText
            className={classes.activityItemWrapper}
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <Divider className={classes.activityDivider} orientation="vertical" flexItem />

        <ListItemIcon>
          <EcoIcon 
            className={classes.flippedIcon}
          color="primary"/>
        </ListItemIcon>
        <ListItemText 
            className={classes.activityItemWrapper}
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
      <Divider  className={classes.activityDivider} orientation="vertical" flexItem />

        <ListItemIcon>
          <EcoIcon color="primary"/>
        </ListItemIcon>
        <ListItemText
            className={classes.activityItemWrapper}
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>



      <ListItem 
            className={classes.spacerListItem}
            alignItems="flex-start">
          <Divider 
            className={classes.activityDivider}
            orientation="vertical" flexItem 
            />
      </ListItem>

    </List>




        </Box>
    );
}

export default ActivityList;