import React from 'react';
import { StyleSheet, 
    Text, 
    TouchableOpacity,
    View,
    FlatList,
    Image,
    Dimensions
} from 'react-native';

import {StudioCard} from "./StudioCard";
import {PlusButton} from "./PlusButton";
import {UpcomingStudio} from "./UpcomingStudio"
import {FanInvite} from "./FanInvite";

export function StudioList({fan=false, ...props}) {
    const studios = props.studios;

    const renderStudioCard = ({index, item}) => {
        // remove the plus button altogether if fan
        
        // for fan side, do not render !visible studios
        if (fan && !item.isVisible) {
            return null;
        }
        else if (item.isInvite) {
            return <FanInvite inviteInfo={item}/>
        } else 
        if (item.isAlert) {
            return <UpcomingStudio alertInfo={{numParticipants:item.status, time:item.message, date:item.timeLeft}}/>
        } else if (fan && index === studios.length - 1) {
            return null;
        } else if (index === studios.length - 1) {
            return <PlusButton /> 
        } 
        else return <StudioCard cardInfo={item} fan={fan}/>
    } 

    return ( 
        <FlatList 
            data={studios}
            renderItem = {renderStudioCard}
            keyExtractor = { (item, index) => index.toString()}
            style = {styles.flatlist}
        />
    );
}


const styles = StyleSheet.create({
    flatlist: {
        // backgroundColor: 'red',
    }
  });
