import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import DashBoard from '../assets/pages/DashBoard/Index'

const Stack = createNativeStackNavigator();
function AppRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Dashboard' component={DashBoard}/>
        </Stack.Navigator>
    )
}
export default AppRoutes;