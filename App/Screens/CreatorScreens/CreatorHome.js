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
                {/* <Image 
                    style={styles.logoImage}
                    source={"../Images/full-croissant-logo.png"}
                /> */}
                <Text style={keyStyles.croissantHeader}> CREATOR HOME </Text> 
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
    //   backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 6,
    },
    listView: {
        // backgroundColor: 'red',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    logoImage: {
        resizeMode: 'contain',
        backgroundColor: 'red',
        width: '100%',
    }
  });
  