
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar
} from 'react-native';

import { WeatherScreen, NoNetScreen } from './Screens';

import { Loader } from './Component/loader';
import { useNetInfo } from "@react-native-community/netinfo";
import HasErrorScreen from './Screens/hasError';


function App() {
  const netinfo = useNetInfo();
  const [network, setNetwork] = useState();
  const [hasApiError, setHasApiError] = useState();
  const [loading, setLoader] = useState();

  useEffect(() => {
    callMyData2();
  }, [netinfo])

  async function callMyData2() {
    if (netinfo.isConnected == false) {
    }
    else if (netinfo.isConnected) {
    }
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      {(network) ?
        (hasApiError) ?
          (loading) ?
            <Loader />
            : <SafeAreaView>
              <WeatherScreen temp={state.forecast.Temp} city={state.forecast.City} day={state.forecast.Day} />
            </SafeAreaView>
          : <SafeAreaView><HasErrorScreen myData={callMyData2} /></SafeAreaView>
        : <SafeAreaView><NoNetScreen /></SafeAreaView>
      }
    </>
  );
};


export default App;