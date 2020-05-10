import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

export const userPlantLink = (userPlantId: string) => React.forwardRef((props, ref) => (
    <Link to={routes.USER_PLANT(userPlantId)} {...props} />
));

    