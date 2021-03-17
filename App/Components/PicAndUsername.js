import React from 'react';
import { StyleSheet, 
    Text, 
    TouchableOpacity,
    View,
    FlatList,
    Image,
    Dimensions
} from 'react-native';

import {keyStyles,getPhoto} from "../Styles/keyStyles";



/*
 * Component for rendering picture and username
 * Defaults to photo of rachel unless "John" is passed in props.photoPerson
 * Note: Photos must already be circles
 * TODO: add more people!
 */
export function PicAndUsername(props) {
    return (
        <View style={styles.rowContainer}>
            {getPhoto(props.userInfo)}
            <Text style={styles.username}> {props.userInfo} </Text> 
        </View>
    );
}


const styles = StyleSheet.create({
    username: {
        fontSize: 14,
        textAlign: 'center',
    },
    rowContainer: {
        flexDirection: 'row', // align text next to icon
        justifyContent: 'center'
    },
  });
