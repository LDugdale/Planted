import React from 'react';
import AddUserPlantContainer, { AddUserPlantProps } from './addUserPlantContainer';

const AddUserPlantModal: React.FC<AddUserPlantProps> = (props) => 
    <AddUserPlantContainer {...props} />;

export default AddUserPlantModal;