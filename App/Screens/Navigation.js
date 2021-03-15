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
import Login from './FanScreens/Login';
import Brainstorm from './FanScreens/Brainstorm';
import NotSelected from './FanScreens/NotSelected';
import Leaderboard from './FanScreens/Leaderboard';
import YourContributions from './FanScreens/YourContributions';
import FollowingScreen from './FanScreens/FollowingScreen';


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
                <Stack.Screen name='Welcome' component={Welcome} options={{headerBackTitle: ''}}/>
                <Stack.Screen name='CreatorOnboarding' component={CreatorOnboarding} options={{headerBackTitle: ''}}/>
                <Stack.Screen name='CreatorHome' component={CreatorHome} options={{headerShown: false}}/>
                <Stack.Screen name='FanHome' component={FanHome} options={{headerShown: false}} />
                <Stack.Screen name='CreateStudio' component={CreateStudio} options={{headerBackTitle: 'Studios'}}/>
                <Stack.Screen name='StudioResults' component={StudioResults} options={{headerBackTitle: 'Studios'}}/>
                <Stack.Screen name='CreateRoom' component={CreateRoom} options={{headerBackTitle: 'Results'}}/>
                <Stack.Screen name='Profile' component={Profile} options={{headerBackTitle: 'Studios'}}/>
                <Stack.Screen name='LiveRoom' component={LiveRoom} options={{headerBackTitle: 'Studios'}}/>
                <Stack.Screen name='FindRachel' component={FindRachel}/>
                <Stack.Screen name='SignUp' component={SignUp}/>
                <Stack.Screen name='FanRanking' component={FanRanking}/>
                <Stack.Screen name='FanProfile' component={FanProfile} options={{headerBackTitle: 'Studios'}}/>
                <Stack.Screen name='Brainstorm' component={Brainstorm} options={{headerBackTitle: 'Studios'}}/>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='NotSelected' component={NotSelected}/>
                <Stack.Screen name='Leaderboard' component={Leaderboard}/>
                <Stack.Screen name='YourContributions' component={YourContributions}/>
                <Stack.Screen name='FollowingScreen' component={FollowingScreen}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}
