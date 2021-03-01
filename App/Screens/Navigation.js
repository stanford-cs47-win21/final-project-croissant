import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ChooseFlow from './ChooseFlow';
import CreatorHome from './CreatorScreens/CreatorHome';
import FanHome from './FanScreens/FanHome';
import CreateStudio from './CreatorScreens/CreateStudio';


const Stack = createStackNavigator();

// TODO: Fix Navigation / Chooose Flow interactions to store creator vs. user in the route. 
// TODO: Create Nested Navigation / conditional navigation based on creator vs. user in order to disable access (but not super imp for prototype)
export default function Navigation() {
    return(
        <NavigationContainer> 
            <Stack.Navigator> 
                <Stack.Screen name='ChooseFlow' component={ChooseFlow}/>
                <Stack.Screen name='CreatorHome' component={CreatorHome}/>
                <Stack.Screen name='FanHome' component={FanHome}/>
                <Stack.Screen name='CreateStudio' component={CreateStudio}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
