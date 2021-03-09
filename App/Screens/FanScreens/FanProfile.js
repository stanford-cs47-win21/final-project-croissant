import React, {useState} from 'react';
import { StyleSheet, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    View,
    Image
} from 'react-native';

import keyStyles from '../../Styles/keyStyles';
import {FollowerItem} from "../../Components/FollowerItem";


export default function FanProfile({route, navigation}) {


    return(
        <SafeAreaView style={styles.container}> 

            <View> 
                <Text> Your name -- Pull from firebase </Text>
                <Text> @your_username -- Pull from firebase</Text>
            </View> 

            <View> 
                <View style={styles.profItem}> 
                    <Text> Your Contributions </Text>
                    <Text> 24 </Text>
                </View>

                <View style={styles.profItem}> 
                    <Text> Following </Text>
                    <Text> 1 </Text>
                </View>

                <FollowerItem username="rachel_f" genre="BAKING"/>
                
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
  