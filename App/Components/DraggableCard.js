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
import {PicAndUsername} from "./PicAndUsername";
import keyStyles from '../Styles/keyStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

let BUTTON_SIZE=25;
export function DraggableCard({comment}) {

    const navigation = useNavigation();

    return (
        <View style={[styles.outerStaticComment, keyStyles.shadowProps]}>
            <View style={styles.middleBoxComment}> 
                <Text style={styles.commentText}>{comment}</Text> 
            </View>
            <Icon name={'drag-vertical'} color='black' size={BUTTON_SIZE} style={styles.icon}/>
        </View>
    );
}


const styles = StyleSheet.create({
    outerStaticComment: {
        width: Dimensions.get('window').width * .9,
        flexDirection: 'row',
        backgroundColor: '#F2F2F2',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        borderRadius: 20,
        margin: 8,
        paddingBottom: 20,
        paddingTop: 20
    },
    middleBoxComment: {
        backgroundColor: '#FFFEFA',
        width: '85%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        marginLeft: '3.15%'
    },
    commentText: {
        fontSize: keyStyles.BODY_TEXT_SIZE,
        lineHeight: keyStyles.BODY_TEXT_SIZE * keyStyles.LINE_HEIGHT_MULT
    },
    icon: {
        //marginTop: keyStyles.BODY_TEXT_SIZE * keyStyles.LINE_HEIGHT_MULT / 2
    }
    
  })
