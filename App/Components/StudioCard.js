import React from 'react';
import { StyleSheet, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    View,
    Image,
    Dimensions
} from 'react-native';

export function StudioCard({cardInfo}) {

    const {username, status, message, timeLeft} = cardInfo; 
    // console.log("PRops ", props.cardInfo);

    return(
        <View style={styles.outer}> 

            <View style={styles.topRow}> 
                <Text > {username} </Text> 

                <View style={status === "Brainstorming" ? styles.badgeBrainstorm : styles.badgeRanking}> 
                    <Text> {status}</Text>
                </View>
            </View>

            <View style={styles.middleBox}> 
                <Text > {message} </Text> 
            </View>

            <View style={styles.timeBox}> 
                <Text style={styles.timeText}> {timeLeft} </Text> 
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    outer: {
        width: Dimensions.get('window').width * .8,
        // height: "100%",
        backgroundColor: '#FFF8E0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    topRow: {
        flexDirection: 'row',
        alignContent: 'space-between',
        alignItems: 'center',
    },
    badgeBrainstorm: {
        backgroundColor: '#FAC738',
        borderRadius: 50,
        padding: 3, 
        margin: 1,
    },
    badgeRanking: {
        backgroundColor: "#F9900E",
        borderRadius: 50,
        padding: 3, 
        margin: 1,
    },
    middleBox: {
        backgroundColor: '#FFFEFA',
        width: '90%',
        height: '60%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    timeBox: {
        justifyContent: "center",
        flexDirection: 'row',
        alignContent: "center"
    },
    timeText: {
        fontSize: 12,
        color: "#645F5C",
    }
  });