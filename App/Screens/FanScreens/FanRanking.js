import React, {useState, useEffect} from 'react';
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
import {StudioCard} from "../../Components/StudioCard";
import {CommentCard} from "../../Components/CommentCard";
import {DraggableCard} from "../../Components/DraggableCard";
import {ActionButton} from "../../Components/ActionButton";
import DraggableFlatList from 'react-native-draggable-flatlist';
import {Overlay} from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function FanRanking({route, navigation, ...props}) {
    const {username, status, message, timeLeft} = route.params.cardInfo;

    const initialData = [
                {
                    comment: 'Slow down when you are taking video clips! I find it hard to follow along.',
                },
                {
                    comment: 'Stop making videos. They all suck.',
                },
                {
                    comment: 'Can you spend time zooming in on the texture of your cake?',
                },
            ];

    const [data, setData] = useState(initialData);
    const [hide, setHide] = useState(false);
    //
    //State info for confirmation modal
    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => {
        setVisible(!visible);
    };


    const navigateWithDelay = () => {
        setHide(true);
        navigation.navigate('FanHome', {rankingStatus: 'RANKED'});
    }


    const renderItem = ({ item, index, drag, isActive }) => (
        <TouchableOpacity onLongPress={drag}>
        <DraggableCard comment={item.comment}/>
        </TouchableOpacity>
    );
    return(

        <SafeAreaView style={styles.container}> 
        <Title text="Rank Ideas"/>
        <View style={styles.topCard}> 
            <CommentCard 
                cardInfo={{
                    username: username,
                    comment: message,
                }}
            />
        </View>


        <View style={styles.bodyTextContainer}> 
            <Text style={styles.bodyText}> Drag and drop the suggestions below </Text>
        </View>

        <DraggableFlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          onDragEnd={({ data }) => setData(data)}
        />
        <ActionButton text="Submit"
            onPress = {toggleOverlay}/>

        {!hide &&
        <Overlay 
            isVisible={visible} 
            onBackdropPress={toggleOverlay}
            animationType={'fade'}
            overlayStyle={styles.overlay}
        >

        <TouchableOpacity style={styles.closeButton} onPress={toggleOverlay}>
            <MaterialCommunityIcons name="close" size={24} color="white"/>
        </TouchableOpacity>

            <View style={styles.overlayRow}>
                <Text style={styles.alertText}>Submit Ranking?</Text>
                <MaterialCommunityIcons name="check" size={36} color="white"/>
            </View>

            <View style={[styles.overlayTextContainer, keyStyles.shadowProps]}>    
                <Text style={[styles.messageText, {marginBottom: 8}]}>Ready to submit your ranking? These rankings are used to determine what feedback {username} sees. </Text>
            </View>
            <ActionButton text="SUBMIT" onPress ={navigateWithDelay} style={keyStyles.shadowProps}/>
        </Overlay>}
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    topCard: {
        height: '17%',
        justifyContent: 'center',
        marginBottom: 18,
    },
    bodyTextContainer: {
        width: '90%',
        marginBottom: 15
    },
    bodyText: {
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
    closeButton: {
        position: 'absolute',
        alignSelf: 'flex-end',
        padding: 10
    },
    messageText: {
        fontSize: keyStyles.BODY_TEXT_SIZE,
        lineHeight: keyStyles.BODY_TEXT_SIZE * keyStyles.LINE_HEIGHT_MULT
    },
});
  
