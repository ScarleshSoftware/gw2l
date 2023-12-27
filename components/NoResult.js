import React from 'react';
import {
  ScrollView,
  RefreshControl,
  StyleSheet,
  Text,
  SafeAreaView
} from 'react-native';

export default NoResult = props => {
  return (
    <SafeAreaView style={styles.noRes}>
      <ScrollView style={styles.scroll}
        refreshControl={
          <RefreshControl
            refreshing={props.refreshing}
            onRefresh={props.onRefresh}
          />}
      >
        <Text style={{ textAlign: 'center' }}>No alerts</Text>
      </ScrollView>
    </SafeAreaView>
)}

const styles = StyleSheet.create({
  noRes: {
    justifyContent: 'center',
    flexDirection: 'column'
    // alignItems: 'flex-start'

  },
  scroll: {
    alignContent: 'center',
    flexDirection: 'row',
    width: "100%",
    height: "100%"
  }
});
