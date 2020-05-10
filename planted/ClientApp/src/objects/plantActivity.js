import React from 'react';  
import { icons } from '../constants/icons';
import * as activityType  from '../constants/activityType'
import WaterActivity from '../components/singlePages/plantActivity/activity/waterActivity';
import PostActivity from '../components/singlePages/plantActivity/activity/postActivity';

const pages = [
    {
        menuKey:'fertiliser',
        icon: icons.FERTILISER,
        activityType: activityType.WATER_ACTIVITY,
        page: (props) => <WaterActivity {...props} />    },
    {
        menuKey:'measure',
        icon: icons.MEASURE,
        activityType: activityType.WATER_ACTIVITY,
        page: (props) => <WaterActivity {...props} />    },
    {
        menuKey:'water',
        icon: icons.WATER,
        activityType: activityType.WATER_ACTIVITY,
        page: (props) => <WaterActivity {...props} />
    },
    {
        menuKey:'media',
        icon: icons.CAMERA,
        activityType: activityType.POST_ACTIVITY,
        page: (props) => <PostActivity {...props} />    },
]

export default pages;