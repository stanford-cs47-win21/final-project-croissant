import React from 'react';
import { StyleSheet, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    View,
    Image
} from 'react-native';

import keyStyles from '../Styles/keyStyles';
import {ActionButton} from '../Components/ActionButton';


export default function ChooseFlow({navigation}) {

    return(
        <SafeAreaView style={styles.container}> 
                <Image 
                    source={require("../Images/full-croissant-logo.png")}
                    resizeMode="contain"
                    style={{width: '70%'}}
                />
            
            <View style={{alignItems: 'center'}}> 
                <ActionButton
                    onPress = { () => navigation.navigate('Welcome')}
                    text={"Creator login"}
                />

                <ActionButton
                    onPress = { () => navigation.navigate('Login')}
                    text={"Fan login"}
                />

                <TouchableOpacity
                    onPress = { () => navigation.navigate('SignUp')}
                >
                        <Text style={{textDecorationLine: 'underline', marginTop: 15,
                        textSize: keyStyles.BODY_TEXT_SIZE}}> Create an Account </Text>
                </TouchableOpacity>

            </View>
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
    welcome: {
        margin: 20
    }
  });
  
