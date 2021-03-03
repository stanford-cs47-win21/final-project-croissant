import React, {useState, useEffect} from 'react';
import { StyleSheet, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    View,
    Image
} from 'react-native';

import {StudioList} from "../../Components/StudioList";

import keyStyles from '../../Styles/keyStyles';


export default function CreatorHome({route, navigation}) {
    const [studios, setStudios] = useState([]);
    
    // the 5 different types of hardcoded cards on the homepage initially
    const fakeNewsfeedData = [
        {
            username: "rachel_f",
            status: "LIVE",
            message: "Woooo we are going live",
            timeLeft: "doesn't matter",
        },
        {
            username: "rachel_f",
            status: "BRAINSTORMING",
            message: "I'm looking to do more vegan recipes! Would love to hear about your personal favorites.",
            timeLeft: "6 hours remaining",
        },
        {
            username: "rachel_f",
            status: "RANKING",
            message: "what is your favorite sandwich.",
            timeLeft: "4 hours remaining",
        },
        {
            username: "rachel_f",
            status: "VIEW RESULTS",
            message: "hahahaahahhaah ",
            timeLeft: "0:00 remaining",
        },
        // Last object will render into the plus button, sort of jank
        {
            username: "IM THE PLUS BUTTON",
        },
    ]

    // Initialize studios state upon component mounting
    useEffect( () => {
        setStudios(fakeNewsfeedData);
    }, []);

    // When route.params sends a new prompt, add a new prompt
    useEffect( () => {
        if (route.params && route.params.newStudio) {
            addStudio(route.params.newStudio);
        }
    }, [route.params && route.params.newStudio])

    
    const addStudio = (newStudio) => {
        const prompt = newStudio.prompt;
        // TODO: const timeRemaining = info.brainstormTimeRemaining
        let newStudioList = [];
        newStudioList.push({
            username: "rachel_f",
            status: "BRAINSTORMING",
            message: prompt,
            timeLeft: "tbd Hrs. remaining",
        });
        newStudioList.push(...studios);
        console.log("NEW STUDIO LIST after adding custom studio ", newStudioList);
        setStudios(newStudioList);
    }

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
                    onPress = {() => navigation.navigate('Profile')}
                /> 
            </View> 


            <View style={styles.listView}> 
                <StudioList 
                    studios={studios} 
                />
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
  