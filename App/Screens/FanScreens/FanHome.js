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

const fakeNewsfeedData = [
    {
        isInvite: true,
        username: "rachel_f",
        message: "I loved your suggestion to use jackfruit as a substitute and want to meet you in a panel!",
        date: "Feb 24", // date
        time: "10:00 AM PT", //time
        isVisible: true,
    },
    {
        username: "rachel_f",
        status: "LIVE",
        message: "What is the weirdest recipe you enjoy?",
        timeLeft: "doesn't matter",
        isVisible: true,
    },
    {
        username: "gusteau",
        status: "BRAINSTORMING",
        message: "I'm looking to do more vegan recipes! Would love to hear about your personal favorites.",
        timeLeft: "6 hours remaining",
        isVisible: true,
    },
    {
        username: "rachel_f",
        status: "RANKING",
        message: "How can I improve my videography skills?",
        timeLeft: "4 hours remaining",
        isVisible: true,
    },
    {
        username: "gusteau",
        status: "VIEW RESULTS",
        message: "What should the theme of my new cookbook be?",
        timeLeft: "0 hours remaining",
        isVisible: true,
    },
    // Last object will render into the plus button, sort of jank
    {
        username: "PLUS",
        isVisible: true,
    },
]

export default function FanHome({route, navigation}) {
    const [studios, setStudios] = useState(fakeNewsfeedData);
    const [isFollowingRachel, setIsFollowingRachel] = useState(false);
    const [isFollowingGusteau, setIsFollowingGusteau] = useState(false);

     // get changes to user state from firebase
     const reloadUser = async () => {
        try {
            const user = firebase.auth().currentUser;
            let userRef = firestore.doc('users/' + user.uid);
            let userSnapshot = await userRef.get();  
            let userdata = userSnapshot.data();
            setIsFollowingRachel(userdata.isFollowingRachel);
            setIsFollowingGusteau(userdata.isFollowingGusteau);
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

        // listen for changes to if user's following rachel or gusteau
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

    useEffect( () => {
        let studiosCopy = [...studios]; 

        studiosCopy.forEach( (studio) => {
            if (studio.username ==='gusteau') studio.isVisible = isFollowingGusteau;
            else if (studio.username ==='rachel_f') studio.isVisible = isFollowingRachel;
        });
        setStudios(studiosCopy);
    }, [isFollowingGusteau, isFollowingRachel])


    return(
        <SafeAreaView style={styles.container}> 
            <Header fan={true}/>

            <View style={keyStyles.listView}> 
                {isFollowingRachel | isFollowingGusteau ? 
                    <StudioList studios={studios} fan={true}/>
                :
                <Text style={{fontSize: 18, color: keyStyles.DARK_GRAY}}> Try searching for a creator! </Text>
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
  
