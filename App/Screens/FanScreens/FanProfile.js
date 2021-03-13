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


let PIC_SIZE = 90;
let FONT_SIZE = 17;

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


            <View style={styles.userInfo}> 
                <Image 
                    source={require("../../Images/John.png")}
                    style={styles.pictureStyle}
                />

                <Text style={styles.realName}> {name} </Text>
                <Text style={styles.username}> @{username} </Text>
            </View>

            <View style={styles.infoAbout}>  
                <View style={styles.profItem}> 
                    <Text style={styles.infoText}> Your Contributions </Text>
                    <Text style={styles.infoText}> 24 </Text>
                </View>

                <View style={styles.profItem}> 
                    <Text style={styles.infoText}> Following </Text>
                    <Text style={styles.infoText}> {isFollowingRachel ? 1 : 0 } </Text>
                </View>

                {isFollowingRachel && <FollowerItem username="rachel_f" genre="BAKING"/> }

                {/* Log out button */}
                <View style={{height: '50%', justifyContent: 'flex-end'}}> 
                    <TouchableOpacity style={keyStyles.button1}
                        onPress={() => {
                            firebase.auth().signOut()
                            .then(() => navigation.navigate('ChooseFlow'))
                            .catch(console.err);
                        }}
                    >
                        <View style={{flexDirection: 'row', alignItems: 'center'}} > 
                            <Ionicons name='exit-outline' size={24} color='black' style={{marginRight: 10}} />
                            <Text style={keyStyles.button1text}>Log out</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
            </View> 

            
        
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
    userInfo: {
        alignItems: 'center',
        height: '40%',
        // backgroundColor: 'red',
    },
    infoAbout: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: '60%',
        // backgroundColor: 'green'
    },
    realName: {
        marginTop: 8,
        marginBottom: 5,
        fontSize: FONT_SIZE
    },
    username: {
        color: '#645F5C',
        fontSize: FONT_SIZE
    },
    // profItem: {
    //     width: '80%',
    //     height: 40,
    //     justifyContent: 'space-evenly',
    //     flexDirection: 'row',
    //     // backgroundColor: 'red',
    //     alignItems: 'center',
    // },
    profItem: {
        width: '100%',
        height: 20,
        margin: 8,
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    pictureStyle: {
        resizeMode: 'contain',
        width: PIC_SIZE
    },
    infoText: {
        fontSize: FONT_SIZE,
    },
  });
  