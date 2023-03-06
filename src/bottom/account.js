import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity } from "react-native"
import { ScrollView } from "react-native-gesture-handler";
import { Dimensions } from "react-native/Libraries/Utilities/Dimensions";




const Account = () => {
    return (
        <SafeAreaView>
            <View style={style.profileView}>
                <View><Text style={style.heading}>Settings</Text></View>
                <View><Image source={require('../image/profilePic.png')} /></View>
                <View><TextInput style={style.input} placeholder="search profile" /></View>

            </View>
            <ScrollView>
                <View style={style.caredView}>
                    <View style={style.left}>
                        <Text style={{color:'black', fontSize: 18, fontWeight:'bold'}}>Hammad khan</Text>
                        <Text>2 x item Name</Text>
                        <Text>2 x item Name</Text>
                        <Text>Total</Text>



                    </View>



                    <View style={style.right}>
                        <View><Text style={style.num}>03172930029</Text></View>
                        <View><Text style={style.price}>$ 85.12</Text></View>

                    </View>

                    <View></View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    profileView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    heading: {
        color: 'blue',
        fontSize: 24,
        margin: 5
    },
    input: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        width: '80%'
    },
    caredView: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: 'E8E8E8',
        borderBottomWidth: 1,

    },
    num: {
        color: 'black'
    },
    price: {
        color: 'black'

    },

})
export default Account;