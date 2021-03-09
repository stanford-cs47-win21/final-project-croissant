import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ChooseFlow from './ChooseFlow';
import CreatorHome from './CreatorScreens/CreatorHome';
import CreateStudio from './CreatorScreens/CreateStudio';
import StudioResults from './CreatorScreens/StudioResults';
import CreateRoom from './CreatorScreens/CreateRoom';
import Profile from './CreatorScreens/Profile';
import LiveRoom from './GeneralScreens/LiveRoom';
import CreatorOnboarding from './CreatorScreens/CreatorOnboarding';
import Welcome from './Welcome';

import FanHome from './FanScreens/FanHome';
import FindRachel from './FanScreens/FindRachel';
import SignUp from './FanScreens/SignUp';
import FanRanking from './FanScreens/FanRanking';
import FanProfile from './FanScreens/FanProfile';



const Stack = createStackNavigator();

// TODO: Fix Navigation / Chooose Flow interactions to store creator vs. user in the route. 
// TODO: Create Nested Navigation / conditional navigation based on creator vs. user in order to disable access (but not super imp for prototype)
//
//

function LogoTitle() {
    return(
        <Image
            style={{ width: 47, resizeMode: 'contain'}}
            source={require("../Images/croissant-only.png")}
        />
    );
}

export default function Navigation() {
    return(
        <NavigationContainer> 
            <Stack.Navigator
                screenOptions={{
                    headerTintColor: '#828282',
                    headerTitle: props => <LogoTitle {...props} />,
                    headerStyle: {
                        shadowColor: 'transparent'
                    }
                }}
            > 
                <Stack.Screen name='ChooseFlow' component={ChooseFlow} options={{headerShown: false}}/>
                <Stack.Screen name='Welcome' component={Welcome}/>
                <Stack.Screen name='CreatorOnboarding' component={CreatorOnboarding}/>
                <Stack.Screen name='CreatorHome' component={CreatorHome} options={{headerShown: false}}/>
                <Stack.Screen name='FanHome' component={FanHome} options={{headerShown: false}} />
                <Stack.Screen name='CreateStudio' component={CreateStudio}/>
                <Stack.Screen name='StudioResults' component={StudioResults}/>
                <Stack.Screen name='CreateRoom' component={CreateRoom}/>
                <Stack.Screen name='Profile' component={Profile}/>
                <Stack.Screen name='LiveRoom' component={LiveRoom}/>
                <Stack.Screen name='FindRachel' component={FindRachel}/>
                <Stack.Screen name='SignUp' component={SignUp}/>
                <Stack.Screen name='FanRanking' component={FanRanking}/>
                <Stack.Screen name='FanProfile' component={FanProfile}/>


            </Stack.Navigator>
        </NavigationContainer>
    );
}
