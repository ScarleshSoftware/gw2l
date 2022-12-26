import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image } from "react-native";
import Tomorries from "../screens/Tomorries";
import navStyles from "./CommonStyles";


const DailyPageStack = createMaterialTopTabNavigator();
export default function TomorrowPageNavigator() {
    return (
        <DailyPageStack.Navigator
            initialRouteName='pve_main'
            screenOptions={navStyles.screenOptions}
        >
            <DailyPageStack.Screen
                name="pve_main" component={Tomorries}
                initialParams={{ dailyCat: "pve" }}
                options={{
                    tabBarLabel: (tabLabelInfo) => {
                        return <TabLabel text="PvE" active={tabLabelInfo.focused}/>
                    },
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
                    tabBarLabel: (tabLabelInfo) => {
                        return <TabLabel text="Fractals" active={tabLabelInfo.focused}/>
                    },
                    tabBarIcon: (tabInfo) => {
                        return <Image 
                            style={navStyles.picAsIcons}
                            source={require('../assets/icons/fractals_daily.png')}
                            resizeMode="contain" />
                    },
                    tabBarColor: navStyles.tabBarColor
                }}
            />
            <DailyPageStack.Screen
                name="pvp_main" component={Tomorries}
                initialParams={{ dailyCat: "pvp" }}
                options={{
                    tabBarLabel: (tabLabelInfo) => {
                        return <TabLabel text="PvP" active={tabLabelInfo.focused}/>
                    },
                    tabBarIcon: (tabInfo) => {
                        return <Image 
                            style={navStyles.picAsIcons}
                            source={require('../assets/icons/pvp_daily.png')}
                            resizeMode="contain" />
                    },
                    tabBarColor: navStyles.tabBarColor
                }}
            />
            <DailyPageStack.Screen
                name="wvw_main" component={Tomorries}
                initialParams={{ dailyCat: "wvw" }}
                options={{
                    tabBarLabel: (tabLabelInfo) => {
                        return <TabLabel text="WvW" active={tabLabelInfo.focused}/>
                    },
                    tabBarIcon: (tabInfo) => {
                        return <Image 
                            style={navStyles.picAsIcons}
                            source={require('../assets/icons/wvw_daily.png')}
                            resizeMode="contain" />
                    },
                    tabBarColor: navStyles.tabBarColor
                }}
            />
            <DailyPageStack.Screen
                name="extra_main" component={Tomorries}
                initialParams={{ dailyCat: "extra" }}
                options={{
                    tabBarLabel: (tabLabelInfo) => {
                        return <TabLabel text="Others" active={tabLabelInfo.focused}/>
                    },
                    tabBarIcon: (tabInfo) => {
                        return <Image 
                            style={navStyles.picAsIcons}
                            source={require('../assets/icons/extra_daily.png')}
                            resizeMode="contain" />
                    },
                    tabBarColor: navStyles.tabBarColor
                }}
            />
        </DailyPageStack.Navigator>
    )
}