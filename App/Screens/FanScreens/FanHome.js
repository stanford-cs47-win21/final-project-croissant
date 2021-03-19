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
    const [isFollowingGusteau, setIsFollowingGusteau] = useState(false);


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
        console.log("Initialize set studios to fake newsfeed data");
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
   


    // RACHEL decide how to adjust which studios should render in the home feed
    const determineRachelStudios = () => {
        console.log("STUDIOS pre rachel", studios);
        let studiosCopy = studios; // [...studios]; 

        studiosCopy.forEach( (studio) => {
            if (studio.username ==='rachel_f') studio.isVisible = isFollowingRachel;
        });
        console.log("Post rachel studios", studiosCopy);
        return studiosCopy;
    }
    
    // GUSTEAU decide how to adjust which studios should render in the home feed
    const determineGusteauStudios = () => {
        console.log("STUDIOS pre gusteau", studios);
        let studiosCopy = studios; // [...studios]; 

        studiosCopy.forEach( (studio) => {
            if (studio.username ==='gusteau') studio.isVisible = isFollowingGusteau;
        });
        console.log("Post gusteau studios", studiosCopy);
        return studiosCopy;
    }

    // const determineStudios = () => {

    //=========== THIS VERSION OF CODE had weird firebase race conditions
        // if (isFollowingGusteau && isFollowingRachel) {
        //     // all items should be set to isVisible=true
            // studiosCopy.forEach(studio => studio.isVisible=true);
        //     console.log("studios copy both followed", studiosCopy);
        // }
        // else if (isFollowingGusteau) {
        //     // only gusteau items should be set to isVisible=true
        //     studiosCopy.forEach( (studio) => {
        //         if (studio.username==='gusteau' || studio.username==='PLUS') studio.isVisible=true;
        //         else studio.isVisible=false;
        //     });

        // } else if (isFollowingRachel) {
        //     // only rachel items should be set to isVisible=true
        //     studiosCopy.forEach( (studio) => {
        //         if (studio.username==='rachel_f' || studio.username==='PLUS') studio.isVisible=true;
        //         else studio.isVisible=false;
        //     });
        //     console.log("studios copy only RACHEL followed", studiosCopy);
        // } 
        // return studiosCopy;


        // //=========== THIS version OF CODE works but breaks the badge ranking turning grey because fakeNewsFeeddata is hard coded (no badge state carries over)
        // if (isFollowingGusteau && isFollowingRachel) return fakeNewsfeedData;
        // else if (isFollowingGusteau) {
        //     var filtered = fakeNewsfeedData.filter(function (item) {
        //         return (item.username === 'gusteau' || item.username === 'PLUS');
        //     });
        //     return filtered;
        // } else if (isFollowingRachel) {
        //     var filtered = fakeNewsfeedData.filter(function (item) {
        //         return (item.username === 'rachel_f'|| item.username === 'PLUS');
        //     });
        //     return filtered;
        // } else return null;
        
    // }

    // depends on changes in followingGusteau and following Rachel
    useEffect( () => {
        console.log("Change in gusteau, calling determine studios");
        setStudios(determineGusteauStudios()); // after this alters the studio list item's props, it should cause a re-render
    }, [isFollowingGusteau])

    // depends on changes in followingGusteau and following Rachel
    useEffect( () => {
        console.log("Change in rachel, calling determine studios");
        setStudios(determineRachelStudios()); // after this alters the studio list item's props, it should cause a re-render
    }, [isFollowingRachel])

    // console.log("State of studios", studios);
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
  
