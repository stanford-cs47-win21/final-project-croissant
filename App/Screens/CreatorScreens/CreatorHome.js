import React from 'react';
import { StyleSheet, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    View,
    Image
} from 'react-native';

import keyStyles from '../../Styles/keyStyles';


export default function CreatorHome({navigation}) {

    return(
        <SafeAreaView style={styles.container}> 
            <View style={styles.welcome}> 
                <Text style={keyStyles.croissantHeader}> CREATOR HOME </Text> 
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    welcome: {
        margin: 20
    }
  });
  