import React from 'react';
import { StyleSheet, 
    Text, 
    TouchableOpacity,
    View,
    FlatList,
    Image,
    Dimensions
} from 'react-native';

export function PicAndUsername(userInfo) {
    const username = userInfo; 

    return (
        <View style={styles.rowContainer}>
        <View style={styles.profileCircle} />
        <Text style={styles.username}> username </Text> 
        </View>
    );
}


const styles = StyleSheet.create({
    profileCircle: {
      width: 20,
      height: 20,
      borderRadius: 20/2,
      backgroundColor: '#979797',
      paddingRight: 4, 
    },
    username: {
        fontSize: 12,
    },
    rowContainer: {
        flexDirection: 'row' // align text next to icon
    },
  });
