import React from 'react';
import { StyleSheet, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    View,
    Image
} from 'react-native';

import keyStyles from '../Styles/keyStyles';


export default function ChooseFlow({navigation}) {

    return(
        <SafeAreaView style={styles.container}> 
            <View style={styles.welcome}> 
                <Text style={keyStyles.croissantHeader}> croissant </Text> 
            </View>
            
            <View style={{alignItems: 'center'}}> 
                <TouchableOpacity
                    style={keyStyles.button1} 
                    onPress = { () => navigation.navigate('Welcome')}
                >
                    <Text style={keyStyles.button1text}> Login As Creator </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={keyStyles.button1} 
                    onPress = { () => navigation.navigate('FanHome')}
                >
                    <Text style={keyStyles.button1text}> Login As Fan </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress = { () => navigation.navigate('SignUp')}
                >
                    <Text style={{textDecorationLine: 'underline', marginTop: 15}}> Create an Account </Text>
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
  