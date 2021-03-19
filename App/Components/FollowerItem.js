import React, {useState, useEffect} from 'react';
import { StyleSheet, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    View,
    Image,
    Dimensions
} from 'react-native';

import keyStyles from '../Styles/keyStyles';
import { useNavigation } from '@react-navigation/native';

import firestore from '../../firebase';
import firebase from 'firebase';

export function FollowerItem({username, genre=null, followButton=null, ...props}) {
    const navigation = useNavigation();
    const [followButtonPressed, setFollowedButtonPressed] = useState(false);

    // Determine whether the follower item should be pressed depending on which item it is
    useEffect( () => {
        console.log("JUST RE RENDERED !!!!");
        const user = firebase.auth().currentUser;
        let userRef = firestore.doc('users/' + user.uid);
        const getUserDoc = async(userRef) => {
            let userDoc = await userRef.get();
            if (userDoc.exists && username === 'rachel_f' && userDoc.data().isFollowingRachel) {
                setFollowedButtonPressed(true);
            }
            else if (userDoc.exists && username === 'gusteau' && userDoc.data().isFollowingGusteau) {
                setFollowedButtonPressed(true);
            }
        }
        getUserDoc(userRef);    
    }, [])

    // Update firebase if the user presses follow or unfollow on button
    useEffect( () => {
        const user = firebase.auth().currentUser;
        let userRef = firestore.doc('users/' + user.uid);
        const updateUser = async (userRef) => {
            if (username === 'rachel_f') {
                await userRef.update({
                    isFollowingRachel: followButtonPressed,
                });
            } else if (username === 'gusteau') {
                await userRef.update({
                    isFollowingGusteau: followButtonPressed,
                });
            } 
        }
        updateUser(userRef);

    }, [followButtonPressed])

    console.log("1) RACHEL GREEN WHY IS SHE FOLLOWING? ", username, "follow button pressed ?" , followButtonPressed)


    return(
        <View style={styles.outer} onLayout={(event) => {var {x, y, width, height} = event.nativeEvent.layout;  console.log(height);}}>
            <View style={styles.usernameSection}> 
                <Text style={{fontSize: 16}}> {username} </Text>
            </View> 

            <View style={styles.section}> 
                <Text style={{color: 'grey'}}> {genre} </Text>
            </View>

            <View style={styles.buttonView}> 
                <TouchableOpacity
                    style={followButtonPressed ? styles.pressed : styles.unpressed}
                    onPress={() => {
                        if (username === 'rachel_f' || username ==='gusteau') setFollowedButtonPressed(!followButtonPressed)}
                    }
                > 
                    <Text> {followButtonPressed ? 'FOLLOWING' : '+ FOLLOW '} </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    outer: {
        width:  Dimensions.get('window').width * .9,
        //height: '80%', // Dimensions.get('window').height * .18, 
        backgroundColor: '#FFF8E0',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 50,
        margin: 8,
        flexDirection: 'row',
        padding: 15
    },

    pressed: {
        backgroundColor: '#FAC738',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        padding: 4
    },
    unpressed: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        padding: 4
    },
    section: {
        width: '33%',
        justifyContent: 'center',
        alignContent: 'center',
    },
    usernameSection: {
        width: '33%',
        alignContent: 'center',
    }
  });
