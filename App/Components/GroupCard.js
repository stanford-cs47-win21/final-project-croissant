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
import {CommentCard} from "./CommentCard";

export function GroupCard(props) {

    const navigation = useNavigation();
    let fakeItem = [{
        username: 'parquet_courts',
        comment: 'Before the water gets too high'
    },];
    let commonCardsArr = props.items.map(cardInfo => (
        <CommentCard cardInfo={cardInfo} commentColor={true}/>
    ));
    return (
        <View style={[styles.outer, {backgroundColor: props.color}]}>
            <View style={styles.topRow}>
                <Text style={styles.headerText}>{props.groupName} </Text>
            </View>
            <View style={styles.explanation}>
                <Text style={styles.explanationText}>{props.explanation}</Text>
            </View>
            {commonCardsArr}
        </View>
    );
}


const styles = StyleSheet.create({
    outer: {
        width: Dimensions.get('window').width * .9,
        backgroundColor: '#2F80ED',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 20,
        margin: 8,
        padding: 10
    },
    headerText: {
        fontSize: 24,
        fontFamily: 'Lato_700Bold',
        color: 'white',
        marginBottom: 3
    },
    topRow: {
        width: '90%',
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
