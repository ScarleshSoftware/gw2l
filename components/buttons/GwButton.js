import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";

export default GwButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Image
                style={{ ...styles.container, ...props.style }}
                source={props.background}
                resizeMode='contain'
            >
            </Image>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * .5
    }
})