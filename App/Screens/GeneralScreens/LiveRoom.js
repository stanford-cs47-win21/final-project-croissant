import React, {useState} from 'react';
import { StyleSheet, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    View,
    Image,
    Dimensions
} from 'react-native';

import keyStyles from '../../Styles/keyStyles';
import {Title} from "../../Components/Title";
import {CommentCard} from "../../Components/CommentCard";
import {LiveSymbol} from "../../Components/LiveSymbol";
import {LivePicUsername} from "../../Components/LivePicUsername";

import { Feather } from '@expo/vector-icons'; 
import {ActionButton} from '../../Components/ActionButton';



export default function LiveRoom({route, navigation}) {
    const {username, status, message, timeLeft} = route.params.cardInfo;
    const [isMuted, setMuted] = useState(false);
    const [isLive, setLive] = useState(false);

    return(
        <SafeAreaView style={styles.container}> 

                <CommentCard 
                    cardInfo={{
                        username: username,
                        comment: message,
                    }}
                />

            {/* Live symbol */}
            <View style={styles.liveSymb}> 
            {
                !isLive ? 
                <Text style={keyStyles.smallBold}>Your Guests </Text> 

                : 
                    <View style={styles.rowContainer}>
                        <View style={styles.liveCircle} />
                        <Text style={styles.liveText}>LIVE</Text> 
                    </View>

            }
            </View>

            

            {/* Users */}
            <View style={styles.sixUsers}> 
                <View style={styles.rowOfGuests}> 
                    <LivePicUsername userInfo={'john_winston'} /> 
                    <LivePicUsername userInfo={'rachel_f'} /> 
                    <LivePicUsername userInfo={'george_h'} /> 
                </View>

                <View style={styles.rowOfGuests}> 
                    <LivePicUsername userInfo={'starr_FLC'} /> 
                    <LivePicUsername userInfo={'yokono'} /> 
                    <LivePicUsername userInfo={'mclinda'} /> 
                </View>
            </View>


            {/* Row of icons. TODO: REPLACE ICONS idk where they are from */}
            { isLive ? 
            <View style={styles.configRow}>
                <View style={styles.iconTextContainer}>
                    {/* <Image 
                        source={require("../../Images/Users.png")}
                        style={styles.icon}
                    /> */}
                    <Feather name="users" size={44} color="black" />
                    <Text style={styles.dateTimeText}> 1,969 </Text>
                </View>

                <TouchableOpacity 
                    style={styles.iconTextContainer}
                    onPress={() => setMuted(!isMuted)}
                >
                {isMuted ? 
                        <View style={[styles.buttonView, {backgroundColor: keyStyles.LIGHT_GRAY}]}>
                        <Feather name="mic" size={44} color="black" />
                        </View>
                    : 
                        <View style={[styles.buttonView, {backgroundColor: keyStyles.LIGHT_GRAY}]}>
                        <Feather name="mic-off" size={44} color="black" />
                            </View>
                }
                    <Text style={styles.dateTimeText}>  </Text>
                </TouchableOpacity>


                <View style={styles.iconTextContainer}>
                    {/* <Image 
                        source={require("../../Images/Clock.png")}
                        style={styles.icon}
                    /> */}
                    <Feather name="clock" size={44} color="black" />
                    <Text style={styles.dateTimeText}> 47:03 </Text>
                </View>
            </View>

            : <View style={styles.configRow} />}


            {/* Button at bottom */}
            <ActionButton text= {isLive ? 'END ROOM' : 'BEGIN LIVE ROOM' } onPress
                    onPress = { () => {
                        setLive(!isLive);
                        // if (isLive) navigation.goBack();
                        // else setLive(true);
                    }}
                    context={null}
            />

        </SafeAreaView>
    );
}


// TODO: fix the rowOfGuests to make them aligned evenly 
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        height: '100%',
    },
    topCard: {
        justifyContent: 'center',
        marginBottom: 70
    },
    sixUsers: {
        justifyContent: 'center',
        //backgroundColor: 'green',
    },
    liveSymb: {
        alignItems: 'flex-start', 
        width: '90%', 
        height: '3%', 
        justifyContent: 'center',
        marginTop: 20
        // backgroundColor: "red"
    },
    rowOfGuests: {
        flexDirection: 'row',
        margin: 10,
        alignContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        // backgroundColor: "yellow"
    },
    configRow: {
        flexDirection: 'row',
        height: '25%',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
        // backgroundColor: 'red',
    },
    iconTextContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '33%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonView: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        height: 100,
        width: 100
    },
    dateTimeText: {
        fontSize: 16,
        textTransform: 'uppercase',
        fontFamily: 'Lato_700Bold',
        padding: 5,
    },

    // LIVE SYMBOL BIGGER
    liveCircle: {
        width: 12,
        height: 12,
        borderRadius: 12/2,
        backgroundColor: 'red',
        marginRight: 4, 
      },
      liveText: {
          color: 'red',
          fontFamily: 'Lato_700Bold',
          fontSize: 16
      },
      rowContainer: {
          flexDirection: 'row', // align text next to icon
          justifyContent: 'center',
          alignItems: 'center',
      },
  });
  
