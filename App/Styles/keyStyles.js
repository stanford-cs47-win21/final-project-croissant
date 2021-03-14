import {Dimensions} from 'react-native';
// TODO: import typography for lato?
import { useFonts, Lato_400Regular, Lato_400Bold } from '@expo-google-fonts/lato';

const keyStyles = {
    DEFAULT_BORDER_RADIUS: 20,
    PRIMARY_COLOR: "#FAC738",
    SECONDARY_COLOR: "#FFF8E0",
    BODY_TEXT_SIZE: 16,
    LINE_HEIGHT_MULT:1.5,
    LIGHT_GRAY: '#F2F2F2',
    SALMON_COLOR:"#F98562",
    DARK_GRAY: '#979797',
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
        height: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        width: '90%',
    },
    titleText1: {
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
        height: '70%',
        marginTop: -5
    },
}

export default keyStyles
