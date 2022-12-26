import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export default navStyles = StyleSheet.create({
    picAsIcons: {
        width: "100%",
        height: "100%"
    },
    barStyles: {
        backgroundColor: Colors.tabBarStyle
    },
    tabBarColor: Colors.blue,
    screenOptions: {
        tabBarInctiveTintColor: Colors.tabBarInctiveTintColor,
        tabBarActiveTintColor: Colors.tabBarText,
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: {backgroundColor: Colors.tabBarStyle}
    }
})