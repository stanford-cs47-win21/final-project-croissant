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


export function Title({text, center=false}) {
    return(
        <View style={[keyStyles.titleView, center && {justifyContent: 'center'}]}> 
            <Text style={keyStyles.titleText1}> {text} </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    
  });
