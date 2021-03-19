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

let BODY_TEXT_SIZE = 16;

export default function Brainstorm({route, navigation, ...props}) {
    const [prompt, setPrompt] = useState("");
    const {username, status, message, timeLeft} = route.params.cardInfo;

    return(
        <SafeAreaView style={styles.container}> 
            <Title text="Provide Feedback" />
            <View style={styles.topCard}> 
                <CommentCard 
                    cardInfo={{
                        username: username,
                        comment: message,
                    }}
                />
            </View>

            {/* styles.subtitle for the view instead? */}
            <View style={styles.instruction}> 
                <Text style={styles.subtitleStyle}> Your response </Text> 
            </View> 

            {/* Where they type a response */}
            <View style={styles.textInputView}>
                <TextInput
                    placeholder="Type a response or feedback to @rachel_f's question here."
                    placeholderTextColor='grey'
                    style={styles.promptInputField}
                    onSubmitEditing={ () => Keyboard.dismiss()}
                    value={prompt}
                    onChangeText={ input => setPrompt(input)}
                    multiline={true}
                    blurOnSubmit={true}
                /> 
            </View>

            {/* TODO: Convert to Action Button (make sure button inside the view though) */}
            <View style={styles.bottomButton}> 
                        <ActionButton text={"SUBMIT"} 
                            onPress = {() => {navigation.navigate('FanHome', {brainstormingStatus: 'BRAINSTORMED'})}}
                            context={{brainstormingStatus: 'BRAINSTORMED'}}
                        />
            </View> 
            


        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    topCard: {
        marginBottom: 10,
    },
    instruction: {
        justifyContent: 'flex-start', 
        width: '90%', 
        marginBottom: 10,
    },
    textInputView: {
        height: '40%',
        width: '90%',
        justifyContent: 'center',
    },
    bottomButton: {
        height: '15%',
        justifyContent: 'center',
    },
    // PROMPT INPUT. ToDO: consolidate with createstudio
    subtitle: {
        height: '20%',
        width: '90%',
        justifyContent: 'center'
    },
    subtitleStyle: {
        fontSize: BODY_TEXT_SIZE,
        fontFamily: 'Lato_700Bold'    
    },
    promptInputView: {
        height: '80%',
    },
    promptInputField: {
        backgroundColor: '#F3F1F1',
        height: '100%',
        padding: 15,
        borderRadius: 10,
        fontSize: keyStyles.BODY_TEXT_SIZE,
        lineHeight: keyStyles.BODY_TEXT_SIZE * keyStyles.LINE_HEIGHT_MULT
    },
  });
  
