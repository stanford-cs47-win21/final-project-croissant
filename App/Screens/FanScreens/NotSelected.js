import React, {useState, useEffect} from 'react';
import { StyleSheet, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    View,
    Image,
    TextInput,
    Keyboard
} from 'react-native';

import keyStyles from '../../Styles/keyStyles';
import {Title} from "../../Components/Title";
import {ActionButton} from "../../Components/ActionButton";
import {CommentCard} from "../../Components/CommentCard";
import {SalmonBadge} from "../../Components/SalmonBadge";

let BODY_TEXT_SIZE = 16;

export default function NotSelected({route, navigation, ...props}) {
    const [prompt, setPrompt] = useState("");
    const {username, status, message, timeLeft} = route.params.cardInfo;

    return(
        <SafeAreaView style={styles.container}> 
            <Title text="Thanks for contributing!" />
            <View style={styles.bodyTextContainer}> 
                <Text style={styles.bodyText}>rachel_f appreciates your feedback. Check out how other fans rated your idea: </Text>
            </View>
            
            <CommentCard 
                cardInfo={{
                    username: username,
                    comment: "I like blueberries. I also like strawberries",
                }}/>
            <SalmonBadge leftText="Percentile" rightText="62nd"/> 
            <SalmonBadge leftText="Total views" rightText="42"/> 
            <SalmonBadge leftText="Average ranking" rightText="2.4"/> 
            
            <ActionButton text={"SEE LEADERBOARD"} onPress = {() => {navigation.navigate('Leaderboard')}}/>
            


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
  
