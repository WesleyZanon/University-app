import React from 'react';

import {View} from 'react-native';

import AppRoutes from './app.Routes';
import AuthRoutes from './auth.routes';

export default function Routes(){
    const isAuthenticated = false;
    const loading = false;

    return(
        <AuthRoutes/>
    )
}