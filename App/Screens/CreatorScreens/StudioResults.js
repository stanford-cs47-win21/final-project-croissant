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


export default function StudioResults({route, navigation}) {
    const {username, status, message, timeLeft} = route.params.cardInfo;

    // hardcoding the data for the sectionlist
    const fanResults = [
        {
            title: "Fan Favorites",
            data: [
                {
                    username: 'john_winston',
                    status: null,
                    message: 'Suggest oil-based recipes',
                    timeLeft: null,
                },
                {
                    username: 'george_h',
                    status: null,
                    message: 'Egg-based recipes',
                    timeLeft: null,
                },
                {
                    username: 'paul_walrus',
                    status: null,
                    message: 'Milk chocolate alternatives pleaseee',
                    timeLeft: null,
                },
            ]
        },
        {
            title: "Fan Controversial",
            data: [
                {
                    username: 'john_winston',
                    status: null,
                    message: 'wooo',
                    timeLeft: null,
                },
                {
                    username: 'george_h',
                    status: null,
                    message: 'hi',
                    timeLeft: null,
                },
                {
                    username: 'paul_walrus',
                    status: null,
                    message: 'lol',
                    timeLeft: null,
                },
            ]

        },
        {
            title: "Most Representative",
            data: [
                {
                    username: 'john_winston',
                    status: null,
                    message: 'yes',
                    timeLeft: null,
                },
                {
                    username: 'george_h',
                    status: null,
                    message: 'no',
                    timeLeft: null,
                },
                {
                    username: 'paul_walrus',
                    status: null,
                    message: 'ofcccc',
                    timeLeft: null,
                },
            ]

        },
    ]

    return(
        <SafeAreaView style={styles.container}> 
            
            <Title text="Studio Results" />

            <StudioCard 
                cardInfo={{
                    username: username,
                    status: null,
                    message: message,
                    timeLeft: null,
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


            {/* TODO: SectionList, has some bugs to fix -- we could just hardcode each item if we want*/}
            <SectionList
                sections={fanResults}
                stickySectionHeadersEnabled={false}
                keyExtractor={(item, index) => index.toString()}

                renderSectionHeader={({section}) => {
                    // Weird bug where <Title text={section.title} /> doesn't work because the text is wrapped in a view
                    return <Text style={keyStyles.titleText1}> {section.title} </Text>
                }}

                renderItem={({item}) => {
                    return <StudioCard cardInfo={item} staticCard={true}/>
                }}
            />


            {/* Button to create room */}
            <View style={keyStyles.centeredView}> 
                <TouchableOpacity
                    style={keyStyles.button1} 
                    onPress = { () => navigation.navigate('CreateRoom')} // TODO: pass data
                >
                    <Text style={keyStyles.button1text}> CREATE ROOM </Text>
                </TouchableOpacity>
            </View>

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
        margin: 8,
        width: '100%',
        justifyContent: 'space-evenly',
    },
    box: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    bigNum: {
        fontSize: 35,
    },
    label: {

    },
  });
  