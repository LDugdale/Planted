import React from 'react';

const Icon = (props) => {

    const iconClassName = () => {
        let name = ' icon'; 
        return props.iconClassName ? props.iconClassName + name : name ;
    }

    return (
        <div 
            className={iconClassName()}
            onClick={event => {
                return props.onClick ? props.onClick(event, props.iconClassName) : null
            }}
        >
            <div className='icon-wrapper'>
                {props.icon}
            </div>
        </div>
    );
};

export default Icon;
export { icons } from '../../constants/icons';
