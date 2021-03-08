import {Dimensions} from 'react-native';
// TODO: import typography for lato?

const keyStyles = {
    DEFAULT_BORDER_RADIUS: 20,
    PRIMARY_COLOR: "#FAC738",
    SECONDARY_COLOR: "#FFF8E0",
    // const ICON_SIZE: 24,


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
        fontWeight: 'bold',
        // fontFamily: 'lato',
    },
    titleView: {
        height: '10%',
        // backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        width: '90%',
    },
    titleText1: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'black',
    },
    centeredView: {
        // don't add height
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    listView: {
        // backgroundColor: 'red',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
}

export default keyStyles