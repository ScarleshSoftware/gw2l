import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons'; 
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
import { Image } from 'react-native';
import DrawerCloset from '../components/DrawerCloset';

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
                    drawerLabel: (labelInfo) => {
                        return <DrawerCloset text="Home" icon={require('../assets/icons/home_icon.png')} {...labelInfo}/>
                    },
                    tabBarColor: Colors.blue,
                }}
            />
            {/* <DrawerStack.Screen
                name="Today"
                component={TodayPageNavigator}
                options={{
                    drawerLabel: (labelInfo) => {
                        return <DrawerCloset text="Dailies" icon={require('../assets/daily_bottom.png')} {...labelInfo}/>
                    }
                }}
            />
            <DrawerStack.Screen
                name="Tomorrow"
                component={TomorrowPageNavigator}
                options={{
                    drawerLabel: (labelInfo) => {
                        return <DrawerCloset text="Tomorries" icon={require('../assets/daily_bottom.png')}/>
                    }
                }}
            /> */}
            <DrawerStack.Screen
                name="HoT"
                component={HoTMetaEvents}
                options={{
                    drawerLabel: (labelInfo) => {
                        return <DrawerCloset text="Heart of Thorns" icon={require('../assets/hot-logo.png')}/>
                    },
                    tabBarColor: Colors.blue
                }}
            />
            <DrawerStack.Screen
                name="PoF"
                component={PofMetaEvents}
                options={{
                    drawerLabel: (labelInfo) => {
                        return <DrawerCloset text="Path of Fire" icon={require('../assets/pof-logo.png')}/>
                    },
                    tabBarColor: Colors.blue
                }}
            />
            <DrawerStack.Screen
                name="IBs"
                component={IbsMetaEvents}
                options={{
                    drawerLabel: (labelInfo) => {
                        return <DrawerCloset text="Icebrood Saga" icon={require('../assets/ibs.png')}/>
                    },
                    tabBarColor: Colors.blue
                }}
            />
            <DrawerStack.Screen
                name="EoD"
                component={EoDMetaEvents}
                options={{
                    drawerLabel: (labelInfo) => {
                        return <DrawerCloset text="End of Dragons" icon={require('../assets/eod-logo.png')}/>
                    },
                    tabBarColor: Colors.blue
                }}
            />
            <DrawerStack.Screen
                name="Bosses"
                component={WorldBosses}
                options={{
                    drawerLabel: (labelInfo) => {
                        return <DrawerCloset text="World Bosses" icon={require('../assets/boss-icon.png')}/>
                    },
                    tabBarColor: Colors.blue
                }}
            />
        </DrawerStack.Navigator>
    )
}