import React, {useState} from 'react';
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


export default function StudioResults({route, navigation}) {
    const {username, status, message, timeLeft} = route.params.cardInfo;

    return(
        <SafeAreaView style={styles.container}> 
            
            <Title text="Studio Results" />

            <StudioCard 
                cardInfo={{
                    username: "rachel_f",
                    status: null,
                    message: "I'm looking to do more vegan recipes! Would love to hear about your personal favorites.",
                    timeLeft: null,
                }}
            />

            <Title text="Fan Favorites" />


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
  });
  