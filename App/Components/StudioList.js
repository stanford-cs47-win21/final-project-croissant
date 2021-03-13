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


export function StudioList({fan=false, ...props}) {
    const studios = props.studios;

    const renderStudioCard = ({index, item}) => {
        // remove the plus button altogether if fan
        if (item.username === null) {
            return <UpcomingStudio alertInfo={{numParticipants:2, time:"9:30 PM PT", date:"Feb 29"}}/>
        } else if (fan && index === studios.length - 1) {
            return null;
        } else if (index === studios.length - 1) {
            return <PlusButton /> 
        } else return <StudioCard cardInfo={item} fan={fan}/>
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
