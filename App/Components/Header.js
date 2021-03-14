import React from 'react';
import { StyleSheet, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    View,
    Image,
    Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

// Default is creator behavior
export function Header({fan=false, studios=null}) {

    const navigation = useNavigation();
    
    return (
        <View style={styles.headerView}> 
            <View style={styles.logoImage}> 
                <Image 
                    source={require("../Images/full-croissant-logo.png")}
                    resizeMode="contain"
                    style={{width: '70%'}}
                />
            </View>

            <View style={styles.rightSide}> 
                {fan ? 
                    <TouchableOpacity
                        onPress = {() => {navigation.navigate('FindRachel')}} 
                    > 
                        <AntDesign name="search1" size={30} color="black" /> 
                    </TouchableOpacity>
                : 
                    null
                }

                <TouchableOpacity 
                    
                    onPress = {() => {
                        if (!fan) navigation.navigate('Profile', {numStudios: studios.length -1});
                        else navigation.navigate('FanProfile');
                    }}
                >
                {fan ? 
                    <Image 
                        source={require("../Images/John.png")}
                        style={styles.pictureStyle}
                    />

                : <Image 
                        source={require("../Images/Rachel.png")}
                        style={styles.pictureStyle}
                    />
                } 
                    
                </TouchableOpacity>
            </View> 
        </View> 
    );
}

// uncomment ugly background colors to make it clear where the flexboxes for the views are
const styles = StyleSheet.create({
    headerView: {
        //backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width * .9,
        flexDirection: 'row',
        height: '8%'
    },
    rightSide: {
        flexDirection: 'row',
        width: '30%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // backgroundColor: 'yellow'
    },
    logoImage: {
        alignItems: 'flex-start',
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // backgroundColor: 'green',
        // height: '100%' // idk why this messes it up
    },
    pictureStyle: {
        resizeMode: 'contain',
        width: 40
    },
    profile: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: '#e4e7eb',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    }
  });
