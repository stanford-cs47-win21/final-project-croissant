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

            <View style={styles.topCard}> 
                <CommentCard 
                    cardInfo={{
                        username: username,
                        comment: message,
                    }}
                />
            </View>

            {/* Live symbol */}
            <View style={styles.liveSymb}> 
            {
                !isLive ? 
                <Text style={keyStyles.titleText1}>Your Guests </Text> 

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
                    <LivePicUsername userInfo={'paul_walrus'} /> 
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
                    <Text style={styles.dateTimeText}> 1969 </Text>
                </View>

                <TouchableOpacity 
                    style={styles.iconTextContainer}
                    onPress={() => setMuted(!isMuted)}
                >
                {isMuted ? 
                    <View style={styles.iconTextContainer}>
                        <Feather name="mic" size={44} color="black" />
                    </View>
                    : 
                    <View style={styles.iconTextContainer}>
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
        height: '20%',
        justifyContent: 'center',
    },
    sixUsers: {
        height: '30%', 
        justifyContent: 'center',
        // backgroundColor: 'green',
    },
    liveSymb: {
        alignItems: 'flex-start', 
        width: '90%', 
        height: '7%', 
        justifyContent: 'center',
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
        width: '100%',
        height: '20%',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
        // backgroundColor: 'red',
    },
    buttonView: {
        // don't add height
        height: '13%',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // backgroundColor: 'red'
    },
    buttonStyle: {
        margin: 10,
        borderRadius: 20,
        width: Dimensions.get('window').width * .5,
        backgroundColor: "#FAC738",
        width: '90%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconTextContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '33%',
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // icon: {
    //     resizeMode: 'contain',
    //     width: '40%',
    //     aspectRatio: 1,
    //     height: undefined,
    //     // backgroundColor: 'red'
    // },
    // mutedIcon: {
    //     // resizeMode: 'contain',
    //     width: '100%',
    //     aspectRatio: 1,
    //     height: undefined,
    //     borderRadius: 10,
    //     backgroundColor: "#f2f2f2",
    //     justifyContent: 'center', 
    // },
    dateTimeText: {
        fontSize: 14,
        textTransform: 'uppercase',
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
          fontWeight: 'bold',
          fontSize: 15
      },
      rowContainer: {
          flexDirection: 'row', // align text next to icon
          justifyContent: 'center',
          alignItems: 'center',
      },
  });
  
