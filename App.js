import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';

import Navigation from './App/Screens/Navigation';
import ChooseFlow from './App/Screens/ChooseFlow';

import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';

import GlobalFont from 'react-native-global-font'


export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    let lato = 'Lato_400Regular'
    GlobalFont.applyGlobal(lato)

    return (
      <Navigation />
    );
  }
}
