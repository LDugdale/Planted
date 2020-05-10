import { icons } from '../constants/icons';
import * as routes  from '../constants/routes'

const pages = [
    {
        pageKey:'social',
        pageName: 'Social',
        pageIcon: icons.SOCIAL,
        route: routes.SOCIAL
    },
    {
        pageKey:'plants',
        pageName: 'Plants',
        pageIcon: icons.LEAF,
        route: routes.PLANTS
    },
    {
        pageKey:'library',
        pageName: 'Library',
        pageIcon: icons.LIBRARY,
        route: routes.LIBRARY
    },
]

export default pages;