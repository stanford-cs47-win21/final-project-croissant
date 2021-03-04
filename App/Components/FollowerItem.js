import React, {useState} from 'react';
import { StyleSheet, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    View,
    Image,
    Dimensions
} from 'react-native';

import keyStyles from '../Styles/keyStyles';
import { useNavigation } from '@react-navigation/native';


export function FollowerItem({username, genre=null, followButton=null, ...props}) {
    const navigation = useNavigation();
    const [followButtonPressed, setFollowedButtonPressed] = useState(false);

    return(
        <View style={styles.outer}> 
            <Text > {username} </Text>
            <Text > {genre} </Text>

            <TouchableOpacity
                style={followButtonPressed ? styles.pressed : styles.unpressed}
                onPress={ () => {
                    if (username==='rachel_f') {
                        props.setFollowedRachel(!followButtonPressed);
                        setFollowedButtonPressed(!followButtonPressed);
                    } 
                }}
            > 
                <Text> 
                    {followButtonPressed ? 'FOLLOWING' : '+ FOLLOW '} 
                </Text>
            </TouchableOpacity>

        </View>
    );
}


const styles = StyleSheet.create({
    outer: {
        width: Dimensions.get('window').width * .9,
        height: Dimensions.get('window').height * .08, 
        backgroundColor: '#FFF8E0',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 20,
        margin: 8,
        flexDirection: 'row'
    },
    pressed: {
        backgroundColor: '#FAC738'
    },
    unpressed: {
        backgroundColor: 'white'
    }
  });