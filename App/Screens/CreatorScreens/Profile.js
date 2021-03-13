import React, {useState} from 'react';
import { StyleSheet, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    View,
    Image,
    Switch
} from 'react-native';

import keyStyles from '../../Styles/keyStyles';
import { Ionicons } from '@expo/vector-icons';


let PIC_SIZE = 110;
let FONT_SIZE = 17;

export default function Profile({route, navigation}) {

    return (
        <SafeAreaView style={styles.container}> 
            <View style={styles.userInfo}> 

                <Image 
                    source={require("../../Images/Rachel.png")}
                    style={styles.pictureStyle}
                />

                <Text style={styles.realName}> Rachel Finn </Text>
                <Text style={styles.username}> @rachel_f </Text>
            </View> 

            <View style={styles.infoAbout}> 
                <View style={styles.profItem}> 
                    <Text style={styles.infoText}> Your Studios </Text>
                    <Text style={styles.infoText}> {route.params && route.params.numStudios} </Text>
                </View>

                <View style={styles.profItem}> 
                    <Text style={styles.infoText}> Followers </Text>
                    <Text style={styles.infoText}> 467 </Text>
                </View>

                    <TouchableOpacity 
                        style={[styles.profItem, {backgroundColor: '#F2F2F2'}]}
        
                        onPress={() => navigation.navigate('ChooseFlow')}
                    >
                    <Text style={[styles.infoText, {color:'black'}]}> Log Out </Text>
                    <Ionicons name='exit-outline' size={36} color='black'/>
                    </TouchableOpacity>
                        


            </View> 
        
        </SafeAreaView>
    );
}


// uncomment ugly background colors to make it clear where the flexboxes for the views are
const styles = StyleSheet.create({
    profileCircle: {
      width: PIC_SIZE,
      height: PIC_SIZE,
      borderRadius: PIC_SIZE/2,
      backgroundColor: '#F2F2F2',
      margin: 3,
    },
    realName: {
        marginBottom: 5,
        fontSize: FONT_SIZE * 1.5
    },
    username: {
        color: '#645F5C',
        fontSize: FONT_SIZE * 1.2 
    },
    container: {
        backgroundColor: '#fff',
        height: '100%'
    },
    userInfo: {
        marginBottom: 50,
        alignItems: 'center'
    },
    infoAbout: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    profItem: {
        width: '90%',
        margin: 8,
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: keyStyles.SALMON_COLOR,
        padding: 20,
        borderRadius: 20
    },
    infoText: {
        fontSize: 24,
        fontFamily: 'Lato_700Bold',
        color: 'white',
    },
    pictureStyle: {
        resizeMode: 'contain',
        width: PIC_SIZE
    }
  });
  
