import React, {useState, useEffect} from 'react';
import { StyleSheet, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    View,
    TextInput,
    Keyboard,
    Dimensions
} from 'react-native';

import keyStyles from '../../Styles/keyStyles';
import {Header} from '../../Components/Header';
import {FollowerItem} from '../../Components/FollowerItem';
import {ActionButton} from "../../Components/ActionButton";

import firestore from '../../../firebase';
import firebase from 'firebase';

export default function FindRachel({route, navigation}) {
    const [searchText, setSearchText] = useState("");


    // TODO: remove rachel_green and see
    const creatorList = [
        
        {
            username: 'gusteau', 
            genre: 'BAKING',
        },
        {
            username: 'geee', 
            genre: 'BAKING',
        },
        {
            username: 'rachel_green', 
            genre: 'TV',
        },
        {
            username: 'rachel_f', 
            genre: 'BAKING',
        },
    ];

    // Filter FlatList data by searchtext
    const searchCreatorList = () => {  
        if (searchText) {
            var filtered = creatorList.filter(function (creator) {
                return (creator.username.toLowerCase().startsWith(searchText.toLowerCase()));
            });
            return filtered;
        } else {
            return {};
        }
    }


    return(
        <SafeAreaView style={styles.container}> 
            
            <View style={styles.searchView}> 
                <TextInput
                    placeholder="Search for a creator to follow"
                    placeholderTextColor={keyStyles.DARK_GRAY}
                    style={styles.searchField}
                    onSubmitEditing={ () => {
                        searchCreatorList(); 
                    }}
                    value={searchText}
                    onChangeText={ input => setSearchText(input)}
                /> 
            </View>

            <View style={styles.resultsView}> 
                {searchText ? 
                    <FlatList 
                        data={searchCreatorList()}
                        renderItem = {({index, item}) => {
                            return (
                                <FollowerItem
                                    username={item.username}
                                    genre={item.genre} 
                                />
                            );
                        }}
                        keyExtractor = { (item, index) => index.toString()}
                    />
                : 
                    <Text style={{fontSize: 18, color: keyStyles.DARK_GRAY}}> Try searching for rachel_f! </Text>
                }

            </View> 
            <ActionButton 
                onPress={ () => {navigation.navigate('FanHome')}}
                text="Go home"
            />

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },
    searchView: {
        height: '10%',
        width: Dimensions.get('window').width * .9,
    },
    searchField: {
        backgroundColor: keyStyles.LIGHT_GRAY,
        borderRadius: 50,
        height: '80%',
        width: '100%',
        padding: 15,
        fontSize: 16
    },
    resultsView: {
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '75%'
    },
  });
  
