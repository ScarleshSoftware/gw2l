import { Image, StyleSheet, Text, View } from "react-native"
import Colors from "../constants/Colors";
import navStyles from "../navigation/CommonStyles";

export default DrawerCloset = (props) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <Image style={props.focused ? styles.iconActive : styles.iconInactive} source={props.icon} resizeMode="contain"/>
            <Text style={props.focused ? styles.labelActive : styles.labelInactive}>{props.text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    iconActive: {
        width: 40,
        height: 40,
    },
    iconInactive: {
        width: 40,
        height: 40,
        opacity: 0.5
    },
    labelActive: {
        marginLeft: "10%",
        color: Colors.cyan
    },
    labelInactive: {
        marginLeft: "10%",
        color: Colors.grey
    }
})