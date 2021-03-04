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


export default function FanHome({route, navigation}) {
    const [studios, setStudios] = useState([]);
    const [isFollowingRachel, setIsFollowingRachel] = useState(false);

    // Initialize studios state upon component mounting
    useEffect( () => {
        setStudios(fakeNewsfeedData);
    }, []);

    // Initialize studios state upon component mounting
    useEffect( () => {
        if (route.params?.followedRachel) {
            setIsFollowingRachel(route.params.followedRachel);
        }
    }, [route.params?.followedRachel]);

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

    return(
        <SafeAreaView style={styles.container}> 
            <Header fan={true}/>

            <View style={keyStyles.listView}> 
                {isFollowingRachel ? 
                    <StudioList studios={studios}/>
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
      justifyContent: 'center',
    },
  });
  