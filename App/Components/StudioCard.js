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
import { LiveSymbol } from "./LiveSymbol";


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
        if (fan) {
            if (status === "LIVE") {
                navigation.navigate('LiveRoom', {cardInfo});
            } else if (status === "VIEW RESULTS") {
                navigation.navigate('StudioResults', {cardInfo});
            } else if (status === "RANKING") {
                navigation.navigate('FanRanking', {cardInfo});
            }
        } else {
            if (status === "LIVE") {
                navigation.navigate('LiveRoom', {cardInfo});
            } else if (status === "VIEW RESULTS") {
                navigation.navigate('StudioResults', {cardInfo});
            }
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
                    <Text >{message}</Text> 
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
                        {status != "LIVE" && <Text style={styles.badgeText}> {status}</Text>}
                    </View>
                </View>

                <View style={styles.middleBox}> 
                    <Text style={styles.messageText}>{message}</Text> 
                </View>

                    {status != "LIVE" && 
                        <View style={[styles.bottomBox, {justifyContent: 'flex-start'}]}>
                        <Text style={styles.timeText}> {timeLeft} </Text>
                        </View>
                    }
                    {status == "LIVE" && 
                            <View style={[styles.bottomBox, {justifyContent: 'flex-end'}]}>
                            <LiveSymbol />
                            </View>
                    }
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    outer: {
        width: Dimensions.get('window').width * .9,
        backgroundColor: '#FFF8E0',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 20,
        margin: 8,
    },
    outerStatic: {
        width: Dimensions.get('window').width * .9,
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
        paddingLeft: '2%',
        paddingRight: '3.15%',
        height: 35
    },
    badgeBrainstorm: {
        backgroundColor: '#FAC738',
        borderRadius: 50,
        padding: 3, 
        width: 130,
        alignItems: 'center'
    },
    badgeRanking: {
        backgroundColor: "#F9900E",
        borderRadius: 50,
        padding: 3, 
        width: 130,
        alignItems: 'center'
    },
    badgeResults: {
        backgroundColor: "#B9480B",
        borderRadius: 50,
        padding: 3, 
        width: 130,
        alignItems: 'center'
    },
    badgeLive: {

    },
    liveText: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 11
    },
    badgeText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
        textTransform: 'uppercase'
    },
    middleBox: {
        backgroundColor: '#FFFEFA',
        width: '93.7%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10
    },
    bottomBox: {
        flexDirection: 'row',
        width: '93.7%',
        height: 30,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    timeText: {
        fontSize: 12,
        color: "#645F5C",
        textTransform: 'uppercase'
    },
    messageText: {
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10,
    },
    
  });
