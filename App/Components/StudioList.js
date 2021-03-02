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

    const data = props.fakeNewsfeedData;
    console.log("DATA ", data);

    const renderStudioCard = ({index, item}) => {
        if (index === data.length - 1) {
            return <PlusButton/> 
        } else return <StudioCard cardInfo={item}/>
    }

    return(
        <FlatList 
            data={data}
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