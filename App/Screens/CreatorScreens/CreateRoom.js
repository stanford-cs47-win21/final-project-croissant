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

import keyStyles from '../../Styles/keyStyles';
import {Title} from "../../Components/Title";
import {CommentCard} from "../../Components/CommentCard";
import {LivePicUsername} from "../../Components/LivePicUsername";
import DropDownPicker from 'react-native-dropdown-picker';
import {ActionButton} from '../../Components/ActionButton';
import {Overlay} from 'react-native-elements';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import InviteModal from "../../Components/InviteModal";

const BODY_TEXT_SIZE = 16;
const ICON_SIZE = 36;
const FONT_SIZE = 16;

export default function CreateRoom({route, navigation, variant}) {

      //State info for date and time pickers
      const [cur_date, setDate] = useState(new Date())
      const [pickerMode, setPickerMode] = useState(null);

      const showDatePicker = () => {
        setPickerMode("date");
      };
      const showTimePicker = () => {
        setPickerMode("time");
      };
      const hidePicker = () => {
        setPickerMode(null);
      };
      const handleConfirm = (date) => {
        setDate(date);
        hidePicker();
      };

      //State info for invitation modal
      const [visible, setVisible] = useState(false);

      const showModal = () => {
        setVisible(true);
      };

      const hideModal = () => {
        setVisible(false);
      };

      //State for custom invitation text box
      const [prompt, setPrompt] = useState("");


      return(
          <SafeAreaView style={styles.container}>

            {/* studio prompt */}
            <View style={styles.header}>
                <CommentCard
                    cardInfo={{
                        username: "rachel_f",
                        comment: " this is hard coded wohooooo",
                    }}
                />
            </View>


            {/* recommended invitees */}
            <View style={styles.subtitle}>
                <Text style={keyStyles.smallBold}> Recommended Invitees </Text>
            </View>

            {/*grid of invitees*/}
            <View style={styles.sixUsers}>
                <View style={styles.rowOfGuests}>
                  <View style={styles.user}>
                    <InviteModal username="john_winston" comment="All you need is love."/> 
                  </View>
                  <View style={styles.user}>
                    <InviteModal username="bentham" comment="The greatest good for the greatest number."/> 
                  </View>
                  <View style={styles.user}>
                    <InviteModal username="george_h" comment="I don't know."/> 
                  </View>
                </View>

                <View style={styles.rowOfGuests}>
                  <View style={styles.user}>
                    <InviteModal username="starr_LFC" comment="Thomas the Tank Engine"/> 
                  </View>
                  <View style={styles.user}>
                    <InviteModal username="yokono" comment="To break up the Beatles."/> 
                  </View>
                  <View style={styles.user}>
                    <InviteModal username="mclinda" comment="I married a Walrus."/> 
                  </View>
                </View>
            </View>


            {/* datetime pickers */}
            <View style={styles.bottomBox}>
                <View style={styles.iconTextContainer}>
                  <Image
                      source={require("../../Images/CalendarBlank.png")}
                      style={styles.icon}
                  />

                    <TouchableOpacity onPress={showDatePicker} style={styles.datepicker}>
                      <Text style={styles.dateTimeText}> {cur_date.toLocaleDateString()} </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.iconTextContainer}>
                    <Image
                        source={require("../../Images/Clock.png")}
                        style={styles.icon}
                    />
                    <TouchableOpacity onPress={showTimePicker} style={styles.datepicker}>
                      <Text style={styles.dateTimeText}> {cur_date.toLocaleTimeString([], {hour: 'numeric', minute: '2-digit'})} </Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* modal for time picker*/}
            <DateTimePickerModal
              isVisible={pickerMode !== null}
              mode={pickerMode}
              minimumDate = {pickerMode == "date" ? new Date : new Date(1950, 0, 1)}
              onConfirm={handleConfirm}
              onCancel={hidePicker}
            />


        {/* modal for time picker */}
        <ActionButton text={"SCHEDULE ROOM"} onPress={() => { navigation.navigate("CreatorHome"); }} style={{zIndex: 0}}/>

    </SafeAreaView>
    );
}


// TODO: fix the rowOfGuests to make them aligned evenly
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        height: '100%',
    },
    topCard: {
        marginBottom: 10,
    },
    sixUsers: {
        justifyContent: 'center',
    },
    user: {
        alignItems: 'center',
        width: 120,
        height: 120
    },
    rowOfGuests: {
        flexDirection: 'row',
        margin: 10,
        alignContent: 'space-between',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    iconTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        alignItems: 'center',
    },
    buttonView: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 20,
        height: 100,
        width: 100
    },
    dateTimeText: {
        fontSize: 16,
        textTransform: 'uppercase',
        fontFamily: 'Lato_700Bold',
    },
    subtitleStyle: {
        fontSize: BODY_TEXT_SIZE,
        fontFamily: 'Lato_700Bold'
    },
    subtitle: {
        marginTop: 20,
        paddingLeft: 30,
        alignSelf: 'flex-start'
    },
    pickerItemStyle: {
        justifyContent: 'flex-start',
    },
    bottomBox: {
        flexDirection: 'row',
        width: '90%',
        height: 80,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    icon: {
        resizeMode: 'contain',
        width: ICON_SIZE,
        marginRight: 5
    },
    datepicker: {
      backgroundColor: '#F2F2F2',
      borderRadius: 10,
      alignContent: 'center',
      justifyContent: 'center',
      padding: 10
    },
    promptInputView: {
        height: '40%',
    },
    promptInputField: {
        backgroundColor: '#F3F1F1',
        height: '100%',
        width: 300,
        padding: 15,
        borderRadius: 10,
        fontSize: keyStyles.BODY_TEXT_SIZE,
        lineHeight: keyStyles.BODY_TEXT_SIZE * keyStyles.LINE_HEIGHT_MULT
    },
    overlay: {
        width: '90%',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: keyStyles.SALMON_COLOR,
    },
    outerStatic: {
        width: Dimensions.get('window').width * .9,
        backgroundColor: '#FFF8E0',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 20,
        margin: 8,
        paddingBottom: 20
      }
  });
