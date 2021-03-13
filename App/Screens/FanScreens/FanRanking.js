import React, {useState, useEffect} from 'react';
import { StyleSheet, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    View,
    Image
} from 'react-native';

import keyStyles from '../../Styles/keyStyles';
import {Title} from "../../Components/Title";
import {StudioCard} from "../../Components/StudioCard";
import {CommentCard} from "../../Components/CommentCard";

export default function FanRanking({route, navigation, ...props}) {
    const {username, status, message, timeLeft} = route.params.cardInfo;

    return(
        <SafeAreaView style={styles.container}> 
            <View style={styles.topCard}> 
                <Title text="Rank Ideas" />
                <CommentCard 
                    cardInfo={{
                        username: username,
                        comment: message,
                    }}
                />
            </View>

            <View style={styles.instruction}> 
                <Text style={{fontWeight: 'bold'}}> Drag and drop to rank fan suggestions</Text> 
            </View> 

            <View style={styles.rankingItems}>

            </View>

            <View style={styles.bottomButton}> 
                <TouchableOpacity
                    style={keyStyles.button1} 
                    onPress = {() => navigation.navigate('FanHome', {rankingStatus: 'RANKED'})} 
                >
                    <Text style={keyStyles.button1text}> Submit Ranking </Text>
                </TouchableOpacity>
            </View> 


        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    topCard: {
        height: '40%',
        justifyContent: 'center',
    },
    instruction: {
        justifyContent: 'flex-start', 
        width: '90%', 
        height: '10%'
    },
    rankingItems: {
        height: '40%',
    },
    bottomButton: {
        height: '10%',
    }
  });
  