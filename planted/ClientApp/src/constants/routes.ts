export const LANDING = '/';

export const AUTHENTICATION = '/authentication';
export const AUTHENTICATION_HOME = AUTHENTICATION + '/home';
export const SIGN_UP = AUTHENTICATION + '/signup';
export const SIGN_IN = AUTHENTICATION + '/signin';
export const PASSWORD_FORGET = AUTHENTICATION + '/pw-forget';

export const HOME = '/home';
export const USER_PLANTS = HOME + '/user-plants';
export const LIBRARY = HOME + '/library';
export const SOCIAL = HOME + '/social';

export const ACCOUNT = '/account';

export const USER_PLANT = (userPlantId: string) => `/user-plant/${userPlantId}`;
