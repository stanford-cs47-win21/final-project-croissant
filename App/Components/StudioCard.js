import React, {useState} from 'react';
import { StyleSheet, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    View,
    Image,
    Dimensions,
    Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {PicAndUsername} from "./PicAndUsername";
import { LiveSymbol } from "./LiveSymbol";
import { Title } from "./Title";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { CloseButton } from "./CloseButton";
import { ActionButton } from "./ActionButton";




import {Overlay} from 'react-native-elements';
import keyStyles from '../Styles/keyStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



export function StudioCard({cardInfo, staticCard = false, fan = false}) {
    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => {
        setVisible(!visible);
    };

    const [fanOverlayVisible, setFanOverlayVisible] = useState(false);
    const toggleFanOverlay = () => {
        setFanOverlayVisible(!fanOverlayVisible);
    };

    const [deleteConfirmVisible, setDeleteConfirmVisible] = useState(false);
    const toggleDeleteConfirm = () => {
        setDeleteConfirmVisible(!deleteConfirmVisible);
    };

    const {username, status, message, timeLeft} = cardInfo; 

    const determineStatus = () => {
        // console.log("ARE WE RE-RENDERING STATUS OF RANKED ?? " , status);
        if (status === "BRAINSTORMING") {
            return styles.badgeBrainstorm;
        } else if (status === "RANKING") {
            return styles.badgeRanking;
        } else if (status === "VIEW RESULTS"){
            return styles.badgeResults;
        } else if (status === "RANKED" | status === "BRAINSTORMED"){    // else: ranked already, we want plain rendered background style for it
            return styles.badgeCompletedPhase;
        }
    }

    // what happens when  you click the studiocard, based on its status
    const determineFlow = () => {
        // Wrap in outer if based on if creator or fan / pass as param
        if (fan) {
            if (status === "LIVE") {
                navigation.navigate('LiveRoom', {cardInfo, fan: true});
            } else if (status === "VIEW RESULTS") {
                navigation.navigate('NotSelected', {cardInfo});
            } else if (status === "RANKING") {
                navigation.navigate('FanRanking', {cardInfo});
            } else if (status === "BRAINSTORMING") {
                navigation.navigate('Brainstorm', {cardInfo});
            } else if (status === "RANKED" | status === "BRAINSTORMED"){
                // show a modal
                toggleFanOverlay();
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

      const createTwoButtonAlert = () =>
    Alert.alert(
      "Are you sure you want to delete your studio?",
      "This step is not reversible.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Delete", onPress: () => setVisible(false) }
      ]
    );

    return(
        <TouchableOpacity 
            style={[styles.outer, keyStyles.shadowProps]}
            onPress = {determineFlow}
        > 
            <View style={styles.topRow}> 
                <PicAndUsername userInfo={username} photoPerson="John"/>  
                <View style={determineStatus()}> 
                    {status != "LIVE" && <Text style={styles.badgeText}> {status}</Text>}
                </View>
            </View>

            <View style={styles.middleBox}> 
                <Text style={styles.messageText}>{message}</Text> 
            </View>

                {(status != "LIVE" && !fan && status != "VIEW RESULTS") && 
                    <View style={[styles.bottomBox, {justifyContent: 'space-between'}]}>
                    <Text style={styles.timeText}> {timeLeft} </Text>
                    <TouchableOpacity onPress={toggleOverlay}>
                        <MaterialCommunityIcons name="dots-horizontal" size={24} color="#645f5c"/>
                    </TouchableOpacity>
                    </View>
                }

                {(status != "LIVE" && (fan || status == "VIEW RESULTS")) && 
                    <View style={[styles.bottomBox, {justifyContent: 'flex-start'}]}>
                    <Text style={styles.timeText}> {timeLeft} </Text>
                    </View>
                }
                    {status == "LIVE" && 
                            <View style={[styles.bottomBox, {justifyContent: 'flex-end'}]}>
                            <LiveSymbol />
                            </View>
                    }

                    {/* CREATOR OVERLAY This can be placed anywhere i guess */}
                    <Overlay 
                        isVisible={deleteConfirmVisible} 
                        onBackdropPress={null}
                        animationType={'fade'}
                        overlayStyle={styles.overlay}
                    >


                    </Overlay>

                    {/* CREATOR OVERLAY This can be placed anywhere i guess */}
                    <Overlay 
                        isVisible={visible} 
                        onBackdropPress={toggleOverlay}
                        animationType={'fade'}
                        overlayStyle={styles.overlay}
                    >
                    
                        {!deleteConfirmVisible ?
                        <View style={{alignItems: 'center'}}>
                        <View style={styles.overlayRow}>
                            <Text style={styles.alertText}> Studio in Progress </Text>
                            <MaterialCommunityIcons name="progress-clock" size={36} color="white"/>
                        </View>

                        <View style={[styles.overlayTextContainer, keyStyles.shadowProps]}>    
                            <Text style={[styles.messageText, {marginBottom: 8}]}>Your fans still have time to {status==='RANKING' ? 'rank' : 'brainstorm'} ideas. We'll let you know when the results are ready to view! </Text>

                                <Text style={[styles.messageText, {marginBottom: 8}]}>However, if you want to delete the studio, click the button below. </Text>
                        </View>
                            <ActionButton text="delete studio" onPress={toggleDeleteConfirm} style={keyStyles.shadowProps} grayButton={true}/>
                            <ActionButton text="continue studio" onPress={toggleOverlay} style={keyStyles.shadowProps}/>
                            </View> :
                            <View style={{alignItems: 'center'}}>
                            <View style={styles.overlayRow}>
                                <Text style={styles.alertText}> Are you sure you want to permanently delete the studio? </Text>
                            </View>
                                <ActionButton text="Yes" onPress={() => {toggleOverlay; toggleDeleteConfirm}}/>
                            <ActionButton text="No " onPress={toggleDeleteConfirm} grayButton={true}/>
                            </View>}
                    </Overlay>
                    {/* FAN OVERLAY */}
                    <Overlay 
                        isVisible={fanOverlayVisible} 
                        onBackdropPress={toggleFanOverlay}
                        animationType={'fade'}
                        overlayStyle={styles.overlay}
                    >

                        <View style={styles.overlayRow}>
                            <Text style={styles.alertText}> {status==='RANKED' ? 'Rank' : 'Brainstorm'}ing Completed </Text>
                            <MaterialCommunityIcons name="check" size={36} color="white" />
                        </View>

                        <View style={[styles.overlayTextContainer, keyStyles.shadowProps]}>    
                            <Text style={styles.messageText}> You have already {status==='RANKED' ? 'rank' : 'brainstorm'}ed ideas for this studio. We'll let you know when the 
                            other fans are done! </Text>
                        </View>
                        <ActionButton text="ok" onPress={toggleFanOverlay} />
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
    badgeCompletedPhase: {
        backgroundColor: "grey",
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
        color: "#645f5c",
        textTransform: 'uppercase'
    },
    messageText: {
        fontSize: keyStyles.BODY_TEXT_SIZE,
        lineHeight: keyStyles.BODY_TEXT_SIZE * keyStyles.LINE_HEIGHT_MULT
    },
    
    overlayRow: {
        width: '90%',
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    alertText: {
        fontSize: 24,
        fontFamily: 'Lato_700Bold',
        color: 'white',
    },
    overlay: {
        width: '90%', 
        alignItems: 'center', 
        borderRadius: 20, 
        backgroundColor: keyStyles.SALMON_COLOR,
    },
    overlayTextContainer:{ 
        width: '90%',
        justifyContent: 'center', 
        backgroundColor: 'white',
        borderRadius: 20, 
        alignContent: 'center',
        padding: 15,
        marginTop: 20
    },
    closeButtonRowContainer: {
        width: '100%'
    },
    closeButton: {
        position: 'absolute',
        alignSelf: 'flex-end',
        padding: 10
    },
    startButton: {
        position: 'absolute',
        alignSelf: 'flex-start',
        padding: 10
    }
  });
