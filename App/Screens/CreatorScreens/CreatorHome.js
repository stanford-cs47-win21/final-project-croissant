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
        {
            username: "rachel_f",
            status: "Results",
            message: "hahahaahahhaah ",
            timeLeft: "0:00 remaining",
        },
        // {
        //     username: "rachel_f",
        //     status: "Ranking",
        //     message: "scrollinggggg",
        //     timeLeft: "4 hours remaining",
        // },

        // Last object will render into the plus button
        {
            username: "IM THE PLUS BUTTON",
        },
    ]



    return(
        <SafeAreaView style={styles.container}> 
            <View style={styles.topView}> 
                <View style={styles.logoImage}> 
                    <Image 
                        source={require("../../Images/full-croissant-logo.png")}
                        resizeMode="contain"
                        style={{width: '50%'}}
                    />
                </View>

                <TouchableOpacity 
                    style={styles.profile}
                    // onPress = {navigation.navigate('')}
                /> 
            </View> 


            <View style={styles.listView}> 
                <StudioList fakeNewsfeedData={fakeNewsfeedData} />
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
    //   backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 6,
      width: '90%',
      flexDirection: 'row'
    },
    listView: {
        // backgroundColor: 'red',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    logoImage: {
        // resizeMode: 'contain',
        alignItems: 'flex-start',
        width: '85%',
        flexDirection: 'row',
        // backgroundColor: 'green',
    },
    profile: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: '#e4e7eb',
        justifyContent: 'center',
        alignItems: 'center'
    }
  });
  