import React from 'react';
import {
    Image,
    Dimensions
} from 'react-native';

// TODO: import typography for lato?
import { useFonts, Lato_400Regular, Lato_400Bold } from '@expo-google-fonts/lato';

let PIC_SIZE = 20;

export function getPhoto(username, size) {
    size = (typeof size != "undefined") ? size : 20; // default to size for PicAndUsername
    var photoDict = new Map();
    let johnPhoto = <Image source={require("../Images/John.png")} style={[keyStyles.pictureStyle, {height:size, width:size}]}/>
    photoDict.set("rachel_f", <Image source={require("../Images/Rachel.png")} style={[keyStyles.pictureStyle, {height: size, width: size}]}/>)
    photoDict.set("paul_walrus", <Image source={require("../Images/Paul.png")} style={[keyStyles.pictureStyle, {height: size, width: size}]}/>)
    photoDict.set("george_h", <Image source={require("../Images/George.png")} style={[keyStyles.pictureStyle, {height: size, width: size}]}/>);
    photoDict.set("jerry_g", <Image source={require("../Images/Jerry.png")} style={[keyStyles.pictureStyle, {height:size, width:size}]}/>);
    photoDict.set("phil_l", <Image source={require("../Images/Phil.png")} style={[keyStyles.pictureStyle, {height:size, width:size}]}/>);
    photoDict.set("weir_wood", <Image source={require("../Images/Bob.png")} style={[keyStyles.pictureStyle, {height:size, width:size}]}/>);
    photoDict.set("p_sing", <Image source={require("../Images/Singer.png")} style={[keyStyles.pictureStyle, {height:size, width:size}]}/>);
    photoDict.set("jacques_d", <Image source={require("../Images/Derrida.png")} style={[keyStyles.pictureStyle, {height:size, width:size}]}/>);
    photoDict.set("bentham", <Image source={require("../Images/Bentham.png")} style={[keyStyles.pictureStyle, {height:size, width:size}]}/>);
    photoDict.set("gordon_r", <Image source={require("../Images/Gordon.png")} style={[keyStyles.pictureStyle, {height:size, width:size}]}/>);
    photoDict.set("gusteau", <Image source={require("../Images/Gusteau.png")} style={[keyStyles.pictureStyle, {height:size, width:size}]}/>);
    photoDict.set("marco", <Image source={require("../Images/Marco.png")} style={[keyStyles.pictureStyle, {height:size, width:size}]}/>);
    photoDict.set("mclinda", <Image source={require("../Images/Linda.png")} style={[keyStyles.pictureStyle, {height:size, width:size}]}/>);
    photoDict.set("yokono", <Image source={require("../Images/Yoko.png")} style={[keyStyles.pictureStyle, {height:size, width:size}]}/>);
    photoDict.set("starr_LFC", <Image source={require("../Images/Ringo.png")} style={[keyStyles.pictureStyle, {height:size, width:size}]}/>);
    photoDict.set("check", <Image source={require("../Images/check.png")} style={[keyStyles.pictureStyle, {height:size, width:size}]}/>);
    if (photoDict.has(username)) {
        return photoDict.get(username);
    } else {
        return johnPhoto;
    }
}

export const keyStyles = {
    DEFAULT_BORDER_RADIUS: 20,
    PRIMARY_COLOR: "#FAC738",
    SECONDARY_COLOR: "#FFF8E0",
    BODY_TEXT_SIZE: 16,
    LINE_HEIGHT_MULT:1.5,
    LIGHT_GRAY: '#F2F2F2',
    SALMON_COLOR:"#f59376", //  #f59376 // #F98562
    DARK_GRAY: '#979797',
    PIC_SIZE: 20,
    // const ICON_SIZE: 24,

    topRight: {
        alignSelf: 'flex-end',
        position: 'absolute',
    },

    shadowProps: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1.2 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
    },

    button1: {
        margin: 10,
        borderRadius: 20,
        width: Dimensions.get('window').width * .5,
        backgroundColor: "#FAC738",
        width: 206,
        height: 53,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button1text: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center'
    },
    croissantHeader: {
        fontSize: 36,
        fontFamily: 'Lato_700Bold',
    },
    titleView: {
        height: '8%',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        width: '90%'
    },
    titleText1: {
        fontSize: 28,
        color: 'black',
        letterSpacing: .6
    },
    smallBold: {
        fontSize: 16,
        color: 'black',
        fontFamily: 'Lato_700Bold',
        textTransform: 'uppercase',
        letterSpacing: .6
    },
    centeredView: {
        // don't add height
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',

        // backgroundColor: 'red'
    },
    listView: {
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    pictureStyle: {
        resizeMode: 'contain',
        height: PIC_SIZE,
        width: PIC_SIZE
    }
}

export default keyStyles
