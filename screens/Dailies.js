import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { getTodayDailies } from '../context/reducers/dailies';
import NoResult from '../components/NoResult';
import Colors from '../constants/Colors';
import StandardRow from '../components/dailies/StandardRow';

const getRow = (item) => {
    return <StandardRow content={item.item} />
}


export default Dailies = props => {
    const dispatch = useDispatch();
    const [loading, setIsLoading] = useState(true)
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [error, setError] = useState()
    const dailiesID = useSelector(state => state.dailies.today)[props.route.params.dailyCat];
    const loadDailies = useCallback(async () => {
        setError(false);
        try {
            setIsRefreshing(true);
            dispatch(getTodayDailies());
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
        <SafeAreaView style={styles.flatlist}>
            <View style={styles.screen}>
                <FlatList
                    data={dailiesID}
                    numColumns={1}
                    refreshing={isRefreshing}
                    onRefresh={loadDailies}
                    renderItem={getRow}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    noRes: {
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    flatlist: {
        flex: 1,
        alignContent: 'center',
        flexDirection: 'row',
        backgroundColor: Colors.background
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