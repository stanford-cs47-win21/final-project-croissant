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
    import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export function LivePicUsername({userInfo, checked=false}) {
    // TODO: Add picture to userInfo
    const username = userInfo; // to be able to use as prop
    return (
        <View style={styles.colContainer}>
            {checked ? 
                getPhoto("check", 70)
                : getPhoto(username, 70)
                }
            <Text style={styles.username}> {username}</Text> 
            <Text style={[keyStyles.smallBold, {fontSize: 12}]}> {checked && "Invited"}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    profileCircle: {
      width: 70,
      height: 70,
      borderRadius: 70/2,
      backgroundColor: '#F2F2F2',
      margin: 3,
    },
    username: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '500',
    },
    colContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginHorizontal: 5,
        marginVertical: 3,
        height: 120,
        width: 120
    },
  });
