import React, {Component, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Dimensions
} from 'react-native';

import StepIndicator from 'react-native-step-indicator';
import keyStyles from '../../Styles/keyStyles';
import {Header} from "../../Components/Header";

//const labels = ["Cart","Delivery Address","Order Summary","Payment Method","Track"];
const customStyles = {
  stepIndicatorSize: 35,
  currentStepIndicatorSize:40,
  separatorStrokeWidth: 4,
  currentStepStrokeWidth: 4,
  stepStrokeCurrentColor: '#FAC738',
  stepStrokeWidth: 4,
  stepStrokeFinishedColor: '#FAC738',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#FAC738',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#FAC738',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 16,
  currentStepIndicatorLabelFontSize: 16,
  stepIndicatorLabelCurrentColor: '#FAC738',
  stepIndicatorLabelFinishedColor: '#000000',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 16,
  currentStepLabelColor: '#fe7013'
};

const content = ['To get started, you’ll create a new studio.\n\nStudios are spaces where fans \
respond to a prompt that you pose. Ask a question, share your latest idea, or give your fans \
food for thought. Anything goes — get creative!', 

  'Once you’ve created your studio, fans have the opportunity to share their thoughts related to \
the prompt. After a set period of time, fans go through and rank the ideas.',

  'After the fans finish ranking, our algorithms show you the highest ranked ideas. We’ll also show \
you the most controversial ideas as well as the topics that appeared most frequently.\n\nOnce you’ve \
viewed the feedback, you can invite the fans who provided the most useful ideas to a scheduled chat.', 

  'Finally, chat directly with your invited fans over audio - other fans can listen in as well!\n\n\
Engaging, productive conversations with your fans — that’s what Croissant is all about. Welcome aboard.']

const stepHeaders = ['Step 1: Create a Studio', 
'Step 2: Fans Suggest and Rank Ideas', 
'Step 3: Review Feedback and Schedule Fan Chat ',
'Step 4: Chat with Fans']

export default function CreatorOnboarding({navigation}) {
  const [currentPage, setCurrentPage] = useState(0);

  const onPressBack = () => {
    if (currentPage !== 0) {
      setCurrentPage(currentPage - 1);
    } else {
      navigation.navigate('ChooseFlow')
    }
  }

  const onPressForward = () => {
    if (currentPage === 3) {
      navigation.navigate('CreatorHome');
    }
    else {
      setCurrentPage(currentPage + 1);
    }
  }

  return(
    <SafeAreaView style={styles.container}>
    <View style={styles.stepIndictorContainer}>
      <StepIndicator 
      stepCount={4}
      customStyles={customStyles}
      currentPosition={currentPage}
    />
    </View>
      
      <View style={styles.textContainer}>
      <Text style={styles.headerText}>{stepHeaders[currentPage]}</Text>

      <Text style={styles.bodyText}>{content[currentPage]}</Text>
      </View>

      <View style={styles.buttonContainer}>
      <TouchableOpacity
                    style={styles.backButton} 
                    onPress = {onPressBack}
                >
                    <Text style={styles.buttonText}> BACK </Text>
                </TouchableOpacity>

      <TouchableOpacity
                    style={styles.forwardButton} 
                    onPress = {onPressForward}
                >
                {currentPage === 3 ? <Text style={styles.buttonText}> FINISH </Text> :
                  <Text style={keyStyles.button1text}> NEXT </Text>}
                    
                </TouchableOpacity>
      </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff'
  },
    stepIndictorContainer: {
        marginTop: 50,
    },
    headerContainer: {
      marginTop: 50,
      margin: 20,
      //justifyContent: 'center',
      //alignItems: 'center',
    },
    textContainer: {
      marginTop: 20,
      //width: Dimensions.get('window').width * .9,
      margin: 30,
    },
    buttonContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      flexDirection: 'row',
      //width: Dimensions.get('window').width * .9,
    },
    backButton: {
      margin: 10,
        borderRadius: 20,
        backgroundColor: "#DBDBDB",
        width: 140,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    forwardButton: {
      margin: 10,
        borderRadius: 20,
        backgroundColor: "#FAC738",
        width: 140,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center'
    },
    headerText: {
      textAlign: 'center',
      margin: 8,
      color: 'black',
      fontSize: 24.
    },
    bodyText: {
      margin: 8,
      color: 'black',
      fontSize: 18,
    }
  });
