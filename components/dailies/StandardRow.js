import React from 'react';
import { View, Image, Text, StyleSheet, ImageBackground } from "react-native";

export default StandardRow = props => {
    const details = props.content

    return (
        <ImageBackground
            style={styles.image}
            source={require('../../assets/gw2.png')}
        >
            <View style={styles.screen}>
                <Image source={{ uri: details.icon }} style={styles.icon} />
                <View style={styles.row}>
                    <Text style={styles.text}>{details.name}</Text>
                    <Text style={styles.subtitle}>{details.requirement}</Text>
                    <Text style={styles.subtitle}>{details.tiers}</Text>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
    },
    screen: {
        borderBottomWidth: 2,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    icon: {
        width: 40,
        height: 40,
    },
    text: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 11,

    },
    image: {
        resizeMode: "cover",
        justifyContent: "center"
    }
})