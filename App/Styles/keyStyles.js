import {Dimensions} from 'react-native';
// TODO: import typography for lato?


const keyStyles = {
    button1: {
        margin: 10,
        borderRadius: 20,
        width: Dimensions.get('window').width * .5,
        backgroundColor: "#FAC738",
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
    }
}

export default keyStyles