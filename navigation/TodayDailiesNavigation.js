import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image } from "react-native";
import TabLabel from '../components/TabLabel';
import Dailies from "../screens/Dailies";
import navStyles from "./CommonStyles";


const DailyPageStack = createMaterialTopTabNavigator();
export default function TodayPageNavigator() {
    return (
        <DailyPageStack.Navigator
            initialRouteName='pve_main'
            screenOptions={navStyles.screenOptions}
        >
            <DailyPageStack.Screen
                name="pve_main" component={Dailies}
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
                name="fractals_main" component={Dailies}
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
                name="pvp_main" component={Dailies}
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
                name="wvw_main" component={Dailies}
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
                name="extra_main" component={Dailies}
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