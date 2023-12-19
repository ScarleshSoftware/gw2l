import React, { useEffect, useState } from 'react';
import { View, ImageBackground, StyleSheet, Text } from "react-native";
import GwButton from '../components/buttons/GwButton';
import { getCurrentEvent } from '../constants/DayNightCycle';

export default Home = props => {
    const [background, setBackground] = useState(require('../assets/dusksky.png'))
    const [nextDayState, setNextDayState] = useState()
    useEffect(() => {
        getCurrentEvent().then((back) => {
            setBackground(back[0].background)
            setNextDayState(back[1])
        })
    }, [getCurrentEvent])

    return (
        <ImageBackground
            source={background}
            style={styles.screenBackground}
            resizeMode='stretch'
        >
            <View style={styles.screen}>
                {/* <View style={styles.dailies}>
                    <GwButton
                        background={require('../assets/todaybutton.png')}
                        onPress={() => props.navigation.navigate("Today")}
                    />
                    <GwButton
                        background={require('../assets/tomorrowbutton.png')}
                        onPress={() => props.navigation.navigate("Tomorrow")}
                    />
                </View> */}
                <GwButton
                    background={require('../assets/bossbutton.png')}
                    onPress={() => props.navigation.navigate("Bosses")}
                />
                <GwButton
                    background={require('../assets/hotbutton.png')}
                    onPress={() => props.navigation.navigate("HoT")}
                />
                <GwButton
                    background={require('../assets/pofbutton.png')}
                    onPress={() => props.navigation.navigate("PoF")}
                />
                <GwButton
                    background={require('../assets/eodbutton.png')}
                    onPress={() => props.navigation.navigate("EoD")}
                />
            </View>
            {nextDayState && <Text style={styles.dayState}>Next: {nextDayState.title} @ {nextDayState.time}</Text>}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    screenBackground: {
        flex: 1,
        width: "100%",
        alignItems: 'center'
    },
    screen: {
        flex: 1,
        width: "100%",
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    dailies: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    dayState: {
        width: "100%",
        fontWeight: 'bold',
        bottom: 0
    }
})