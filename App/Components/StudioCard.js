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
import {PicAndUsername} from "./PicAndUsername";

export function StudioCard({cardInfo, staticCard = false, fan = false}) {

    const {username, status, message, timeLeft} = cardInfo; 

    const determineStatus = () => {
        if (status === "BRAINSTORMING") {
            return styles.badgeBrainstorm;
        } else if (status === "RANKING") {
            return styles.badgeRanking;
        } else if (status === "VIEW RESULTS"){
            return styles.badgeResults;
        }
        
        // else: if no status is passed in, we don't want to render any background style for it
    }

    // what happens when  you click the studiocard, based on its status
    const determineFlow = () => {
        // Wrap in outer if based on if creator or fan / pass as param
        if (status === "LIVE") {
            navigation.navigate('LiveRoom', {cardInfo});
        } else if (status === "VIEW RESULTS") {
            navigation.navigate('StudioResults', {cardInfo});
        }
    }

    const navigation = useNavigation();

    if (staticCard === true) {
        return (
            <View style={styles.outerStatic}> 
                <View style={styles.topRow}> 
                    <Text > {username} </Text> 
                </View>

                <View style={styles.middleBox}> 
                    <Text > {message} </Text> 
                </View>
            </View>
        );
    } else { 
        return(
            <TouchableOpacity 
                style={styles.outer}
                onPress = {determineFlow}
            > 

                <View style={styles.topRow}> 
                    <PicAndUsername userInfo={username} />  
                    <View style={determineStatus()}> 
                        <Text style={status === "LIVE" ? {color: 'red'} : {color: 'white'}}> {status}</Text>
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
}


const styles = StyleSheet.create({
    outer: {
        width: Dimensions.get('window').width * .9,
        height: Dimensions.get('window').height * .16, 
        backgroundColor: '#FFF8E0',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 20,
        margin: 8,
    },
    outerStatic: {
        width: Dimensions.get('window').width * .9,
        height: Dimensions.get('window').height * .16, 
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 20,
        margin: 8,
    },
    topRow: {
        flexDirection: 'row',
        alignContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: '3%',
        paddingRight: '5%'
    },
    badgeBrainstorm: {
        backgroundColor: '#FAC738',
        borderRadius: 50,
        padding: 3, 
        margin: 1,
        width: 130,
        alignItems: 'center'
    },
    badgeRanking: {
        backgroundColor: "#F9900E",
        borderRadius: 50,
        padding: 3, 
        margin: 1,
        width: 130,
        alignItems: 'center'
    },
    badgeResults: {
        backgroundColor: "#B9480B",
        borderRadius: 50,
        padding: 3, 
        margin: 1,
        width: 130,
        alignItems: 'center'
    },
    badgeLive: {

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
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'flex-start',
    },
    timeText: {
        fontSize: 12,
        color: "#645F5C",
    },
    
  });
