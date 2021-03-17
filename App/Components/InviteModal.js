import React, {useState} from 'react';
import { StyleSheet,
    Text,
    SafeAreaView,
    TouchableOpacity,
    View,
    Image,
    Button,
    Dimensions,
    Keyboard,
    TextInput,
} from 'react-native';

import {Overlay} from 'react-native-elements';
import keyStyles from '../Styles/keyStyles';
import {CommentCard} from "./CommentCard";
import {ActionButton} from './ActionButton';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {LivePicUsername} from "./LivePicUsername";

const BODY_TEXT_SIZE = 16;
const ICON_SIZE = 24;
const FONT_SIZE = 16;
export default function InviteModal(props) {
    //State info for invitation modal
    const [visible, setVisible] = useState(false);
    const [checked, setChecked] = useState(false);

    const showModal = () => {
    setVisible(true);
    };

    const hideModal = () => {
    setVisible(false);
    };

    const hideModalAndSend = () => {
        setVisible(false);
        setChecked(true);
    };
    const [prompt, setPrompt] = useState("");
    let invitationText = "Invite " + props.username + " to chat about their feedback."
    return(
        <View>
            <TouchableOpacity onPress={showModal} style={styles.user}>
                <LivePicUsername userInfo={props.username} checked={checked} />
            </TouchableOpacity>

            {!checked && <Overlay
                isVisible={visible}
                onBackdropPress={hideModal}
                animationType={'fade'}
                overlayStyle={styles.overlay}
                >


                        <View style={styles.overlayRow}>
                            <Text style={styles.alertText}> Send Invite </Text>
                            <MaterialCommunityIcons name="account-plus" size={36} color="white"/>
                        </View>
                <View style={styles.topCard}>
                    <CommentCard
                        cardInfo={{
                            username: props.username,
                            comment: props.comment
                        }}
                        commentColor={true}
                        absoluteSize={false}
                    />
                </View>
                <View style={styles.promptInputView}>
                    <TextInput
                        placeholder={invitationText}
                        placeholderTextColor='grey'
                        style={styles.promptInputField}
                        onSubmitEditing={ () => Keyboard.dismiss()}
                        value={props.prompt}
                        onChangeText={ input => setPrompt(input)}
                        multiline={true}
                    />
                </View>

                <ActionButton text="Send" onPress={hideModalAndSend} style={keyStyles.shadowProps}/>
                    </Overlay>}
            </View>



);
}

const styles = StyleSheet.create({
    topCard: {
        width: '100%',
        alignItems: 'center'
    },
    promptInputView: {
        height: 200,
        width: '90%',
        alignItems: 'center',
    },
    promptInputField: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        padding: 15,
        borderRadius: 20,
        fontSize: keyStyles.BODY_TEXT_SIZE,
        lineHeight: keyStyles.BODY_TEXT_SIZE * keyStyles.LINE_HEIGHT_MULT,
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
    }
  });
