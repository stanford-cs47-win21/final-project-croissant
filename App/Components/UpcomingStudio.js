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
import keyStyles from '../Styles/keyStyles';

import { Feather } from '@expo/vector-icons';

const ICON_SIZE = 24;
const FONT_SIZE = 16;

// accepted parameter tells us if it is rendering something for the fan side
export function UpcomingStudio({alertInfo, accepted=false}) {

    const {numParticipants, time, date} = alertInfo; 
    return(
        <View style={[styles.outer, keyStyles.shadowProps]}> 
            {accepted && 
                <View style={styles.checkBoxRow}> 
                    <View style={styles.checkItem} > 
                        <View style={styles.fullCheckBox} 
                        >
                            <Feather name="check" size={12} color="white" /> 
                        </View>
                        <Text> ACCEPTED </Text>
                    </View>
                </View>
            }
            <Text style={styles.reminderText}>{accepted===true ? 'Accepted invite from rachel_f' : 'Upcoming room with ' + numParticipants + ' fans'} </Text> 
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
        fontFamily: 'Lato_700Bold',
        paddingBottom: 10
    },
    bottomBox: {
        flexDirection: 'row',
        width: '90%',
        height: 30,
        justifyContent: 'space-evenly',
        alignItems: 'center',
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
    // check box
    checkBoxRow: {
        flexDirection: 'row', 
        // height: '17%', 
        width: '100%', 
        justifyContent: 'flex-start',
        // backgroundColor: 'red', 
        marginBottom: 6,
    },
    checkItem: {
        flexDirection: 'row', 
        width: '100%', 
        height: '100%', 
        // justifyContent: 'flex-start',
        alignItems: 'center'
    },
    fullCheckBox: {
        height: 15,
        width: 15,
        borderRadius: 15/2,
        backgroundColor: '#08BD1A',
        marginRight: '1%',
        justifyContent: 'center',
        alignItems: 'center'
    },
  });
