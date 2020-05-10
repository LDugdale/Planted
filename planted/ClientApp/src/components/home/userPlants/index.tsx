import React from 'react';
import UserPlantsContainer, { UserPlantsContainerProps } from './userPlantsContainer';

const UserPlantsPage: React.FC<UserPlantsContainerProps> = (props) =>
    <UserPlantsContainer {...props} />;

export default UserPlantsPage;