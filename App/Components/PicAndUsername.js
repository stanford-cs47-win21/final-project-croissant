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

function getPhoto(username) {
    var photoDict = new Map();
    let johnPhoto = <Image source={require("../Images/John.png")} style={styles.pictureStyle}/>
    photoDict.set("rachel_f", <Image source={require("../Images/Rachel.png")} style={styles.pictureStyle}/>)
    photoDict.set("paul_walrus", <Image source={require("../Images/Paul.png")} style={styles.pictureStyle}/>);
    photoDict.set("george_h", <Image source={require("../Images/George.png")} style={styles.pictureStyle}/>);
    photoDict.set("jerry_g", <Image source={require("../Images/Jerry.png")} style={styles.pictureStyle}/>);
    photoDict.set("phil_l", <Image source={require("../Images/Phil.png")} style={styles.pictureStyle}/>);
    photoDict.set("weir_wood", <Image source={require("../Images/Bob.png")} style={styles.pictureStyle}/>);
    photoDict.set("p_sing", <Image source={require("../Images/Singer.png")} style={styles.pictureStyle}/>);
    photoDict.set("jacques_d", <Image source={require("../Images/Derrida.png")} style={styles.pictureStyle}/>);
    photoDict.set("bentham", <Image source={require("../Images/Bentham.png")} style={styles.pictureStyle}/>);
    photoDict.set("gordon_r", <Image source={require("../Images/Gordon.png")} style={styles.pictureStyle}/>);
    photoDict.set("gusteau", <Image source={require("../Images/Gusteau.png")} style={styles.pictureStyle}/>);
    photoDict.set("marco", <Image source={require("../Images/Marco.png")} style={styles.pictureStyle}/>);
    if (photoDict.has(username)) {
        return photoDict.get(username);
    } else {
        return johnPhoto;
    }
}


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
