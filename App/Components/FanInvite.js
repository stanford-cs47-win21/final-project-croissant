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
import {Overlay} from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { ActionButton } from "./ActionButton";

import keyStyles from '../Styles/keyStyles';

import {PicAndUsername} from "./PicAndUsername";
import {UpcomingStudio} from "./UpcomingStudio";

const ICON_SIZE = 24;
const FONT_SIZE = 16;

export function FanInvite({inviteInfo}) {
    const {isInvite, username, message, date, time} = inviteInfo; 
    const [acceptedOrRejected, setAorR] = useState('');
    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => {
        setVisible(!visible);
    };

    if (acceptedOrRejected === 'Accept') {
        return(
            <UpcomingStudio alertInfo={{numParticipants:0, time:"10:00 AM PT", date:"FEB 24"}} accepted={true}/>
        );
    } else if (acceptedOrRejected === 'Reject') {
        {/* After confirmation overlay */}
        return null; 
    } 
    // RSVP required
    else return(
        <View style={[styles.outer, keyStyles.shadowProps]}> 
            <View style={styles.topRow}> 
                <PicAndUsername userInfo={username} photoPerson="Rachel"/>  
                <Text style={{paddingBottom: 2, fontWeight: 'bold'}}> sent you an invite: </Text>
            </View>

            <View style={styles.middleBox}> 
                <Text style={styles.messageText}>{message}</Text> 
            </View>

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

            {/* Accept and reject invite buttons */}
            <View style={styles.bottomBox}>
                <TouchableOpacity
                    style={styles.backButton} 
                    onPress = {toggleOverlay}
                >
                    <Text style={styles.buttonText}> REJECT </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.forwardButton} 
                    onPress = {() => setAorR('Accept')}
                >
                    <Text style={styles.buttonText}> ACCEPT </Text>
                </TouchableOpacity>
            </View>

            {/* Confirmation overlay to show up after rejection */}
            <Overlay 
                isVisible={visible} 
                onBackdropPress={toggleOverlay}
                animationType={'fade'}
                overlayStyle={styles.overlay}
            >

                <View style={styles.overlayRow}>
                    <Text style={styles.alertText}> Reject Invite </Text>
                    <MaterialCommunityIcons name="exclamation" size={36} color="white"/>
                </View>

                <View style={[styles.overlayTextContainer, keyStyles.shadowProps]}>    
                    <Text style={[styles.messageText, {marginBottom: 8}]}> Are you sure you want to reject this invite? You won't be able to edit your response. </Text>
                </View>

                {/* Accept or reject buttons */}
                <View style={styles.bottomBox}> 
                    <TouchableOpacity
                        style={styles.backButton} 
                        onPress = {toggleOverlay}
                    >
                        <Text style={styles.buttonText}> CANCEL </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.forwardButton} 
                        onPress={() => {toggleOverlay(); setAorR('Reject')}}
                    >
                        <Text style={styles.buttonText}> REJECT </Text>
                    </TouchableOpacity>
                </View> 
            </Overlay>
            

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
        borderWidth: 2,
        borderColor: keyStyles.PRIMARY_COLOR,
        margin: 8,
        padding: 15
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        width: '100%',
        paddingLeft: '2%',
        paddingRight: '3.15%',
        height: 35
    },
    middleBox: {
        backgroundColor: '#FFFEFA',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        marginBottom: 7,
    },
    messageText: {
        fontSize: keyStyles.BODY_TEXT_SIZE,
        lineHeight: keyStyles.BODY_TEXT_SIZE * keyStyles.LINE_HEIGHT_MULT
    },
    bottomBox: {
        flexDirection: 'row',
        width: '90%',
        height: 30,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 5,
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
    backButton: {
        margin: 10,
          borderRadius: 20,
          backgroundColor: "#DBDBDB",
          width: 140,
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
    },
    forwardButton: {
        margin: 10,
        borderRadius: 20,
        backgroundColor: "#FAC738",
        width: 140,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // confirmation for overlay
    overlay: {
        width: '90%', 
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 20, 
        backgroundColor: keyStyles.SALMON_COLOR,
        height: '30%',
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
    overlayTextContainer:{ 
        width: '90%',
        justifyContent: 'center', 
        backgroundColor: 'white',
        borderRadius: 20, 
        alignContent: 'center',
        padding: 15,
        marginVertical: 5,
    },
    closeButtonRowContainer: {
        width: '100%'
    }
  });
