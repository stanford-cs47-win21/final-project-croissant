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
            <View style={styles.topView}> 
                <Text style={keyStyles.croissantHeader}> CREATOR HOME </Text> 
            </View>


            <View style={styles.listView}> 
                <StudioList fakeNewsfeedData={fakeNewsfeedData} />
            </View>

            <View style={styles.bottomView}> 
                <TouchableOpacity
                    style={styles.plusButton} 
                    onPress = { () => navigation.navigate('CreateStudio')}
                >
                    <Text style={styles.plusText}> + </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}


// uncomment ugly background colors to make it clear where the flexboxes for the views are
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    topView: {
      height: '10%',
    //   backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 6,
    },
    listView: {
        // backgroundColor: 'red',
        height: '75%',
    },
    bottomView: {
        height: '15%',
        width: '80%',
        // backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
    plusButton: {
        borderWidth: 15,
        borderColor: 'grey',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderStyle: 'dashed',
    },
    plusText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'grey',
    }
  });
  