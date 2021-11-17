import React from 'react';
import { Image, StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
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

const styles = StyleSheet.create({
    picAsIcons: {
        width: "100%",
        height: "100%"
    }
})

const tabConfig = {
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: (tabInfo) => {
                return <AntDesign name='home' size={25}
                    color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.blue,
        }
    },
    Today: {
        screen: Dailies,
        navigationOptions: {
            tabBarLabel: "Dailies",
            tabBarIcon: (tabInfo) => {
                return <AntDesign name='layout' size={25}
                    color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.blue,
        }
    },
    Tomorrow: {
        screen: Tomorries,
        navigationOptions: {
            tabBarLabel: "Tomorries",
            tabBarIcon: (tabInfo) => {
                return <AntDesign name='notification' size={25}
                    color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.blue
        },
    },
    HoT: {
        screen: HoTMetaEvents,
        navigationOptions: {
            tabBarLabel: "Heart of Thorns",
            tabBarIcon: (tabInfo) => {
                return <Image 
                    style={styles.picAsIcons}
                    source={require('../assets/hot-logo.png')}
                    resizeMode="contain" />
            },
            tabBarColor: Colors.blue
        },
    },
    PoF: {
        screen: PofMetaEvents,
        navigationOptions: {
            tabBarLabel: "Path of Fire",
            tabBarIcon: (tabInfo) => {
                return <Image 
                    style={styles.picAsIcons}
                    source={require('../assets/pof-logo.png')}
                    resizeMode="contain" />
            },
            tabBarColor: Colors.blue
        },
    },
    IBs: {
        screen: IbsMetaEvents,
        navigationOptions: {
            tabBarLabel: "Icebrood Saga",
            tabBarIcon: (tabInfo) => {
                return <Image 
                    style={styles.picAsIcons}
                    source={require('../assets/ibs.png')}
                    resizeMode="contain" />
            },
            tabBarColor: Colors.blue
        },
    },
    Bosses: {
        screen: WorldBosses,
        navigationOptions: {
            tabBarLabel: "World Bosses",
            tabBarIcon: (tabInfo) => {
                return <Image 
                    style={styles.picAsIcons}
                    source={require('../assets/boss-icon.png')}
                    resizeMode="contain" />
            },
            tabBarColor: Colors.blue
        },
    },
}

const TabNavigator = Platform.OS == 'android' ?
    createMaterialBottomTabNavigator(
        tabConfig,
        {
            activeTintColor: Colors.green,
            shifting: true,
            labeled: false,
            barStyle: { backgroundColor: '#694fad' },
        }
    )
    : createBottomTabNavigator(
        tabConfig, {
        tabBarOptions: {
            activeTintColor: Colors.green,
        }
    }
    )


const GwNavigator = createStackNavigator({
    Dailies: { screen: TabNavigator, navigationOptions: { headerShown: false } },
    Tomorries: { screen: Tomorries, navigationOptions: { headerShown: false } },
    Meta: { screen: MetaEvents, navigationOptions: { headerShown: false } },
})

export default createAppContainer(GwNavigator)