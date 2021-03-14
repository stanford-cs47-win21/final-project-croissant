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
import {ActionButton} from "../../Components/ActionButton";
import DraggableFlatList from 'react-native-draggable-flatlist';

export default function FanRanking({route, navigation, ...props}) {
    const {username, status, message, timeLeft} = route.params.cardInfo;

    const initialData = [
                {
                    username: 'john_winston',
                    comment: 'yes',
                },
                {
                    username: 'george_h',
                    comment: 'no',
                },
                {
                    username: 'paul_walrus',
                    comment: 'ofcccc',
                },
            ];

    const [data, setData] = useState(initialData);

    const renderItem = ({ item, index, drag, isActive }) => (
        <TouchableOpacity onLongPress={drag}>
        <CommentCard cardInfo={item} commentColor={true}/>
        </TouchableOpacity>
    );
    return(

        <SafeAreaView style={styles.container}> 
        <Title text="Rank Items"/>
        <View style={styles.bodyTextContainer}> 
            <Text style={styles.bodyText}> Drag and drop the suggestions below </Text>
        </View>

        <DraggableFlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          onDragEnd={({ data }) => setData(data)}
        />
        <ActionButton text="Submit"/>


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
        height: '40%',
        justifyContent: 'center',
    },
    bodyTextContainer: {
        width: '90%',
        marginBottom: 15
    },
    bodyText: {
        fontSize: keyStyles.BODY_TEXT_SIZE,
        lineHeight: keyStyles.BODY_TEXT_SIZE * keyStyles.LINE_HEIGHT_MULT
    }
});
  
