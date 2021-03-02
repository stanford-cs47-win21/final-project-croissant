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

export function StudioCard({cardInfo}) {

    const {username, status, message, timeLeft} = cardInfo; 

    const determineStatus = () => {
        if (status === "Brainstorming") {
            return styles.badgeBrainstorm;
        } else if (status === "Ranking") {
            return styles.badgeRanking;
        } else {
            return styles.badgeResults;
        }
    }

    const navigation = useNavigation();
    return(
        <TouchableOpacity 
            style={styles.outer}
            onPress = { () => {
                if (status === "Results") {
                    navigation.navigate('StudioResults', {cardInfo});
                }
            }}
        > 

            <View style={styles.topRow}> 
                
                <Text > {username} </Text> 

                <View style={determineStatus()}> 
                    <Text> {status}</Text>
                </View>
            </View>

            <View style={styles.middleBox}> 
                <Text > {message} </Text> 
            </View>

            <View style={styles.timeBox}> 
                <Text style={styles.timeText}> {timeLeft} </Text> 
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    outer: {
        width: Dimensions.get('window').width * .9,
        height: Dimensions.get('window').height * .16, 
        backgroundColor: '#FFF8E0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        margin: 8,
    },
    topRow: {
        flexDirection: 'row',
        alignContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
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
    badgeResults: {
        backgroundColor: "#B9480B",
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