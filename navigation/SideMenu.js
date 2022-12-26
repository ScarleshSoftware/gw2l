import { createDrawerNavigator } from '@react-navigation/drawer';
import Colors from "../constants/Colors";
import navStyles from "./CommonStyles";
import Home from '../screens/Home';
import HoTMetaEvents from '../screens/HoTMetaEvents';
import PofMetaEvents from '../screens/PofMetaEvents';
import WorldBosses from '../screens/WorldBosses';
import IbsMetaEvents from '../screens/IbsMetaEvents';
import EoDMetaEvents from '../screens/EoDMetaEvents';
import TomorrowPageNavigator from './TomorrowDailiesNavigation';
import TodayPageNavigator from './TodayDailiesNavigation';

const DrawerStack = createDrawerNavigator();
export default function DrawerNavigator() {
    return (
        <DrawerStack.Navigator
            useLegacyImplementation
            initialRouteName="Home"
            screenOptions={{
                drawerStyle: {
                    backgroundColor: "white",
                    zIndex: 100,
                },
                drawerPosition: "left",
            }}
        >
            <DrawerStack.Screen 
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: "Home",
                    tabBarIcon: (tabInfo) => {
                        return <AntDesign name='home' size={25}
                            color={tabInfo.tintColor} />
                    },
                    tabBarColor: Colors.blue,
                }}
            />
            <DrawerStack.Screen
                name="Today"
                component={TodayPageNavigator}
                options={{
                    tabBarLabel: "Dailies",
                    tabBarIcon: (tabInfo) => {
                        return <Image 
                            style={navStyles.picAsIcons}
                            source={require('../assets/daily_bottom.png')}
                            resizeMode="contain" />
                    },
                }}
            />
            <DrawerStack.Screen
                name="Tomorrow"
                component={TomorrowPageNavigator}
                options={{
                    tabBarLabel: "Tomorries",
                    tabBarIcon: (tabInfo) => {
                        return <Image 
                            style={navStyles.picAsIcons}
                            source={require('../assets/daily_bottom.png')}
                            resizeMode="contain" />
                    },
                }}
            />
            <DrawerStack.Screen
                name="HoT"
                component={HoTMetaEvents}
                options={{
                    tabBarLabel: "Heart of Thorns",
                    tabBarIcon: (tabInfo) => {
                        return <Image 
                            style={navStyles.picAsIcons}
                            source={require('../assets/hot-logo.png')}
                            resizeMode="contain" />
                    },
                    tabBarColor: Colors.blue
                }}
            />
            <DrawerStack.Screen
                name="PoF"
                component={PofMetaEvents}
                options={{
                    tabBarLabel: "Path of Fire",
                    tabBarIcon: (tabInfo) => {
                        return <Image 
                            style={navStyles.picAsIcons}
                            source={require('../assets/pof-logo.png')}
                            resizeMode="contain" />
                    },
                    tabBarColor: Colors.blue
                }}
            />
            <DrawerStack.Screen
                name="IBs"
                component={IbsMetaEvents}
                options={{
                    tabBarLabel: "Icebrood Saga",
                    tabBarIcon: (tabInfo) => {
                        return <Image 
                            style={navStyles.picAsIcons}
                            source={require('../assets/ibs.png')}
                            resizeMode="contain" />
                    },
                    tabBarColor: Colors.blue
                }}
            />
            <DrawerStack.Screen
                name="EoD"
                component={EoDMetaEvents}
                options={{
                    tabBarLabel: "End of Dragons",
                    tabBarIcon: (tabInfo) => {
                        return <Image 
                            style={navStyles.picAsIcons}
                            source={require('../assets/eod-logo.png')}
                            resizeMode="contain" />
                    },
                    tabBarColor: Colors.blue
                }}
            />
            <DrawerStack.Screen
                name="Bosses"
                component={WorldBosses}
                options={{
                    tabBarLabel: "World Bosses",
                    tabBarIcon: (tabInfo) => {
                        return <Image 
                            style={navStyles.picAsIcons}
                            source={require('../assets/boss-icon.png')}
                            resizeMode="contain" />
                    },
                    tabBarColor: Colors.blue
                }}
            />
        </DrawerStack.Navigator>
    )
}