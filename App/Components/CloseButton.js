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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

let BUTTON_SIZE=25;
export function CloseButton(props) {
    const navigation = useNavigation();
    return(
            <View style={[styles.buttonContainer, {backgroundColor: props.buttonColor}]}>
                <TouchableOpacity
                    onPress = {props.onPress}
                >
                    <Icon name={'close'} color='white' size={BUTTON_SIZE} />
                </TouchableOpacity>
            </View> 
    );
}
const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent:'center',
        alignItems:'center',
        width:BUTTON_SIZE,
        height:BUTTON_SIZE,
        borderRadius:BUTTON_SIZE/2,
    },
});

