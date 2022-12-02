import React from 'react';
import { Image, StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign } from '@expo/vector-icons'; 
import Colors from "../constants/Colors";
import Dailies from "../screens/Dailies";
import MetaEvents from "../screens/HoTMetaEvents";
import Tomorries from "../screens/Tomorries";
import Home from '../screens/Home';
import HoTMetaEvents from '../screens/HoTMetaEvents';
import PofMetaEvents from '../screens/PofMetaEvents';
import WorldBosses from '../screens/WorldBosses';
import IbsMetaEvents from '../screens/IbsMetaEvents';
import EoDMetaEvents from '../screens/EoDMetaEvents';

const styles = StyleSheet.create({
    picAsIcons: {
        width: "100%",
        height: "100%"
    }
})

const TabNavigatorStack = createMaterialBottomTabNavigator()
function TabNavigator() {
    return(
        <TabNavigatorStack.Navigator
            screenOptions={{
                activeTintColor: Colors.green,
                shifting: true,
                labeled: false,
                barStyle: { backgroundColor: '#694fad' },
            }}
        >
            <TabNavigatorStack.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: (tabInfo) => {
                        return <AntDesign name='home' size={25}
                            color={tabInfo.tintColor} />
                    },
                    tabBarColor: Colors.blue,
                }}
            />
            <TabNavigatorStack.Screen
                name="Today"
                component={Dailies}
                options={{
                    tabBarLabel: "Dailies",
                    tabBarIcon: (tabInfo) => {
                        return <Image 
                            style={styles.picAsIcons}
                            source={require('../assets/daily_bottom.png')}
                            resizeMode="contain" />
                    },
                    tabBarColor: Colors.blue,
                }}
            />
            <TabNavigatorStack.Screen
                name="Tomorrow"
                component={Tomorries}
                options={{
                    tabBarLabel: "Tomorries",
                    tabBarIcon: (tabInfo) => {
                        return <Image 
                            style={styles.picAsIcons}
                            source={require('../assets/tomorries_bottom.png')}
                            resizeMode="contain" />
                    },
                    tabBarColor: Colors.blue,
                }}
            />
            <TabNavigatorStack.Screen
                name="HoT"
                component={HoTMetaEvents}
                options={{
                    tabBarLabel: "Heart of Thorns",
                    tabBarIcon: (tabInfo) => {
                        return <Image 
                            style={styles.picAsIcons}
                            source={require('../assets/hot-logo.png')}
                            resizeMode="contain" />
                    },
                    tabBarColor: Colors.blue
                }}
            />
            <TabNavigatorStack.Screen
                name="PoF"
                component={PofMetaEvents}
                options={{
                    tabBarLabel: "Path of Fire",
                    tabBarIcon: (tabInfo) => {
                        return <Image 
                            style={styles.picAsIcons}
                            source={require('../assets/pof-logo.png')}
                            resizeMode="contain" />
                    },
                    tabBarColor: Colors.blue
                }}
            />
            <TabNavigatorStack.Screen
                name="IBs"
                component={IbsMetaEvents}
                options={{
                    tabBarLabel: "Icebrood Saga",
                    tabBarIcon: (tabInfo) => {
                        return <Image 
                            style={styles.picAsIcons}
                            source={require('../assets/ibs.png')}
                            resizeMode="contain" />
                    },
                    tabBarColor: Colors.blue
                }}
            />
            <TabNavigatorStack.Screen
                name="EoD"
                component={EoDMetaEvents}
                options={{
                    tabBarLabel: "End of Dragons",
                    tabBarIcon: (tabInfo) => {
                        return <Image 
                            style={styles.picAsIcons}
                            source={require('../assets/eod-logo.png')}
                            resizeMode="contain" />
                    },
                    tabBarColor: Colors.blue
                }}
            />
            <TabNavigatorStack.Screen
                name="Bosses"
                component={WorldBosses}
                options={{
                    tabBarLabel: "World Bosses",
                    tabBarIcon: (tabInfo) => {
                        return <Image 
                            style={styles.picAsIcons}
                            source={require('../assets/boss-icon.png')}
                            resizeMode="contain" />
                    },
                    tabBarColor: Colors.blue
                }}
            />
        </TabNavigatorStack.Navigator>
    )
}


const GwNavigatorStack = createStackNavigator();

function GwNavigator(){
    return(
        <GwNavigatorStack.Navigator
            initialRouteName='Dailies'
            screenOptions={{ gestureEnabled: false }}
        >
            <GwNavigatorStack.Screen 
                name="Dailies"
                component={TabNavigator}
                options={{ headerShown: false }}
            />
            <GwNavigatorStack.Screen 
                name="Tomorries"
                component={Tomorries}
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