
import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import globalStyles from '../StyleSheet';


function HasErrorScreen(props) {

  function retry() {
    props.myData();
  }

  return (
    <>
      <SafeAreaView style={globalStyles.issueSafeArea}>
        <Text style={globalStyles.issueText}>Something went wrong at our end</Text>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => { retry() }}
        >
          <Text style={{ fontSize: 30 }}>Retry</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  touch: {
    marginVertical: 40,
    justifyContent: 'center',
    borderWidth: 1,
    alignSelf: 'center',
    alignItems: 'center',
    width: '25%',
    height: 50
  }
})

export default HasErrorScreen;
