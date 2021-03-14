
import React from 'react';
import {
  SafeAreaView,
  Text
} from 'react-native';



function NoNetScreen() {
  return (
    <>
      <SafeAreaView style={{ justifyContent: 'center', height: '100%', paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 60 }}>No Internet!!</Text>
      </SafeAreaView>
    </>
  );
};

export default NoNetScreen;
