import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';

import Navigation from './App/Screens/Navigation';
import ChooseFlow from './App/Screens/ChooseFlow';

import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';

import {Text, TextInput} from 'react-native'



export default function App() {

  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    Text.defaultProps = Text.defaultProps || {}
    Text.defaultProps.style =  { fontFamily: 'Lato_400Regular' }
    return (
      <Navigation />
    );
  }
}
