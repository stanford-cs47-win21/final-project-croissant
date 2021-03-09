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

export default function SignUp({route, navigation, ...props}) {
    const [signUpName, setSignUpName] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [signUpUsername, setSignUpUsername] = useState('');

    let signUp = async () => {
        try {
            const response = await firebase.auth().createUserWithEmailAndPassword(signUpEmail, signUpPassword);
            if(response.user) {
                const user = firebase.auth().currentUser;
                var userDocRef = firestore.doc('users/' + user.uid);
    
                // Since my document doesn't exist, userDocRef.set will
                // create the document for me
                userDocRef.set({
                    name: signUpName,
                    email: signUpEmail,
                    username: signUpUsername,
                    isFollowingRachel: false
                });
                navigation.navigate('FanHome');
            }
        } catch (err) {
            console.log(err);
        }
    }


    return(
        <SafeAreaView style={styles.container}> 

            <Text style={styles.header}> Create a fan account </Text>

            <TextInput
                style={styles.input}
                value={signUpName}
                onChangeText={(signUpName) => setSignUpName(signUpName)}
                placeholder="NAME" 
            />
            <TextInput
                style={styles.input}
                value={signUpEmail}
                onChangeText={(signUpEmail) => setSignUpEmail(signUpEmail)}
                placeholder="EMAIL" 
            />
            <TextInput
                style={styles.input}
                value={signUpUsername}
                onChangeText={(signUpUsername) => setSignUpUsername(signUpUsername)}
                placeholder="USERNAME" 
            />
            <TextInput
                style={styles.input}
                value={signUpPassword}
                secureTextEntry={true}
                onChangeText={(signUpPassword) => setSignUpPassword(signUpPassword)}
                placeholder="PASSWORD" 
            />

            <TouchableOpacity
                style={keyStyles.button1} 
                onPress = { () => {signUp(); console.log("SIGNED UP");}}
            >
                <Text style={keyStyles.button1text}> Create Account </Text>
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
  