
import React from 'react';
import {
  SafeAreaView,
  Text
} from 'react-native';
import globalStyles from '../StyleSheet';


function NoNetScreen() {
  return (
    <>
      <SafeAreaView style={globalStyles.issueSafeArea}>
        <Text style={globalStyles.issueText}>No Internet!!</Text>
      </SafeAreaView>
    </>
  );
};

export default NoNetScreen;
