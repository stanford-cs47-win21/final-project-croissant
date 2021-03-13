import React from 'react';
import { StyleSheet, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    View,
    Image,
    Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

let HEIGHT_OVER_WIDTH = 70 / 318; // from Figma
let WIDTH =  Dimensions.get('window').width * .75;

export function ActionButton({buttonInfo}) {
    const {text, nextScreen, context} = buttonInfo; 
    const navigation = useNavigation();
    return(
            <View style={styles.buttonContainer}> 
                <TouchableOpacity
                    style={styles.button1} 
                    onPress = { () => {
                        navigation.navigate('CreatorHome', {newStudio: {
                            prompt: prompt,
                            brainstormTimeDays: brainstormTimeDays,
                            brainstormTimeHours: brainstormTimeHours
                        }})
                    }}
                >
                    <Text style={styles.button1text}> START </Text>
                </TouchableOpacity>
            </View> 
    );
}

const styles = StyleSheet.create({
    button1: {
        margin: 10,
        borderRadius: 20,
        width: WIDTH,
        height: WIDTH * HEIGHT_OVER_WIDTH, 
        backgroundColor: "#FAC738",
        justifyContent: 'center',
        alignItems: 'center',
    },
    button1text: {
        color: 'black',
        fontSize: 24,
        textAlign: 'center',
        letterSpacing: 1,
        fontFamily: 'Lato_700Bold'

    },
});
