import React, {useState} from 'react';
import { StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import keyStyles from '../Styles/keyStyles';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


let BUTTON_SIZE=25;
export function SalmonBadge({leftText, rightText, isButton=false, onPress=null}) {
    return (
        <View>
            <TouchableOpacity style={styles.profItem} onPress={onPress}> 
                <Text style={styles.infoText}> {leftText} </Text>
                <Text style={styles.infoText}> {rightText} </Text>
                {isButton &&<Icon name={'chevron-right'} color='white' size={BUTTON_SIZE} style={styles.leftAlign}/>}
            </TouchableOpacity>
        </View>
    );
}


// uncomment ugly background colors to make it clear where the flexboxes for the views are
const styles = StyleSheet.create({
    profItem: {
        width: Dimensions.get('window').width * .9,
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
    leftAlign: {
        position: 'absolute',
        right: 0
    }
  });
  
