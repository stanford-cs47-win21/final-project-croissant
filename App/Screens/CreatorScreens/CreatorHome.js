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
        {
            username: "rachel_f",
            status: "LIVE",
            message: "Woooo we are going live",
            timeLeft: "Join now",
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
        const timeRemaining = newStudio.brainstormTime;
        let newStudioList = [];
        newStudioList.push({
            username: "rachel_f",
            status: "BRAINSTORMING",
            message: prompt,
            timeLeft: timeRemaining,
        });
        newStudioList.push(...studios);
        console.log("NEW STUDIO LIST after adding custom studio ", newStudioList);
        setStudios(newStudioList);
    }

    return(
        <SafeAreaView style={styles.container}> 
 
            <Header studios={studios}/>

            <View style={keyStyles.listView}> 
                <UpcomingStudio alertInfo={{numParticipants:2, time:"9:30 PM PT", date:"Feb 29"}}/>
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
  });
  
