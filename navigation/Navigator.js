import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import MetaEvents from "../screens/HoTMetaEvents";
import DrawerNavigator from './SideMenu';


const GwNavigatorStack = createStackNavigator();

function GwNavigator(){
    return(
        <GwNavigatorStack.Navigator
            initialRouteName='Dailies'
            screenOptions={{ gestureEnabled: false }}
        >
            <GwNavigatorStack.Screen 
                name="Dailies"
                component={DrawerNavigator}
                options={{ headerShown: false }}
            />
            <GwNavigatorStack.Screen 
                name="Meta"
                component={MetaEvents}
                options={{ headerShown: false }}
            />

        </GwNavigatorStack.Navigator>
    )
}

export default GwNavigator