import React, {useState, useEffect} from 'react';
import { StyleSheet, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    View,
    Image,
    TextInput,
    Touchable
} from 'react-native';

import keyStyles from '../../Styles/keyStyles';
import firestore from '../../../firebase';
import firebase from 'firebase';

import { Feather } from '@expo/vector-icons';

export default function SignUp({route, navigation, ...props}) {
    const [signUpName, setSignUpName] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [signUpUsername, setSignUpUsername] = useState('');
    const [fanOrCreator, setFanOrCreator] = useState('fan');
    const [errorMessage, setErrorMessage] = useState('');

    // Sign up function. Make sure users have selected fan mode.
    let signUp = async () => {
        if (fanOrCreator === 'fan') {
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
                setErrorMessage(err);
                console.log(err);
            }
        }
    }

    // Sometimes the error is a JSON Object, othertimes it is just a string
    const getErrorMessage = (errorMessage) => {
        if (errorMessage.message) return JSON.stringify(errorMessage.message);
        else return errorMessage;
    }


    return(
        <SafeAreaView style={styles.container}> 

            <View style={styles.contentContainer}> 
            <Text style={styles.header}> Sign up for Croissant! </Text>

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

            {/* Row of checkboxes */}
            <View style={styles.checkBoxRow}> 
                <View style={styles.checkItem} > 
                    <TouchableOpacity
                        style={fanOrCreator === 'creator' ? styles.fullCheckBox: styles.checkBox} 
                        onPress={() => {
                            setFanOrCreator('creator'); 
                            setErrorMessage('Croissant does not allow creator account creation at this time. Please select Fan.')
                        }}
                    >
                        {fanOrCreator === 'creator' ? <Feather name="check" size={46} color="white" /> : null }
                    </TouchableOpacity>
                    <Text> Creator </Text>
                </View>

                <View style={styles.checkItem} > 
                    <TouchableOpacity
                        style={fanOrCreator === 'fan' ? styles.fullCheckBox : styles.checkBox} 
                        onPress={() => {setFanOrCreator('fan'); setErrorMessage('');}}
                    >
                        {fanOrCreator === 'fan' ? <Feather name="check" size={46} color="white" /> : null }
                    </TouchableOpacity>
                    <Text> Fan </Text>
                </View>
            </View>
            
            {/* Sign up button */}
            <TouchableOpacity
                style={keyStyles.button1} 
                onPress = { () => {signUp(); console.log("SIGNED UP");}}
            >
                <Text style={keyStyles.button1text}> Create Account </Text>
            </TouchableOpacity>


            {/* Optional error stuff */}
            <View style={{flexDirection: 'row', height: '7%', width: '90%', justifyContent: 'center', flexWrap: 'wrap'}}> 
                <Text style={{color: 'red', textAlign: 'center'}}> {errorMessage ? "ERROR: " + getErrorMessage(errorMessage) : null} </Text>
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
    // checks
    checkBoxRow: {
        flexDirection: 'row', 
        height: '15%', 
        width: '90%', 
        justifyContent: 'space-evenly'
    },
    checkItem: {
        flexDirection: 'row', 
        width: '50%', 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    checkBox: {
        height: 60,
        width: 60,
        borderRadius: 60/2,
        borderColor: '#FAC738',
        borderWidth: 1,
        marginRight: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fullCheckBox: {
        height: 60,
        width: 60,
        borderRadius: 60/2,
        backgroundColor: '#08BD1A',
        marginRight: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },

  });
  