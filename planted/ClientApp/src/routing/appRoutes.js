import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AuthenticationPage from '../components/authentication/';
import SignUpPage from '../components/authentication/signUp';
import SignInPage from '../components/authentication/signIn';
import PasswordForgetPage from '../components/authentication/passwordForget';
import AuthenticationHomePage from '../components/authentication/authenticationHome';
import HomePage from '../components/home';
import UserPlantsPage from '../components/home/userPlants';
import UserPlantProfilePage from '../components/profiles/userPlantProfile';

import * as routes from '../constants/routes';

export const InitialRoutes = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* <Route exact path={routes.LANDING} component={LandingPage} /> */}
                <Route path={routes.AUTHENTICATION} component={AuthenticationPage} />
                <Route path={routes.HOME} component={HomePage} />
                
                <Route path={routes.USER_PLANT(':userPlantId')} component={UserPlantProfilePage} />

            </Switch>
        </BrowserRouter>
    );
}

export const AuthRoutes = () => {
    return (
        <Switch>
            <Route exact path={routes.AUTHENTICATION} component={AuthenticationHomePage} />
            <Route exact path={routes.SIGN_UP} component={SignUpPage} />
            <Route exact path={routes.SIGN_IN} component={SignInPage} />
            <Route exact path={routes.PASSWORD_FORGET} component={PasswordForgetPage} />            
        </Switch>
    );
}

export const HomeRoutes = (props) => {
    return (
        <Switch>
            <Redirect exact from={routes.HOME} to={routes.USER_PLANTS}/>
            <Route 
                exact 
                path={routes.USER_PLANTS}
                render={() => <UserPlantsPage 
                                    isAddUserPlantOpen={props.isAddUserPlantOpen}
                                    onAddUserPlantClose={props.onAddUserPlantClose}
                                />}
            />
            {/* <Route path={routes.PLANTS} render={() => <Plants 
                                                            onOpenAddPlant={props.onOpenAddPlant} 
                                                            getUserPlants={props.getUserPlants}
                                                            plants={props.plants}
                                                        />} /> */}
            {/* <Route exact path={routes.LIBRARY} component={Plants} /> */}
        </Switch>
    );
}

// export const singleRoutes = () => {
//     return (
//         <Switch>
//             <Route exact path={routes.ADD_PLANT} component={AddPlant} />
//             <Route path={routes.USER_PLANT(':userPlantId')} component={UserPlant} />
//         </Switch>
//     );
// }