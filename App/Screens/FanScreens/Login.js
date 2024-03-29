import React, {useState, useEffect} from 'react';
import { StyleSheet, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    View,
    Image,
    TextInput
} from 'react-native';

import keyStyles from '../../Styles/keyStyles';
import firestore from '../../../firebase';
import firebase from 'firebase';
import {Title} from "../../Components/Title";
import {ActionButton} from "../../Components/ActionButton";

export default function Login({route, navigation, ...props}) {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    // Check out this link to learn more about firebase.auth()
    // https://firebase.google.com/docs/reference/node/firebase.auth.Auth
    let login = async () => {
        try {
            // Note that we don't have to tell the app that the user has logged in.
            // firebase.auth().onAuthStateChanged() in App.js communicates this for us!
            await firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword);
            navigation.navigate('FanHome');
        } catch (err) {
            setErrorMessage(err);
            console.log(err);
        }
    }


    return(
        <SafeAreaView style={styles.container}> 


            <View style={styles.contentContainer}>

            <Text style={styles.header}> Welcome back! </Text>

            <TextInput
                style={styles.input}
                value={loginEmail}
                onChangeText={(loginEmail) => setLoginEmail(loginEmail)}
                placeholder="Email" 
                autoCapitalize={"none"}
                autoCompleteType={"email"}
                autoCorrect={false}
                textContentType={"emailAddress"}
            />
            <TextInput
                style={styles.input}
                value={loginPassword}
                secureTextEntry={true}
                auto
                onChangeText={(loginPassword) => setLoginPassword(loginPassword)}
                placeholder="Password" 
                textContentType={"password"}
            />

            <ActionButton
                onPress = { () => {login(); console.log("Logged in");}}
                text={"Log In"} 
            />

            {/* Optional error stuff */}
            <View style={{flexDirection: 'row', height: '7%', width: '90%', justifyContent: 'center', flexWrap: 'wrap'}}> 
                <Text style={{color: 'red', textAlign: 'center'}}> {errorMessage ? "ERROR: " + errorMessage.message : null} </Text>
            </View>
            
            </View>

            

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    contentContainer: {
        marginTop: 50,
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    header: {
        marginBottom: 10,
        fontSize: 24,
    },
    input: {
        height: '8%',
        width: '75%',
        fontSize: 15,
        margin: 10,
        padding: 5,
        paddingLeft: 8,
        borderColor: '#FAC738',
        borderRadius: 18,
        borderWidth: 1,
        fontSize: 16
    },
  });
  
