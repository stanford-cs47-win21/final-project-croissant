import React, {useState, useEffect} from 'react';
import { StyleSheet, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    View,
    Image
} from 'react-native';

import keyStyles from '../../Styles/keyStyles';
import {FollowerItem} from "../../Components/FollowerItem";
import { Ionicons } from '@expo/vector-icons';

import firestore from '../../../firebase';
import firebase from 'firebase';



export default function FanProfile({route, navigation}) {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [isFollowingRachel, setIsFollowingRachel] = useState(false);

    // load user data
    useEffect( () => {
        const user = firebase.auth().currentUser;
        let userRef = firestore.doc('users/' + user.uid);
        const getUserDoc = async(userRef) => {
            let userDoc = await userRef.get();
            if (userDoc.exists) {
                const userData = userDoc.data();
                setName(userData.name);
                setUsername(userData.username);
                setIsFollowingRachel(userData.isFollowingRachel);
            }
        }
        getUserDoc(userRef);    
    }, [])


    return(
        <SafeAreaView style={styles.container}> 

            <View> 
                <Text> {name} </Text>
                <Text> @{username}</Text>
            </View> 

            <View> 
                <View style={styles.profItem}> 
                    <Text> Your Contributions </Text>
                    <Text> 24 </Text>
                </View>

                <View style={styles.profItem}> 
                    <Text> Following </Text>
                    <Text> {isFollowingRachel ? 1 : 0 } </Text>
                </View>

                {isFollowingRachel && <FollowerItem username="rachel_f" genre="BAKING"/> }
                
            </View> 

            <TouchableOpacity style={keyStyles.button1}
                onPress={() => {
                    firebase.auth().signOut()
                    .then(() => navigation.navigate('ChooseFlow'))
                    .catch(console.err);
                }}
            >
                <View style={{flexDirection: 'row', alignItems: 'center'}} > 
                    <Ionicons name='exit-outline' size={24} color='white' style={{marginRight: 10}} />
                    <Text style={keyStyles.button1text}>Log out</Text>
                </View>
            </TouchableOpacity>
        
        </SafeAreaView>
    );
}


// uncomment ugly background colors to make it clear where the flexboxes for the views are
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        height: '100%',
    },
    profItem: {
        width: '80%',
        height: 40,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        // backgroundColor: 'red',
        alignItems: 'center',
    }
  });
  