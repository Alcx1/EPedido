import React from "react";
import {View, ActivityIndicator} from 'react-native'

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

function Routes(){
    const isAuthenticade = false;
    const loading = false;

    if(loading){
        return(
            <View style={{flex:1,
            backgroundColor:'#fff', 
            justifyContent:'center', 
            alignItems:'center'}}
            > 
            <ActivityIndicator size={60} color='#1E1E1E'/>
            </View>
        )
    }


    return(
        isAuthenticade ? <AppRoutes/> : <AuthRoutes/>
    )
}
export default Routes