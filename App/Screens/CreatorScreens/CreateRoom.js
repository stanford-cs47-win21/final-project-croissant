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
import {CommentCard} from "../../Components/CommentCard";
import {ActionButton} from '../../Components/ActionButton';



export default function CreateRoom({navigation}) {
    // const {username, status, message, timeLeft} = route.params.cardInfo;

    return(
        <SafeAreaView style={styles.container}> 
            
            {/* Modify this into the common component */}
            <Text> RECOMMENDED INVITEES </Text> 

            <CommentCard 
                cardInfo={{
                    username: "rachel_f",
                    comment: "I'm looking to do more vegan recipes! Would love to hear about your personal favorites.",
                }}
            />

            {/* Button to create room */}
            <View style={keyStyles.centeredView}> 
                <ActionButton text="Schedule Room" 
                    onPress={() => {navigation.navigate("CreatorHome");}} context={null}/>
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
  
