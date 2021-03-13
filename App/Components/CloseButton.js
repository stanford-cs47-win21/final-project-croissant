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

export function CloseButton(props) {
    const navigation = useNavigation();
    return(
            <View style={styles.buttonContainer}> 
                <TouchableOpacity
                    style={styles.button1} 
                    onPress = {props.onPress} 
                >
                <Text style={styles.buttonText}> CLOSE </Text>
                </TouchableOpacity>
            </View> 
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 20,
        backgroundColor: "#F3F1F1",
    },
    buttonText:  {
        fontFamily: 'Lato_700Bold',
    }
});

