import React, { useLayoutEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom';

import RouterBeforeLogin from './RoutesWithoutLogin/Router';
import {MenuLayout} from '../layout/menu/MenuLayout';

const Routes = () => {

    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

    // Get User token details is user is authenticated or not.
    const getUserTokenDetails = () => {
        setIsUserAuthenticated(true);
    }

    useLayoutEffect(()=>{
        getUserTokenDetails();
    },[])

    return (
        <BrowserRouter>
            {isUserAuthenticated ? <MenuLayout /> : <RouterBeforeLogin />}
        </BrowserRouter>
        
    )
}

export default Routes
