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
import {FollowerItem} from '../../Components/FollowerItem';

let BODY_TEXT_SIZE = 16;

export default function FollowingScreen({route, navigation, ...props}) {
    // temp, modify after
    const creatorList = [
        {
            username: 'rachel_f', 
            genre: 'BAKING',
        },
    ];

    return(
        <SafeAreaView style={styles.container}> 
            <Title text="Following" />
                    <FlatList 
                        data={creatorList}
                        renderItem = {({index, item}) => {
                            return (
                                <FollowerItem
                                    username={item.username}
                                    genre={item.genre} 
                                    setFollowedRachel={true}
                                />
                            );
                        }}
                        keyExtractor = { (item, index) => index.toString()}
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
  
