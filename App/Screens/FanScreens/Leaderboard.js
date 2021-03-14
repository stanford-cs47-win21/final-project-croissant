import React, {useState, useEffect} from 'react';
import { StyleSheet, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    View,
    Image,
    TextInput,
    Keyboard,
    Dimensions,
    FlatList
} from 'react-native';

import keyStyles from '../../Styles/keyStyles';
import {Title} from "../../Components/Title";
import {ActionButton} from "../../Components/ActionButton";
import {CommentCard} from "../../Components/CommentCard";
import {GroupCard} from "../../Components/GroupCard";

let BODY_TEXT_SIZE = 16;

export default function Leaderboard({route, navigation, ...props}) {

    const fanResults = [
        {
            title: "Fan Favorites",
            explanation: "These were the overall highest-ranking fan suggestions.",
            color: keyStyles.SALMON_COLOR, 
            data: [
                {
                    username: 'john_winston',
                    comment: 'Suggest oil-based recipes',
                },
                {
                    username: 'george_h',
                    comment: 'Egg-based recipes',
                },
                {
                    username: 'paul_walrus',
                    comment: 'Milk chocolate alternatives pleaseee',
                },
            ]
        },
        {
            title: "Most Controversial",
            explanation: "These were the most polarizing fan suggestions.",
            color: keyStyles.SALMON_COLOR,
            data: [
                {
                    username: 'john_winston',
                    comment: 'wooo',
                },
                {
                    username: 'george_h',
                    comment: 'hi',
                },
                {
                    username: 'paul_walrus',
                    comment: 'lol',
                },
            ]

        },
        {
            title: "Most Representative",
            explanation: "These were the suggestions that captured frequently referenced topics by fans.",
            color: keyStyles.SALMON_COLOR,
            data: [
                {
                    username: 'john_winston',
                    comment: 'yes',
                },
                {
                    username: 'george_h',
                    comment: 'no',
                },
                {
                    username: 'paul_walrus',
                    comment: 'ofcccc',
                },
            ]

        },
    ];
    const makeGroupCard = ({item: groupInfo}) => (
        <GroupCard groupName={groupInfo.title} explanation={groupInfo.explanation} color={groupInfo.color}
            items={groupInfo.data} buttonColor={groupInfo.buttonColor} autoExpand={true}/>
    );

    return(
        <SafeAreaView style={styles.container}>
            <Title text="Leaderboard"/>
            <FlatList
                data={fanResults}
                renderItem={makeGroupCard}
                keyExtractor={(item, index) => index.toString()}
        />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    bodyTextContainer: {
        width: '90%',
        marginBottom: 15
    },
    bodyText: {
        fontSize: keyStyles.BODY_TEXT_SIZE,
        lineHeight: keyStyles.BODY_TEXT_SIZE * keyStyles.LINE_HEIGHT_MULT
    },

  });
  
