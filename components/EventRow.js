import React from 'react';
import { View, Image, Text, StyleSheet, ImageBackground, Dimensions } from "react-native";

export default EventRow = props => {
    const details = props.content
    return (
        <ImageBackground
            style={styles.image}
            source={details.background}
        >
            <View style={{...styles.screen, borderColor: details.currentlyActive ? 'yellow' : 'black'}}>
                {details.icon && <Image source={{ uri: details.icon }} style={styles.icon} />}
                <View style={styles.row}>
                    <Text style={styles.time}>{details.currentlyActive ? `"In progress"\nStarted ${details.time}` : details.time}</Text>
                    <View style={styles.textRow}>
                        <Text style={styles.text}>{details.title}</Text>
                        <Text style={styles.subtitle}>{details.requirement}</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    textRow: {
        flex: 7,
        justifyContent: 'center',
        alignContent: 'center',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        height: Dimensions.get('window').height * .1
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
        backgroundColor: 'black'
    },
    text: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 11,
    },
    time: {
        flex: 3,
        textAlign: 'left',
        fontSize: 18,
        color: 'black',
        textAlignVertical: 'center',
        paddingHorizontal: 10
    },
    image: {
        resizeMode: "cover",
        justifyContent: "center"
    }
})