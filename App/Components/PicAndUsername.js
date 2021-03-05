import React from 'react';
import { StyleSheet, 
    Text, 
    TouchableOpacity,
    View,
    FlatList,
    Image,
    Dimensions
} from 'react-native';

export function PicAndUsername({userInfo}) {
    // TODO: Add picture to userInfo
    const username = userInfo; // to be able to use as prop
    return (
        <View style={styles.rowContainer}>
        <View style={styles.profileCircle} />
        <Text style={styles.username}> {username} </Text> 
        </View>
    );
}


const styles = StyleSheet.create({
    profileCircle: {
      width: 20,
      height: 20,
      borderRadius: 20/2,
      backgroundColor: '#979797',
    },
    username: {
        fontSize: 14,
        textAlign: 'center'
    },
    rowContainer: {
        flexDirection: 'row', // align text next to icon
        justifyContent: 'center'
    },
  });
