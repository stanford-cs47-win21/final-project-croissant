import {Dimensions} from 'react-native';
// TODO: import typography for lato?

const DEFAULT_BORDER_RADIUS = 20;
const PRIMARY_COLOR = "#FAC738"; 

const keyStyles = {
    button1: {
        margin: 10,
        borderRadius: DEFAULT_BORDER_RADIUS,
        width: Dimensions.get('window').width * .5,
        backgroundColor: PRIMARY_COLOR,
        width: 206,
        height: 53,
        justifyContent: 'center'
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