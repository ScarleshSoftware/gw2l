import React from 'react';
import {
  ScrollView,
  RefreshControl,
  StyleSheet,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default NoResult = props => {
  return <SafeAreaView style={styles.noRes}>
    <ScrollView style={styles.scroll}
      refreshControl={
        <RefreshControl
          refreshing={props.refreshing}
          onRefresh={props.onRefresh}
        />}
    >
      <Text>No alerts</Text>
    </ScrollView>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  noRes: {
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  scroll: {
    alignContent: 'center',
    flexDirection: 'row',
    width: "100%",
    height: "100%"
  }
});
