import { Animated, StyleSheet } from "react-native"
import Colors from "../constants/Colors"


export default TabLabel = (props) => {
    return (
        <Animated.Text style={props.active ? style.textActive : style.textInactive}>
            {props.text}
        </Animated.Text>
    )
}

const style = StyleSheet.create({
    textActive: {
        color: Colors.white,
    },
    textInactive: {
        color: Colors.cyan,
    }
})