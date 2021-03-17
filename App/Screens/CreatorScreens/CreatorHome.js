import React, {useState, useEffect} from 'react';
import { StyleSheet, 
    SafeAreaView,
    View,
} from 'react-native';

import {StudioList} from "../../Components/StudioList";
import {Header} from "../../Components/Header";

import keyStyles from '../../Styles/keyStyles';
import {UpcomingStudio} from "../../Components/UpcomingStudio"


export default function CreatorHome({route, navigation}) {
    const [studios, setStudios] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    
    // the 5 different types of hardcoded cards on the homepage initially
    const fakeNewsfeedData = [
        // {
        //     isAlert: true,
        //     status: "2", // num participants
        //     message: "Feb 29", // date
        //     timeLeft: "9:30 PM PT", //time

        // },
        {
            isAlert: false,
            username: "rachel_f",
            status: "LIVE",
            message: "What is the weirdest recipe you enjoy?",
            timeLeft: "doesn't matter",
        },
        {
            isAlert: false,
            username: "rachel_f",
            status: "BRAINSTORMING",
            message: "I'm looking to do more vegan recipes! Would love to hear about your personal favorites.",
            timeLeft: "6 hours remaining",
        },
        {
            isAlert: false,
            username: "rachel_f",
            status: "RANKING",
            message: "How can I improve my videography skills?",
            timeLeft: "4 hours remaining",
        },
        {
            isAlert: false,
            username: "rachel_f",
            status: "VIEW RESULTS",
            message: "What should the theme of my new cookbook be?",
            timeLeft: "0 hours remaining",
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

    // adds either a new studio or a new upcoming room
    const addStudio = (newStudio) => {
        // new upcoming room
        if (newStudio && newStudio.isAlert) {
            let newStudioList = [];
            newStudioList.push(newStudio);
            newStudioList.push(...studios);
            console.log("NEW UPCOMING ROOM ADDED  ");
            // am a little confused why this works since the plus button should be last but whatever
            newStudioList.pop();
            console.log("REMOVED THE VIEW RESULTS STUDIO since we made an invite for it  ", newStudioList);
            setStudios(newStudioList);
        // a general new studio created
        } else {
            const prompt = newStudio.prompt;
            const timeRemainingDays = newStudio.brainstormTimeDays;
            const timeRemainingHours = newStudio.brainstormTimeHours;

            var timeLeft = null; 

            if (timeRemainingDays === 'O DAYS') {
                timeLeft = timeRemainingHours + ' REMAINING'
            } else if (timeRemainingHours === '0 HOURS') {
                timeLeft = timeRemainingDays + ' REMAINING'
            } else {
                timeLeft = timeRemainingDays + ', ' + timeRemainingHours + ' REMAINING'
            }
            let newStudioList = [];
            newStudioList.push({
                username: "rachel_f",
                status: "BRAINSTORMING",
                message: prompt,
                timeLeft: timeLeft,
            });
            newStudioList.push(...studios);
            console.log("NEW STUDIO LIST after adding custom studio ", newStudioList);
            setStudios(newStudioList);
        }
    }

    return(
        <SafeAreaView style={styles.container}> 
 
            <Header studios={studios}/>

            <View style={keyStyles.listView}> 
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
        backgroundColor: '#fff',
        height: '100%'

    },
  });
  
