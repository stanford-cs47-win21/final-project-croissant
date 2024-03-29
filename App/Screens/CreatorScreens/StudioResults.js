import React, {useState} from 'react';
import { StyleSheet,
    Text,
    SafeAreaView,
    TouchableOpacity,
    View,
    Image,
    ScrollView,
    FlatList,
    Dimensions
} from 'react-native';

import keyStyles from '../../Styles/keyStyles';
import {Title} from "../../Components/Title";
import {StudioCard} from "../../Components/StudioCard";
import {CommentCard} from "../../Components/CommentCard";
import {GroupCard} from "../../Components/GroupCard";
import {ActionButton} from '../../Components/ActionButton';

export default function StudioResults({route, navigation}) {
    const {username, status, message, timeLeft} = route.params.cardInfo;
    // hardcoding the data for the sectionlist
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
                    username: 'jacques_d',
                    comment: 'I love you Rachel!! :)',
                },
                {
                    username: 'bentham',
                    comment: 'Quick desserts.',
                },
            ]

        },
    ];
    const makeGroupCard = ({item: groupInfo}) => (
        <GroupCard groupName={groupInfo.title} explanation={groupInfo.explanation} color={groupInfo.color}
            items={groupInfo.data} buttonColor={groupInfo.buttonColor} autoExpand={false}/>
    );

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
            <CommentCard
                cardInfo={{
                    username: username,
                    comment: message,
                }}
            />
                     <View style={styles.stats}>
                        <View style={styles.box}>
                            <Text style={styles.bigNum}> 850 </Text>
                            <Text style={styles.label}> Participants </Text>
                        </View>

                        <View style={styles.box}>
                            <Text style={styles.bigNum}> 1,124 </Text>
                            <Text style={styles.label}> Ideas </Text>
                        </View>

                    </View>
                    </View>
            <FlatList
                data={fanResults}
                renderItem={makeGroupCard}
                keyExtractor={(item, index) => index.toString()}
        />
                    <ActionButton text="CREATE ROOM" onPress={() => {navigation.navigate("CreateRoom");}} context={null}/>
        </SafeAreaView>
    );
}


// uncomment ugly background colors to make it clear where the flexboxes for the views are
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        height: '100%',
    },
    stats: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        marginTop: 12,
        marginBottom: 12,
    },
    box: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    bigNum: {
        fontSize: 35,
    },
    sectionText: {
        width: Dimensions.get('window').width * .9,
        fontFamily: 'Lato_700Bold',
        fontSize: 24,
        color: 'black',
        marginBottom: 10
    },
    item: {
      flexDirection: 'row',
      justifyContent: 'center'
    },
    header: {
      marginTop: 8,
      marginBottom: 8,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
    },
    footer: {
        margin: 10
    }
  });
