import React, {useState} from 'react';
import { StyleSheet, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    View,
    Image
} from 'react-native';

import {StudioCard} from "../../Components/StudioCard";
import {StudioList} from "../../Components/StudioList";


import keyStyles from '../../Styles/keyStyles';


export default function CreatorHome({navigation}) {

    const fakeNewsfeedData = [
        {
            username: "rachel_f",
            status: "Brainstorming",
            message: "I'm looking to do more vegan recipes! Would love to hear about your personal favorites.",
            timeLeft: "6 hours remaining",
        },
        {
            username: "rachel_f",
            status: "Ranking",
            message: "what is your favorite sandwich.",
            timeLeft: "4 hours remaining",
        },
    ]

    return(
        <SafeAreaView style={styles.container}> 
            <View style={styles.top}> 
                <Text style={keyStyles.croissantHeader}> CREATOR HOME </Text> 
            </View>


            <View style={styles.list}> 
                <StudioList fakeNewsfeedData={fakeNewsfeedData} />
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    top: {
      height: '20%',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-end', 
      margin: 6,
    },
  });
  