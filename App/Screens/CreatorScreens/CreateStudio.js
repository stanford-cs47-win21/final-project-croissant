import React, {useState} from 'react';
import { StyleSheet, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    View,
    Image,
    TextInput,
    Keyboard,
} from 'react-native';

import keyStyles from '../../Styles/keyStyles';


export default function CreateStudio({navigation}) {
    const [prompt, setPrompt] = useState("");

    return(
        <SafeAreaView style={styles.container}>
            <View style={keyStyles.titleView}> 
                <Text style={keyStyles.titleText1}> Create a Studio </Text>
            </View>

            <View style={styles.promptView}> 
                <View style={styles.subtitle}> 
                    <Text> Prompt </Text>
                </View>

                <View style={styles.promptInputView}> 
                    <TextInput
                        placeholder="Type a question, proposal or concept to share with your fans."
                        placeholderTextColor='grey'
                        style={styles.promptInputField}
                        onSubmitEditing={ () => Keyboard.dismiss()}
                        value={prompt}
                        onChangeText={ input => setPrompt(input)}
                    /> 
                </View>
            </View>

            <View style={styles.timeLimit}> 
                <Text> Brainstorming Time limit </Text>
            </View>

            <View style={styles.timeLimit}> 
                <Text> Brainstorming Time limit </Text>
            </View>

            <View style={keyStyles.centeredView}> 
                <TouchableOpacity
                    style={keyStyles.button1} 
                    onPress = { () => navigation.goBack()} // TODO: pass data
                >
                    <Text style={keyStyles.button1text}> START </Text>
                </TouchableOpacity>
            </View> 
        
        </SafeAreaView>
    );
}

// make sure view heights add up to < 100% per sublevel
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#fff',
        height: '100%',
    },
    promptView: {
        height: '30%',
        width: '90%',
        // backgroundColor: 'yellow',
    },
    timeLimit: {
        height: '10%',
        // backgroundColor: 'grey',
        width: '90%',
    },
    
    // Prompt View styles
    subtitle: {
        height: '20%',
        justifyContent: 'center'
    },
    promptInputView: {
        height: '80%',
    },
    promptInputField: {
        backgroundColor: '#F3F1F1',
        height: '100%',
    },



  });
  