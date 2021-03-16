import React from 'react';
import { StyleSheet, 
    Text, 
    TouchableOpacity,
    View,
    FlatList,
    Image,
    Dimensions
} from 'react-native';

let PIC_SIZE = 20;
export function PicAndUsername(props) {
    let rachelPhoto = <Image source={require("../Images/Rachel.png")} style={styles.pictureStyle}/>
    let johnPhoto = <Image source={require("../Images/John.png")} style={styles.pictureStyle}/>
    return (
        <View style={styles.rowContainer}>
            {(props.photoPerson === 'John') ? johnPhoto : rachelPhoto} 
            <Text style={styles.username}> {props.userInfo} </Text> 
        </View>
    );
}


const styles = StyleSheet.create({
    profileCircle: {
      width: PIC_SIZE,
      height: PIC_SIZE,
      borderRadius: PIC_SIZE/2,
      backgroundColor: '#979797',
    },
    username: {
        fontSize: 14,
        textAlign: 'center',
    },
    rowContainer: {
        flexDirection: 'row', // align text next to icon
        justifyContent: 'center'
    },
    pictureStyle: {
        resizeMode: 'contain',
        height: PIC_SIZE,
        width: PIC_SIZE
    }
  });
