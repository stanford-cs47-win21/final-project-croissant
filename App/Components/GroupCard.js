import React, {useState} from 'react';
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
import {CommentCard} from "./CommentCard";
import {CloseButton} from "./CloseButton";

export function GroupCard(props) {
    const [showComments, setComments] = useState(false);
    let commonCardsArr = props.items.map(cardInfo => (
        <CommentCard cardInfo={cardInfo} commentColor={true}/>
    ));
    return (
        <TouchableOpacity style={[styles.outer, {backgroundColor: props.color}]}
            onPress={() => setComments(!showComments)}>
            <View style={styles.topRow}>
                <Text style={styles.headerText}>{props.groupName} </Text>
                    {showComments && <CloseButton onPress={() => setComments(!showComments)}
                    buttonColor={props.buttonColor}/>}
            </View>
            <View style={styles.explanation}>
                <Text style={styles.explanationText}>{props.explanation}</Text>
            </View>
                {showComments && commonCardsArr}
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    outer: {
        width: Dimensions.get('window').width * .9,
        backgroundColor: '#2F80ED',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        borderRadius: 20,
        margin: 8,
        padding: 10
    },
    headerText: {
        fontSize: 24,
        fontFamily: 'Lato_700Bold',
        color: 'white'
    },
    topRow: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: "center",
        alignItems: "center",
            flexDirection: 'row', // align text next to icon
    },
    explanation: {
        width: '90%',
        marginBottom: 10
    },
    explanationText: {
        fontSize: keyStyles.BODY_TEXT_SIZE,
        color: 'white',
    }
    
  });
