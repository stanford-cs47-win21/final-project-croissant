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


export default function FindRachel({route, navigation}) {
    const [searchText, setSearchText] = useState("");
    const [followedRachel, setFollowedRachel] = useState(false);


    // temp, modify after
    const creatorList = [
        {
            username: 'rachel_f', 
            genre: 'BAKING',
        },
        {
            username: 'rachel_green', 
            genre: 'TV',
        }
    ];

    // Filter FlatList data by searchtext
    const searchCreatorList = () => {
        if (searchText) {
            var filtered = creatorList.filter(function (creator) {
                return (creator.username.toLowerCase().includes(searchText.toLowerCase()));
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
                    placeholderTextColor='grey'
                    style={styles.searchField}
                    onSubmitEditing={ () => {
                        Keyboard.dismiss(); 
                        searchCreatorList(); 
                        setSearchText('');}
                    }
                    value={searchText}
                    onChangeText={ input => setSearchText(input)}
                /> 
            </View>

            <View style={keyStyles.listView}> 
                {searchText ? 
                    <FlatList 
                        data={searchCreatorList()}
                        renderItem = {({index, item}) => {
                            return (
                                <FollowerItem
                                    username={item.username}
                                    genre={item.genre} 
                                    followButton={true}
                                    setFollowedRachel={setFollowedRachel}
                                />
                            );
                        }}
                        keyExtractor = { (item, index) => index.toString()}
                    />
                : 
                    <Text> Try searching for rachel_f! </Text>
                }

                <TouchableOpacity 
                    onPress={ () => {
                        navigation.navigate('FanHome', {followedRachel: followedRachel})
                    }}
                    style={keyStyles.button1}
                >
                    <Text> Go Home </Text>
                </TouchableOpacity> 
            </View> 

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
        backgroundColor: keyStyles.SECONDARY_COLOR,
        borderRadius: 50,
        height: '80%',
        width: '100%',
    }
  });
  