import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image } from "react-native";
import Colors from "../constants/Colors";
import Tomorries from "../screens/Tomorries";
import navStyles from "./CommonStyles";


const DailyPageStack = createMaterialTopTabNavigator();
export default function TomorriesPageNagigator() {
    return (
        <DailyPageStack.Navigator
            initialRouteName='pve_main'
            screenOptions={navStyles.screenOptions}
        >
            <DailyPageStack.Screen
                name="pve_main" component={Tomorries}
                initialParams={{ dailyCat: "pve" }}
                options={{
                    tabBarLabel: "PvE",
                    tabBarIcon: (tabInfo) => {
                        return <Image 
                            style={navStyles.picAsIcons}
                            source={require('../assets/daily_bottom.png')}
                            resizeMode="contain" />
                    },
                    tabBarColor: navStyles.tabBarColor
                }}
            />
            <DailyPageStack.Screen
                name="fractals_main" component={Tomorries}
                initialParams={{ dailyCat: "fractals" }}
                options={{
                    tabBarLabel: "Fractals",
                    tabBarIcon: (tabInfo) => {
                        return <Image 
                            style={navStyles.picAsIcons}
                            source={require('../assets/daily_bottom.png')}
                            resizeMode="contain" />
                    },
                    tabBarColor: navStyles.tabBarColor
                }}
            />
            <DailyPageStack.Screen
                name="pvp_main" component={Tomorries}
                initialParams={{ dailyCat: "pvp" }}
                options={{
                    tabBarLabel: "PvP",
                    tabBarIcon: (tabInfo) => {
                        return <Image 
                            style={navStyles.picAsIcons}
                            source={require('../assets/daily_bottom.png')}
                            resizeMode="contain" />
                    },
                    tabBarColor: navStyles.tabBarColor
                }}
            />
            <DailyPageStack.Screen
                name="wvw_main" component={Tomorries}
                initialParams={{ dailyCat: "wvw" }}
                options={{
                    tabBarLabel: "WvW",
                    tabBarIcon: (tabInfo) => {
                        return <Image 
                            style={navStyles.picAsIcons}
                            source={require('../assets/daily_bottom.png')}
                            resizeMode="contain" />
                    },
                    tabBarColor: navStyles.tabBarColor
                }}
            />
        </DailyPageStack.Navigator>
    )
}