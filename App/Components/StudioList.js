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

export function StudioList(props) {
    const studios = props.studios;

    const renderStudioCard = ({index, item}) => {
        if (index === studios.length - 1) {
            return <PlusButton /> 
        } else return <StudioCard cardInfo={item}/>
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