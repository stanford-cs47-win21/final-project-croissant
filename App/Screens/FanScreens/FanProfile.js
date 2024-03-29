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
import {SalmonBadge} from "../../Components/SalmonBadge";

import firestore from '../../../firebase';
import firebase from 'firebase';


let PIC_SIZE = 90;
let FONT_SIZE = 17;

export default function FanProfile({route, navigation}) {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [isFollowingRachel, setIsFollowingRachel] = useState(false);
    const [isFollowingGusteau, setIsFollowingGusteau] = useState(false);


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
                setIsFollowingGusteau(userData.isFollowingGusteau);
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
                <SalmonBadge leftText="Your Contributions" rightText="5" isButton={true} onPress={()=> {navigation.navigate("YourContributions", {username: username});}}/>
                    <SalmonBadge leftText="Following" rightText={isFollowingRachel ? 
                            (isFollowingGusteau ? "2" : "1")
                         : (isFollowingGusteau ? "1" : "0")} isButton={isFollowingRachel || isFollowingGusteau} 
                        onPress={(isFollowingRachel || isFollowingGusteau) ? () => {navigation.navigate("FollowingScreen");} : null}/>

                    <TouchableOpacity 
                        style={[styles.profItem, {backgroundColor: '#F2F2F2'}]}
        
                        onPress={() => navigation.navigate('ChooseFlow')}
                    >
                    <Text style={[styles.infoText, {color:'black'}]}> Log Out </Text>
                    <Ionicons name='exit-outline' size={36} color='black'/>
                    </TouchableOpacity>
                
            </View> 

            
        
        </SafeAreaView>
    );
}


  
const styles = StyleSheet.create({
    profileCircle: {
      width: PIC_SIZE,
      height: PIC_SIZE,
      borderRadius: PIC_SIZE/2,
      backgroundColor: '#F2F2F2',
      margin: 3,
    },
    realName: {
        marginBottom: 5,
        fontSize: FONT_SIZE * 1.5
    },
    username: {
        color: '#645F5C',
        fontSize: FONT_SIZE * 1.2 
    },
    container: {
        backgroundColor: '#fff',
        height: '100%'
    },
    userInfo: {
        marginBottom: 50,
        alignItems: 'center'
    },
    infoAbout: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    profItem: {
        width: '90%',
        margin: 8,
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: keyStyles.SALMON_COLOR,
        padding: 20,
        borderRadius: 20
    },
    infoText: {
        fontSize: 24,
        fontFamily: 'Lato_700Bold',
        color: 'white',
    },
    pictureStyle: {
        resizeMode: 'contain',
        width: PIC_SIZE
    }
  });
