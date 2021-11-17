import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, FlatList, ActivityIndicator } from "react-native";
import { createEvents } from '../constants/IbsStartTimes';
import EventRow from '../components/EventRow';
import Colors from '../constants/Colors';


const getRow = (item) => {
    return <EventRow content={item.item} />
}

export default IbsMetaEvents = props => {
    const [events, setEvents] = useState([])
    const [loading, setIsLoading] = useState(true)

    useEffect(() => {
        createEvents().then(ev => {
            setEvents(ev)
            setIsLoading(false)
        })
    }, [createEvents])

    if (loading) {
        return <View style={styles.screen}>
            <ActivityIndicator size="large" color={Colors.blue} />
        </View>
    }

    return (
        <View style={styles.screen}>
            <SafeAreaView style={styles.flatlist}>
                <FlatList
                    keyExtractor={(item, index) => item.key}
                    data={events}
                    numColumns={1}
                    renderItem={getRow}
                />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    flatlist: {
        marginTop: 50,
        flex: 1,
        alignContent: 'center',
        flexDirection: 'row',
    },
    screen: {
        justifyContent: 'center',
        flex: 1,
    },
})