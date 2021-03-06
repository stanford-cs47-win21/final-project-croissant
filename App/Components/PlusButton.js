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

export function PlusButton() {

    const navigation = useNavigation();
    return(
        <View style={styles.plusView}> 
            <TouchableOpacity
                style={styles.plusButton} 
                onPress = { () => navigation.navigate('CreateStudio')}

            >
                <Text style={styles.plusText}> + </Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    plusView: {
        width: Dimensions.get('window').width * .9,
        height: 118, 
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
    },
    plusButton: {
        borderWidth: 8,
        borderColor: 'grey',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderStyle: 'dashed',
    },
    plusText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'grey',
    }
  });
