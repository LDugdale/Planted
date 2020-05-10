import React, { ReactElement } from 'react';
import ChooseNamePage, { ChooseNamePageProps } from './chooseNamePage';
import ChoosePlantTypePage from './choosePlantTypePage';

export interface Page {
    id: number,
    label: string,
    title: string,
    component: (props: any) => JSX.Element,
}

export const getPages = (pageName: string): Array<Page> => {
    
    return [
        {
            id: 0,
            label: 'Choose name',
            title: 'Whats your plants name?',
            component: (props) => <ChooseNamePage {...props} />
        },
        {
            id: 1,
            label: 'Select plant type',
            title: `Whats type of plant is ${pageName}?`,
            component: (props) => <ChoosePlantTypePage {...props} />
        }
    ];
}

