import React from 'react';
import { StyleSheet, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    View,
    Image,
    Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ICON_SIZE = 24;
const FONT_SIZE = 16;

export function UpcomingStudio({alertInfo}) {

    const {message, time, date} = alertInfo; 
    return(
        <View style={styles.outer}> 
            <Text style={styles.reminderText}>{message}</Text> 
            <View style={styles.bottomBox}>
                <View style={styles.iconTextContainer}>
                    <Image 
                        source={require("../Images/Clock.png")}
                        style={styles.icon}
                    />
                    <Text style={styles.dateTimeText}>{time}</Text>
                </View>

                <View style={styles.iconTextContainer}>
                    <Image 
                        source={require("../Images/CalendarBlank.png")}
                        style={styles.icon}
                    />
                    <Text style={styles.dateTimeText}>{date}</Text>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    outer: {
        width: Dimensions.get('window').width * .9,
        backgroundColor: '#FFF8E0',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 20,
        margin: 8,
        padding: 15
    },
    reminderText: {
        fontSize: FONT_SIZE,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    bottomBox: {
        flexDirection: 'row',
        width: '90%',
        height: 30,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    iconTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    icon: {
        resizeMode: 'contain',
        width: ICON_SIZE
    },
    dateTimeText: {
        fontSize: FONT_SIZE,
        textTransform: 'uppercase',
        padding: 5
    },
  });
