import React, {useState} from 'react';
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
import { Title } from "./Title";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 




import {Overlay} from 'react-native-elements';
import keyStyles from '../Styles/keyStyles';



export function StudioCard({cardInfo, staticCard = false, fan = false}) {
    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => {
        setVisible(!visible);
    };

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
            } else if (status === "RANKING" | status === 'BRAINSTORMING') {
                toggleOverlay();
            }
        }
    }

    const navigation = useNavigation();

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

                    {/* This can be placed anywhere i guess */}
                    <Overlay 
                        isVisible={visible} 
                        onBackdropPress={toggleOverlay}
                        animationType={'fade'}
                        overlayStyle={{height: '30%', width: '70%', justifyContent: 'center', alignItems: 'center'}}
                    >
                        <View style={{height: '40%', alignItems: 'center', justifyContent: 'center'}}> 
                            <Text style={keyStyles.titleText1}> Studio in Progress </Text>
                            {/* <AntDesign name="hourglass" size={24} color="black" /> */}
                            <MaterialCommunityIcons name="progress-clock" size={36} color="black" style={{marginTop: 10}}/>
                            {/* <Ionicons name="hourglass" size={24} color="black" /> */}
                        </View>

                        <View style={{ height: '30%', width: '90%', justifyContent: 'center'}}>    
                            <Text style={{textAlign: 'center'}}> Your fans still have time to {status==='RANKING' ? 'rank' : 'brainstorm'} ideas. We'll let you know when the results are ready to view! </Text>
                        </View>

                            <View style={{height: '30%'}}> 
                                <TouchableOpacity 
                                    style={keyStyles.button1}
                                    onPress={toggleOverlay}
                                > 
                                    <Text style={keyStyles.button1text}> OK </Text>
                                </TouchableOpacity>
                            </View> 
                    </Overlay>

            </TouchableOpacity>
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
    badgeText: {
        color: 'white',
        fontFamily: 'Lato_700Bold',
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
        fontSize: keyStyles.BODY_TEXT_SIZE,
        lineHeight: keyStyles.BODY_TEXT_SIZE * keyStyles.LINE_HEIGHT_MULT
    },
    
  });
