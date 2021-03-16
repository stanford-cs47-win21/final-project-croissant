import React, {useState, useEffect} from 'react';
import { StyleSheet, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    View,
    Image,
    TextInput,
    Keyboard
} from 'react-native';

import keyStyles from '../../Styles/keyStyles';
import {Title} from "../../Components/Title";
import {ActionButton} from "../../Components/ActionButton";
import {CommentCard} from "../../Components/CommentCard";
import {SalmonBadge} from "../../Components/SalmonBadge";
import firebase from 'firebase';
import firestore from '../../../firebase';


let BODY_TEXT_SIZE = 16;

export default function NotSelected({route, navigation, ...props}) {
    const [prompt, setPrompt] = useState("");
    const [fanUsername, setFanusername] = useState("");
    const {username, status, message, timeLeft} = route.params.cardInfo;

    // load user data
    useEffect( () => {
        const user = firebase.auth().currentUser;
        let userRef = firestore.doc('users/' + user.uid);
        const getUserDoc = async(userRef) => {
            let userDoc = await userRef.get();
            if (userDoc.exists) {
                const userData = userDoc.data();
                setFanusername(userData.username);
            }
        }
        getUserDoc(userRef);    
    }, [])

    return(
        <SafeAreaView style={styles.container}> 
            <Title text="Thanks for contributing!" />
            <View style={styles.topCard}> 
                <CommentCard 
                    cardInfo={{
                        username: username,
                        comment: message,
                    }}
                />
            </View>

            <View style={styles.bodyTextContainer}> 
                <Text style={styles.bodyText}>rachel_f appreciates your feedback. Check out how other fans rated your idea: </Text>
            </View>
            
            <CommentCard 
                cardInfo={{
                    username: fanUsername,
                    comment: "I like blueberry and strawberry sweets.",
                }}
                commentColor={true}/>
            <SalmonBadge leftText="Percentile" rightText="62nd"/> 
            <SalmonBadge leftText="Total views" rightText="42"/> 
            <SalmonBadge leftText="Average ranking" rightText="2.4"/> 
            
            <ActionButton text={"SEE LEADERBOARD"} onPress = {() => {navigation.navigate('Leaderboard')}}/>
            


        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    topCard: {
        height: '17%',
        justifyContent: 'center',
        marginBottom: 18,
    },
    bodyTextContainer: {
        width: '90%',
        marginBottom: 15
    },
    bodyText: {
        fontSize: keyStyles.BODY_TEXT_SIZE,
        lineHeight: keyStyles.BODY_TEXT_SIZE * keyStyles.LINE_HEIGHT_MULT
    },
  });
  
