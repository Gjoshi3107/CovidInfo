import React from 'react';
import LottieView from 'lottie-react-native';

export default function Loader() {
  // console.log("in loader");
  return <LottieView source={require('../Assets/loader/226-splashy-loader.json')} autoPlay loop />
}