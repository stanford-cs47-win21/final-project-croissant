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

export function CommentCard({cardInfo, commentColor=false}) {

    const {username, comment} = cardInfo; 

    const navigation = useNavigation();

    return (
        <View style={[commentColor ? styles.outerStaticComment : styles.outerStatic, keyStyles.shadowProps]}> 
            <View style={styles.topRow}> 
                <PicAndUsername userInfo = {username} /> 
            </View>

            <View style={commentColor ? styles.middleBoxComment : styles.middleBox}> 
                <Text style={styles.commentText}>{comment}</Text> 
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    outerStatic: {
        width: Dimensions.get('window').width * .9,
        backgroundColor: '#FFF8E0',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 20,
        margin: 8,
        paddingBottom: 20
    },
    outerStaticComment: {
        width: Dimensions.get('window').width * .9,
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 20,
        margin: 8,
        paddingBottom: 20
    },
    topRow: {
        flexDirection: 'row',
        alignContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: '2%',
        paddingRight: '3.15%',
        height: 35
    },
    middleBox: {
        backgroundColor: '#FFFEFA',
        width: '93.7%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10
    },
    middleBoxComment: {
        backgroundColor: '#FFFEFA',
        width: '93.7%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10
    },
    commentText: {
        fontSize: keyStyles.BODY_TEXT_SIZE,
        lineHeight: keyStyles.BODY_TEXT_SIZE * keyStyles.LINE_HEIGHT_MULT
    },
    
  });
