import React from 'react';
import { View, Image, Text, StyleSheet, ImageBackground, Appearance } from "react-native";
import Colors from '../../constants/Colors';

export default StandardRow = props => {
    const details = props.content
    const image_path = Appearance.getColorScheme() === 'dark' ? require('../../assets/dark_theme_icons/gw2.png') : require('../../assets/gw2.png');
    return (
        <ImageBackground
            style={styles.image}
            source={image_path}
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
        fontWeight: 'bold',
        color: Colors.dailyText
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 11,
        color: Colors.dailySubtext
    },
    image: {
        resizeMode: "cover",
        justifyContent: "center"
    }
})