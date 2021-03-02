import React, {useState} from 'react';
import { StyleSheet, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    View,
    Image
} from 'react-native';

import keyStyles from '../../Styles/keyStyles';


export default function StudioResults({route, navigation}) {
    const {username, status, message, timeLeft} = route.params.cardInfo;

    return(
        <SafeAreaView style={styles.container}> 
            
            {/* Make this a component since used so much */}
            <View style={keyStyles.titleView}> 
                <Text style={keyStyles.titleText1}> Studio Results </Text>
            </View>

            {/* Make this a component since used so much */}
            <View style={keyStyles.titleView}> 
                <Text style={keyStyles.titleText1}> Fan Favorites </Text>
            </View>


            {/* Button to create room */}
            <View style={keyStyles.centeredView}> 
                <TouchableOpacity
                    style={keyStyles.button1} 
                    onPress = { () => navigation.navigate('CreateRoom')} // TODO: pass data
                >
                    <Text style={keyStyles.button1text}> CREATE ROOM </Text>
                </TouchableOpacity>
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
  });
  