import React, {useState, useEffect} from 'react';
import { StyleSheet, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    View,
    Image
} from 'react-native';

import keyStyles from '../../Styles/keyStyles';
import {Header} from '../../Components/Header';
import {StudioList} from '../../Components/StudioList';

import firestore from '../../../firebase';
import firebase from 'firebase';


export default function FanHome({route, navigation}) {
    const [studios, setStudios] = useState([]);
    const [isFollowingRachel, setIsFollowingRachel] = useState(false);

     // get changes to user state from firebase
     const reloadUser = async () => {
        try {
            const user = firebase.auth().currentUser;
            let userRef = firestore.doc('users/' + user.uid);
            let userSnapshot = await userRef.get();  
            let userdata = userSnapshot.data();
            setIsFollowingRachel(userdata.isFollowingRachel);
        } catch (error) {
            console.log(error);
        }
        return ([]);
    }

    // Initialize studios state upon component mounting
    useEffect( () => {
        setStudios(fakeNewsfeedData);

        // Display studios based on if Following Rachel
        const user = firebase.auth().currentUser;
        let userRef = firestore.doc('users/' + user.uid);
        reloadUser();

        // listen for changes to if user's following rachel
        let unsubscribe = userRef.onSnapshot(() => {
            reloadUser();
        });

        return () => { unsubscribe()}

    }, []);


    // Listen for whether ranking status is updated
    useEffect( () => {
        if (route.params?.rankingStatus) {
            updateRankingStatus();
        }
    }, [route.params?.rankingStatus]);

    // Update ranking status function
    const updateRankingStatus = () => {
        let studiosCopy = [...studios]; 
        const rankingStudioIndex = studiosCopy.findIndex((studio => studio.status == 'RANKING'));
        console.log("RANKING STUDIO INDEX ", rankingStudioIndex);

        if (rankingStudioIndex !== -1) {
            studiosCopy[rankingStudioIndex].status = "RANKED"; // ✓
            setStudios(studiosCopy);
        }
    }

    // Listen for whether brainstorming status is updated
    useEffect( () => {
        if (route.params?.brainstormingStatus) { 
            updateBrainstormingStatus();
        }
    }, [route.params?.brainstormingStatus]);

    // Update brainstorming status function
    const updateBrainstormingStatus = () => {
        let studiosCopy = [...studios]; 
        const brainstormingStudioIndex = studiosCopy.findIndex((studio => studio.status == 'BRAINSTORMING'));

        if (brainstormingStudioIndex !== -1) {
            studiosCopy[brainstormingStudioIndex].status = "BRAINSTORMED"; // ✓
            setStudios(studiosCopy); 
        }
    }
   
    const fakeNewsfeedData = [
        {
            username: "rachel_f",
            status: "LIVE",
            message: "What is the weirdest recipe you enjoy?",
            timeLeft: "doesn't matter",
        },
        {
            username: "gusteau",
            status: "BRAINSTORMING",
            message: "I'm looking to do more vegan recipes! Would love to hear about your personal favorites.",
            timeLeft: "6 hours remaining",
        },
        {
            username: "gordon_r",
            status: "RANKING",
            message: "How can I improve my videography skills?",
            timeLeft: "4 hours remaining",
        },
        {
            username: "marco",
            status: "VIEW RESULTS",
            message: "What should the theme of my new cookbook be?",
            timeLeft: "0 hours remaining",
        },
        // Last object will render into the plus button, sort of jank
        {
            username: "IM THE PLUS BUTTON",
        },
    ]

    console.log("State of studios", studios);
    return(
        <SafeAreaView style={styles.container}> 
            <Header fan={true}/>

            <View style={keyStyles.listView}> 
                {isFollowingRachel ? 
                    <StudioList studios={studios} fan={true}/>
                :
                    <Text> Press search </Text>
                }
            </View>

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
        height: '100%'
    },
  });
  
