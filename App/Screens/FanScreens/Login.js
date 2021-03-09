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

export default function Login({route, navigation, ...props}) {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    // Check out this link to learn more about firebase.auth()
    // https://firebase.google.com/docs/reference/node/firebase.auth.Auth
    let login = async () => {
        try {
            // Note that we don't have to tell the app that the user has logged in.
            // firebase.auth().onAuthStateChanged() in App.js communicates this for us!
            await firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword);
            navigation.navigate('FanHome');
        } catch (err) {
            console.log(err);
        }
    }


    return(
        <SafeAreaView style={styles.container}> 

            <Text style={styles.header}> Log In </Text>

            <TextInput
                style={styles.input}
                value={loginEmail}
                onChangeText={(loginEmail) => setLoginEmail(loginEmail)}
                placeholder="EMAIL" 
            />
            <TextInput
                style={styles.input}
                value={loginPassword}
                secureTextEntry={true}
                onChangeText={(loginPassword) => setLoginPassword(loginPassword)}
                placeholder="PASSWORD" 
            />

            <TouchableOpacity
                style={keyStyles.button1} 
                onPress = { () => {login(); console.log("Logged in");}}
            >
                <Text style={keyStyles.button1text}> Log In </Text>
            </TouchableOpacity>

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
    header: {
        marginBottom: 10,
        fontSize: 24,
    },
    input: {
        height: '8%',
        width: '65%',
        fontSize: 15,
        margin: 10,
        padding: 5,
        borderColor: '#FAC738',
        borderRadius: 18,
        borderWidth: 1,
    },
  });
  