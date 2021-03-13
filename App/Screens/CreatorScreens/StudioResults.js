import React, {useState} from 'react';
import { StyleSheet,
    Text,
    SafeAreaView,
    TouchableOpacity,
    View,
    Image,
    ScrollView,
    SectionList
} from 'react-native';

import keyStyles from '../../Styles/keyStyles';
import {Title} from "../../Components/Title";
import {StudioCard} from "../../Components/StudioCard";
import {CommentCard} from "../../Components/CommentCard";
import {ActionButton} from '../../Components/ActionButton';

export default function StudioResults({route, navigation}) {
    const {username, status, message, timeLeft} = route.params.cardInfo;

    // hardcoding the data for the sectionlist
    const fanResults = [
        {
            title: "Fan Favorites",
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
            title: "Fan Controversial",
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
    ]

    return(
        <SafeAreaView style={styles.container}>


            {/* TODO: SectionList, has some bugs to fix -- we could just hardcode each item if we want*/}
            <SectionList
                sections={fanResults}
                stickySectionHeadersEnabled={false}
                directionalLockEnabled={true}
                keyExtractor={(item, index) => index.toString()}

                renderSectionHeader={({section}) => {
                    // Weird bug where <Title text={section.title} /> doesn't work because the text is wrapped in a view
                    return <Text style={styles.sectionText}> {section.title} </Text>
                }}

                ListHeaderComponent={
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
                            <Text style={styles.bigNum}> 1124 </Text>
                            <Text style={styles.label}> Ideas </Text>
                        </View>

                    </View>
                </View>
                }

                renderItem={({item}) => {
                  return (
                  <View style={styles.item}>
                     <CommentCard cardInfo={item}/>
                  </View>
                )
                }}

                  
                ListFooterComponent={
                    <View style={{alignItems: 'center', marginTop: 10}}>
                    <ActionButton text="CREATE ROOM" nextScreen="CreateRoom" context={null}
                        /> 
                            </View>
                }
            />

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
        fontWeight: 'bold',
        fontSize: 24,
        color: 'black',
        marginLeft: 8,
        marginTop: 8
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
