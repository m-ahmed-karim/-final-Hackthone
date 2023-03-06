import { useEffect } from "react";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

import { TouchableOpacity } from "react-native-gesture-handler";


const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('signUp')
        }, 1000)
    }, [])
    function handler(screenName){
        navigation.navigate(screenName)

    }
    return (
        <SafeAreaView>
            <View style={style.splash}  >
                <Image style={style.img} source={require("../image/Logo.png")} />
            </View>
            <View style={style.splash}  >
                <Image style={style.img} source={require("../image/sylani.png")} />
            </View>
            <View style={style.splash}  >
                <Text style={style.text}>ONLINE DICCOUNT STORE</Text>
            </View>
            <TouchableOpacity style={style.splash} onPress={()=> handler('login')}>
                <View style={style.get}  >
                    <Text style={style.text2}>GET STARTED</Text>
                </View>
            </TouchableOpacity>

        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    splash: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    img: {
        width: "60%",
        resizeMode: "contain"
    },
    text: {
        color: "blue",
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10

    },
    get:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "green",
        width: 200,
        borderRadius: 20,
        marginVertical: 300

    },
    text2:{
        color:'white',
        padding: 20,
        fontSize: 22
    }



})
export default Splash;