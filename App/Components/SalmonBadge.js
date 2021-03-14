import React, {useState} from 'react';
import { StyleSheet, 
    Text, 
    View,
} from 'react-native';

import keyStyles from '../Styles/keyStyles';
import { Ionicons } from '@expo/vector-icons';


export function SalmonBadge(props) {
    return (
            <View style={styles.profItem}> 
                <Text style={styles.infoText}> {props.leftText} </Text>
                <Text style={styles.infoText}> {props.rightText} </Text>
            </View>
    );
}


// uncomment ugly background colors to make it clear where the flexboxes for the views are
const styles = StyleSheet.create({
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
  });
  
