import React from 'react';
import { StyleSheet, 
    Text, 
    TouchableOpacity,
    View,
    FlatList,
    Image,
    Dimensions
} from 'react-native';

export function LiveSymbol() {
    return (
        <View style={styles.rowContainer}>
            <View style={styles.liveCircle} />
            <Text style={styles.liveText}>LIVE</Text> 
        </View>
    );
}


const styles = StyleSheet.create({
    liveCircle: {
      width: 10,
      height: 10,
      borderRadius: 10/2,
      backgroundColor: 'red',
      marginRight: 4, 
    },
    liveText: {
        color: 'red',
        fontFamily: 'Lato_700Bold',
        fontSize: 12
    },
    rowContainer: {
        flexDirection: 'row', // align text next to icon
        justifyContent: 'center',
        alignItems: 'center',
    },
  });
