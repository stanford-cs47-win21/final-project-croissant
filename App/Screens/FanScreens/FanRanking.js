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

export default function FanRanking({route, navigation, ...props}) {
    const {username, status, message, timeLeft} = route.params.cardInfo;

    return(
        <SafeAreaView style={styles.container}> 
            <View style={styles.topCard}> 
                <Title text="Rank Ideas" />
                <StudioCard 
                    cardInfo={{
                        username: username,
                        status: null,
                        message: message,
                        timeLeft: null,
                    }}
                />
            </View>

            <View style={{justifyContent: 'flex-start', width: '90%',}}> 
                <Text style={{fontWeight: 'bold'}}> Drag and drop to rank fan suggestions</Text> 
            </View> 

            <View style={styles.bottomButton}> 
                <TouchableOpacity
                    style={keyStyles.button1} 
                    // onPress = {() => navigation.goBack()} // TODO: error for some reason :// sad
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
    bottomButton: {
        height: '20%',
    }
  });
  