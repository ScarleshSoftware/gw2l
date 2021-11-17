import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { SafeAreaView } from 'react-navigation';
import { todayDailies, tomorrowDailies } from '../context/actions/dailies';
import NoResult from '../components/NoResult';
import Colors from '../constants/Colors';
import StandardRow from '../components/dailies/StandardRow';
import testData from '../models/test/testData';

const getRow = (item) => {
    return <StandardRow content={item.item} />
}


export default Tomorries = props => {
    const dispatch = useDispatch();
    const [loading, setIsLoading] = useState(true)
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [error, setError] = useState()
    const dailiesID = useSelector(state => state.dailies.tomorrow);
    const loadDailies = useCallback(async () => {
        setError(false);
        try {
            setIsRefreshing(true);
            await dispatch(tomorrowDailies());
            setIsLoading(false)
            setIsRefreshing(false)
        } catch (err) {
            console.warn(err)
            setError(true)
            setIsRefreshing(false)
        }
    }, [dispatch, setIsRefreshing, setError])

    useEffect(() => {
        setIsLoading(true);
        loadDailies();
    }, [dispatch, loadDailies]);

    // if (error) {
    //     return (
    //         <TryAgain title="Try again" onPress={loadHeats} />
    //     )
    // }

    if (loading) {
        return <View style={styles.screen}>
            <ActivityIndicator size="large" color={Colors.blue} />
        </View>
    }
    if (!loading && dailiesID === null) {
        return <NoResult
            refreshing={isRefreshing}
            onRefresh={loadDailies}
        />
    }

    return (
        <View style={styles.screen}>
            <SafeAreaView style={styles.flatlist}>
                <FlatList
                    data={dailiesID}
                    numColumns={1}
                    refreshing={isRefreshing}
                    onRefresh={loadDailies}
                    renderItem={getRow}
                />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    noRes: {
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
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
    scroll: {
        alignContent: 'center',
        flexDirection: 'row',
        width: "100%",
        height: "100%"
    }
})