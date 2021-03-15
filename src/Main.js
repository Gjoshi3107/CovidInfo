
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar
} from 'react-native';

import { CovidScreen, HasErrorScreen, NoNetScreen } from './Screens';

import Loader from './Component/loader';
import { useNetInfo } from "@react-native-community/netinfo";
import getAPIData from './API';


function App() {
  const netinfo = useNetInfo();
  const [network, setNetwork] = useState(true);
  const [hasApiError, setHasApiError] = useState(false);
  const [loading, setLoader] = useState();
  const [apiData, setDATA] = useState();

  useEffect(() => {
    callMyData();
  }, [netinfo])

  async function callMyData() {
    if (netinfo.isConnected == false) {
      setNetwork(false);
    }
    else if (netinfo.isConnected) {
      setNetwork(true);
      setLoader(true);
      let data = await getAPIData();
      // console.log("data:-\n", data);
      if (data.error) {
        setHasApiError(true);
      }
      else {
        setDATA(data.body);
        setLoader(false);
        setHasApiError(false);
      }
    }
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      {(network) ?
        (!hasApiError) ?
          (loading) ?
            <Loader />
            :
            <SafeAreaView ><CovidScreen DATA={apiData} callData={callMyData} /></SafeAreaView >
          : <SafeAreaView ><HasErrorScreen myData={callMyData} /></SafeAreaView >
        : <NoNetScreen />
      }
    </>
  );
};


export default App;