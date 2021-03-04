import React, {useState} from 'react';
import { StyleSheet, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    View,
    Image
} from 'react-native';

import keyStyles from '../../Styles/keyStyles';


export default function Profile({route, navigation}) {


    return(
        <SafeAreaView style={styles.container}> 

            <View> 
                <Text> Rachel Finn </Text>
                <Text> @rachel_f </Text>
            </View> 

            <View> 
                <View style={styles.profItem}> 
                    <Text> Your Studios </Text>
                    <Text> {route.params && route.params.numStudios} </Text>
                </View>

                <View style={styles.profItem}> 
                    <Text> Followers </Text>
                    <Text> 467 </Text>
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
    profItem: {
        width: '80%',
        height: 40,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        // backgroundColor: 'red',
        alignItems: 'center',
    }
  });
  