import React, {Component, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Dimensions
} from 'react-native';

import keyStyles from '../Styles/keyStyles';

const header = 'Welcome to Croissant!';

const content = 'We\'re excited you\'re here.\n\nCroissant allows creators to hold \
digital studios for focused, productive collaboration with their fans.\n\n\
Here\'s an overview of how it works.';

export default function Welcome({navigation}) {

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
      <Text style={styles.headerText}>{header}</Text>

      <Text style={styles.bodyText}>{content}</Text>
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity
                    style={keyStyles.button1} 
                    onPress = { () => {navigation.navigate('CreatorOnboarding')}}
                >
                    <Text style={keyStyles.button1text}> GET STARTED </Text>
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
    textContainer: {
      marginTop: 50,
      //width: Dimensions.get('window').width * .9,
      margin: 30,
    },
    buttonContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      flexDirection: 'row',
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
