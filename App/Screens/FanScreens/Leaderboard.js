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
                    comment: 'A dark chocolate-based cookbook would be amazing!!',
                },
                {
                    username: 'george_h',
                    comment: 'Eggless-cookie recipes. Trying to go vegan.',
                },
                {
                    username: 'paul_walrus',
                    comment: 'What if you made one dish from each country in the world? Try an international palette.',
                },
            ]
        },
        {
            title: "Most Controversial",
            explanation: "These were the most polarizing fan suggestions.",
            color: keyStyles.SALMON_COLOR,
            data: [
                {
                    username: 'jerry_g',
                    comment: 'Honestly don\'t even make a cookbook',
                },
                {
                    username: 'phil_l',
                    comment: 'Cookbooks are boring. Make a movie instead!',
                },
                {
                    username: 'weir_wood',
                    comment: 'I wish you would put your videos on TikTok instead of YouTube.',
                },
            ]

        },
        {
            title: "Most Representative",
            explanation: "These were the suggestions that captured frequently referenced topics by fans.",
            color: keyStyles.SALMON_COLOR,
            data: [
                {
                    username: 'p_sing',
                    comment: 'I\'d like a chocolate dessert cookbook.',
                },
                {
                    username: 'bentham',
                    comment: 'Quick desserts.',
                },
                {
                    username: 'jacques_d',
                    comment: 'I love you Rachel!! :)',
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
  
