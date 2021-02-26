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

export function StudioList(props) {

    const data = props.fakeNewsfeedData;
    console.log("DATA ", data);

    const renderStudioCard = ({index, item}) => {
        return <StudioCard cardInfo={item}/>
    }

    return(
        <FlatList 
            data={data}
            renderItem = {renderStudioCard}
            keyExtractor = { (item, index) => index.toString()}
        />
    );
}


const styles = StyleSheet.create({

  });