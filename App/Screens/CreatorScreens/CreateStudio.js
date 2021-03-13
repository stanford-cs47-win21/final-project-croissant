import React, {useState} from 'react';
import { StyleSheet, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    View,
    Image,
    TextInput,
    Keyboard,
    // Picker
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import keyStyles from '../../Styles/keyStyles';
import {Title} from '../../Components/Title';
import {ActionButton} from '../../Components/ActionButton';

let BODY_TEXT_SIZE = 16;
let LINE_HEIGHT_MULT = 1.5; 

// TODO: Weird serializable warning because you can't pass callback functions in the route params lmao
export default function CreateStudio({navigation}) {
    const [prompt, setPrompt] = useState("");
    const [brainstormTimeDays, setBrainstormTimeDays] = useState('1 DAY');
    const [brainstormTimeHours, setBrainstormTimeHours] = useState('O HOURS');

    var daysItems = []
    for (var i = 0; i < 7; i++) {
        if (i !== 1) {
            daysItems.push({label: i.toString() + ' days', value: i.toString() + ' DAYS'})
        } else {
            daysItems.push({label: i.toString() + ' day', value: i.toString() + ' DAY'})
        }
    }

    var hoursItems = []
    for (var i = 0; i < 24; i++) {
        if (i !== 1) {
            hoursItems.push({label: i.toString() + ' hours', value: i.toString() + ' HOURS'})
        } else {
            hoursItems.push({label: i.toString() + ' hour', value: i.toString() + ' HOUR'})
        }
    }

    var minutesItems = []
    for (var i = 0; i < 60; i++) {
        minutesItems.push({label: i.toString() + ' min', value: i.toString() + ' MIN'})
    }
 
    return(
        <SafeAreaView style={styles.container}>
  
            <View style={styles.headerContainer}>
            <Text style={styles.headerStyle}>Create a Studio</Text>
            </View>

            <View style={styles.promptView}> 
                <View style={styles.subtitle}> 
                    <Text style={styles.subtitleStyle}>Prompt</Text>
                </View>

                <View style={styles.promptInputView}> 
                    <TextInput
                        placeholder="Type a question, proposal or concept to share with your fans."
                        placeholderTextColor='grey'
                        style={styles.promptInputField}
                        onSubmitEditing={ () => Keyboard.dismiss()}
                        value={prompt}
                        onChangeText={ input => setPrompt(input)}
                        multiline={true}
                    /> 
                </View>
            </View>

            <View style={styles.timeLimit}> 
                <Text style={styles.subtitleStyle}>Brainstorming time limit</Text>
                <View style={styles.pickersContainer}>
                    <View style={styles.picker}>
                    <DropDownPicker 
                        items={daysItems}
                        defaultValue = '1 DAY'
                        containerStyle={{height: 40, width: '100%'}}
                        style={{backgroundColor: '#F3F1F1'}}
                        itemStyle={{justifyContent: 'flex-start'}}
                        arrowColor='black'
                        onChangeItem={item => {
                            setBrainstormTimeDays(item.value)
                        }}
                        dropDownStyle={{marginTop: 2}}
                    />
                    </View>

                    <View style={styles.picker}>
                    <DropDownPicker 
                        items={hoursItems}
                        defaultValue = '0 HOURS'
                        containerStyle={{height: 40, width: '100%'}}
                        style={{backgroundColor: '#F3F1F1'}}
                        itemStyle={{justifyContent: 'flex-start'}}
                        arrowColor='black'
                        onChangeItem={item => {
                            setBrainstormTimeHours(item.value)
                        }}
                        dropDownStyle={{marginTop: 2}}
                    />
                    </View>

                    <View style={styles.picker}>
                    <DropDownPicker 
                        items={minutesItems}
                        defaultValue = '0 MIN'
                        containerStyle={{height: 40, width: '100%'}}
                        style={{backgroundColor: '#F3F1F1'}}
                        itemStyle={{justifyContent: 'flex-start'}}
                        arrowColor='black'
                        //onChangeItem={item => {
                        //    setBrainstormTime(item.value)
                        //}}
                        dropDownStyle={{marginTop: 2}}
                    />
                    </View>

                </View>   
            </View>

            <View style={styles.timeLimitLower}> 
                <Text style={styles.subtitleStyle}>Ranking time limit</Text>
                <View style={styles.pickersContainer}>
                    <View style={styles.picker}>
                    <DropDownPicker 
                        items={daysItems}
                        defaultValue = '1 DAY'
                        containerStyle={{height: 40, width: '100%'}}
                        style={{backgroundColor: '#F3F1F1'}}
                        itemStyle={{justifyContent: 'flex-start'}}
                        arrowColor='black'
                        //onChangeItem={item => {
                        //    setBrainstormTime(item.value)
                        //}}
                        dropDownStyle={{marginTop: 2}}
                    />
                    </View>

                    <View style={styles.picker}>
                    <DropDownPicker 
                        items={hoursItems}
                        defaultValue = '0 HOURS'
                        containerStyle={{height: 40, width: '100%'}}
                        style={{backgroundColor: '#F3F1F1'}}
                        itemStyle={{justifyContent: 'flex-start'}}
                        arrowColor='black'
                        //onChangeItem={item => {
                        //    setBrainstormTime(item.value)
                        //}}
                        dropDownStyle={{marginTop: 2}}
                    />
                    </View>

                    <View style={styles.picker}>
                    <DropDownPicker 
                        items={minutesItems}
                        defaultValue = '0 MIN'
                        containerStyle={{height: 40, width: '100%'}}
                        style={{backgroundColor: '#F3F1F1'}}
                        itemStyle={{justifyContent: 'flex-start'}}
                        arrowColor='black'
                        //onChangeItem={item => {
                        //    setBrainstormTime(item.value)
                        //}}
                        dropDownStyle={{marginTop: 2}}
                    />
                    </View>

                </View>   
            </View>

                {/*
            <View style={styles.buttonContainer}> 
                <TouchableOpacity
                    style={keyStyles.button1} 
                    onPress = { () => {
                        navigation.navigate('CreatorHome', {newStudio: {
                            prompt: prompt,
                            brainstormTimeDays: brainstormTimeDays,
                            brainstormTimeHours: brainstormTimeHours
                        }})
                    }}
                >
                    <Text style={keyStyles.button1text}> START </Text>
                </TouchableOpacity>
            </View> 
            */}
            <ActionButton buttonInfo={"START", "CreatorHome", {newStudio: {
                            prompt: prompt,
                            brainstormTimeDays: brainstormTimeDays,
                            brainstormTimeHours: brainstormTimeHours
            }}}/>
        
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
        margin: 20,
    },
    timeLimitLower: {
        height: '10%',
        // backgroundColor: 'grey',
        width: '90%',
        margin: 20,
        zIndex: -5
    },
    picker: {
        width: '32%'
    },
    pickersContainer: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerContainer: {
        width: '90%',
        margin: 10
    },
    headerStyle: {
        fontFamily: 'Lato_700Bold',
        fontSize: 24,
    },

    // Prompt View styles
    subtitle: {
        height: '20%',
        justifyContent: 'center'
    },
    subtitleStyle: {
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
        fontSize: BODY_TEXT_SIZE,
        lineHeight: BODY_TEXT_SIZE * LINE_HEIGHT_MULT
    },



  });
  
