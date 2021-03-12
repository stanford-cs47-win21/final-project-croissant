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

let PIC_SIZE = 90;
let FONT_SIZE = 17;

export default function Profile({route, navigation}) {
    // switch setup
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => navigation.navigate('ChooseFlow');


    return(
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
                
                <View style={styles.profItem}> 
                    <Text style={styles.infoText}> Creator Mode </Text>
                    <Switch
            trackColor={{ false: "#767577", true: '#53d769' }}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
      />
                </View>
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
        marginTop: 8,
        marginBottom: 5,
        fontSize: FONT_SIZE
    },
    username: {
        color: '#645F5C',
        fontSize: FONT_SIZE
    },
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        height: '100%'
    },
    userInfo: {
        marginBottom: 25,
        marginTop: '20%',
        alignItems: 'center',
    },
    infoAbout: {
        alignContent: 'center',
        width: '60%'
    },
    profItem: {
        width: '100%',
        height: 20,
        margin: 8,
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoText: {
        fontSize: FONT_SIZE,
    },
    pictureStyle: {
        resizeMode: 'contain',
        width: PIC_SIZE
    }
  });
  
