import React, {useState, useEffect} from 'react';
import { StyleSheet, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    View,
    Image,
    TextInput,
    Keyboard,
    FlatList
} from 'react-native';

import keyStyles from '../../Styles/keyStyles';
import {Title} from "../../Components/Title";
import {ActionButton} from "../../Components/ActionButton";
import {CommentCard} from "../../Components/CommentCard";

let BODY_TEXT_SIZE = 16;

export default function YourContributions({route, navigation, ...props}) {
    let data = [
        {
            username: route.params.username,
            comment: 'yes',
        },
        {
            username: route.params.username,
            comment: 'no',
        },
        {
            username: route.params.username,
            comment: 'ofcccc',
        },
        {
            username: route.params.username,
            comment: 'ofccc',
        },
        {
            username: route.params.username,
            comment: 'ofc',
        },
    ]

    let renderItem = ({item: cardInfo}) => (
        <CommentCard cardInfo={cardInfo} commentColor={true}/>
    );
    return(
        <SafeAreaView style={styles.container}> 
            <Title text="Your Contributions" />
        <FlatList data={data}
            renderItem = {renderItem}
            keyExtractor = {(item, index) => index.toString()}
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
  });
  
