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

    

    // Determine should the rachel_f follower item be pressed?
    useEffect( () => {
        const user = firebase.auth().currentUser;
        let userRef = firestore.doc('users/' + user.uid);
        const getUserDoc = async(userRef) => {
            let userDoc = await userRef.get();
            if (userDoc.exists) setFollowedButtonPressed(userDoc.data().isFollowingRachel);
        }
        getUserDoc(userRef);    
    }, [])


    useEffect( () => {
        const user = firebase.auth().currentUser;
        let userRef = firestore.doc('users/' + user.uid);
        const updateUser = async (userRef) => {
            await userRef.update({
                isFollowingRachel: followButtonPressed,
            });
        }
        updateUser(userRef);

    }, [followButtonPressed])

    return(
        <View style={styles.outer}> 
            <View style={styles.section}> 
                <Text style={{marginLeft: 10}}> {username} </Text>
            </View> 

            <View style={styles.section}> 
                <Text style={{color: 'grey'}}> {genre} </Text>
            </View>

            <View style={styles.section}> 
                <TouchableOpacity
                    style={followButtonPressed ? styles.pressed : styles.unpressed}
                    onPress={ () => {
                        if (username==='rachel_f') {
                            setFollowedButtonPressed(!followButtonPressed);
                        } 
                    }}
                > 
                    <Text> 
                        {followButtonPressed ? 'FOLLOWING' : '+ FOLLOW '} 
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    outer: {
        width:  Dimensions.get('window').width * .9,
        height: '80%', // Dimensions.get('window').height * .18, 
        backgroundColor: '#FFF8E0',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 20,
        margin: 8,
        flexDirection: 'row'
    },
    pressed: {
        backgroundColor: '#FAC738',
        height: '50%',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    unpressed: {
        backgroundColor: 'white',
        height: '50%',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    section: {
        width: '33%',
        justifyContent: 'center',
        alignContent: 'center',
    }
  });