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

const BODY_TEXT_SIZE = 16;
const ICON_SIZE = 24;
const FONT_SIZE = 16;
export default function InviteModal(props) {
    console.log(props.visible);
    return(
            <Overlay
                isVisible={props.visible}
                onBackdropPress={props.hideModal}
                animationType={'fade'}
                overlayStyle={styles.overlay}
                >

                <View style={styles.topCard}>
                    <CommentCard
                        cardInfo={{
                            username: "howdoipassstatetothisusername",
                            comment: "you should bake cookies or sumn ",
                        }}
                        absoluteSize={false}
                    />
                </View>

                <View style={styles.subtitle}>
                    <Text style={[keyStyles.smallBold, {color:'white', textAlign:'left'}]}> Send Invite </Text>
                </View>

                <View style={styles.promptInputView}>
                    <TextInput
                        placeholder="Type a question, proposal or concept to share with your fans."
                        placeholderTextColor='grey'
                        style={styles.promptInputField}
                        onSubmitEditing={ () => Keyboard.dismiss()}
                        value={props.prompt}
                        onChangeText={ input => props.setPrompt(input)}
                        multiline={true}
                    />
                </View>

                <ActionButton text="Send" onPress={props.hideModal} style={keyStyles.shadowProps}/>
         </Overlay>
);
}

const styles = StyleSheet.create({
    subtitle: {
        width: '90%'
    },
    promptInputView: {
        height: '30%',
        width: '90%',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 10,
    },
    topCard: {
        width: '100%',
        marginBottom: 10,
        alignItems: 'center'
    },
    promptInputField: {
        backgroundColor: '#F3F1F1',
        height: '100%',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        fontSize: keyStyles.BODY_TEXT_SIZE,
        lineHeight: keyStyles.BODY_TEXT_SIZE * keyStyles.LINE_HEIGHT_MULT,
    },
    overlay: {
        width: '90%',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: keyStyles.SALMON_COLOR,
    },
  });
