import React, {useState} from 'react';
import { StyleSheet, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    View,
    Image,
    ScrollView
} from 'react-native';

import keyStyles from '../../Styles/keyStyles';
import {Title} from "../../Components/Title";
import {StudioCard} from "../../Components/StudioCard";
import {LiveSymbol} from "../../Components/LiveSymbol";
import {LivePicUsername} from "../../Components/LivePicUsername";



export default function LiveRoom({route, navigation}) {
    const {username, status, message, timeLeft} = route.params.cardInfo;
    const [isMuted, setMuted] = useState(false);

    return(
        <SafeAreaView style={styles.container}> 

            <View style={styles.topCard}> 
                <StudioCard 
                    cardInfo={{
                        username: username,
                        status: null,
                        message: message,
                        timeLeft: null,
                    }}
                />
            </View>

            {/* Live symbol */}
            <View style={styles.liveSymb}> 
                <LiveSymbol/>
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
            <View style={styles.configRow}>
                <View style={styles.iconTextContainer}>
                    <Image 
                        source={require("../../Images/Users.png")}
                        style={styles.icon}
                    />
                    <Text style={styles.dateTimeText}> 1969 </Text>
                </View>

                <TouchableOpacity 
                    style={styles.iconTextContainer}
                    onPress={() => setMuted(!isMuted)}
                >
                {isMuted ? 
                    <Image 
                        source={require("../../Images/MicrophoneSlash.png")}
                        style={styles.mutedIcon}
                    />

                    : 
                    <Image 
                        source={require("../../Images/Mike-on.png")}
                        style={styles.icon}
                    />
                }
                    <Text style={styles.dateTimeText}> 47:03 </Text>
                </TouchableOpacity>


                <View style={styles.iconTextContainer}>
                    <Image 
                        source={require("../../Images/Clock.png")}
                        style={styles.icon}
                    />
                    <Text style={styles.dateTimeText}> 47:03 </Text>
                </View>
            </View>


            {/* Button at bottom */}
            <View style={styles.button}> 
                <TouchableOpacity
                    style={keyStyles.button1} 
                    onPress = { () => navigation.goBack()}
                >
                    <Text style={keyStyles.button1text}> END ROOM </Text>
                </TouchableOpacity>
            </View>

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
        width: '80%', 
        height: '5%', 
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
        width: '90%',
        height: '20%',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
        // backgroundColor: 'red',
    },
    button: {
        // don't add height
        height: '10%',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // backgroundColor: 'red'
    },
    iconTextContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    icon: {
        resizeMode: 'contain',
        width: 40,
        aspectRatio: 1,
        height: undefined,
    },
    mutedIcon: {
        resizeMode: 'contain',
        width: 40,
        aspectRatio: 1,
        height: undefined,
        borderRadius: 10,
        backgroundColor: "#f2f2f2"
    },
    dateTimeText: {
        fontSize: 14,
        textTransform: 'uppercase',
        padding: 5,
    },
  });
  