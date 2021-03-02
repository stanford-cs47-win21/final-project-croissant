import React from 'react';
import { StyleSheet, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    View,
    Image,
    Dimensions
} from 'react-native';

import keyStyles from '../Styles/keyStyles';


export function Title({text}) {
    return(
        <View style={keyStyles.titleView}> 
            <Text style={keyStyles.titleText1}> {text} </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    
  });