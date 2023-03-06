import React from "react";
import { View, SafeAreaView, Text, Image, StyleSheet, TouchableOpacity, TextInput, Dimensions } from "react-native"



const SignUp = ({ navigation }) => {
    function HandleNavigation(screenName) {
        console.log(screenName)
        navigation.navigate(screenName)
    }
    return (
        <SafeAreaView>
            <View style={style.heading}>
                <Image style={style.img} source={require("../image/sylani.png")} />
                <Image style={style.img2} source={require("../image/oline.png")} />
                <View>
                    <View style={style.inputView} >
                        <Text style={style.lable}>Full Name</Text>

                        <TextInput
                            style={style.input}
                            placeholder="Email"
                        />
                        <Text style={style.lable}>Contact</Text>

                        <TextInput
                            style={style.input} placeholder="Email" />
                        <Text style={style.lable}>Email</Text>

                        <TextInput
                            style={style.input} placeholder="Email" />
                        <Text style={style.lable}>Password</Text>

                        <TextInput
                            style={style.input} placeholder="Email" secureTextEntry={true} />




                        {/* button..../// */}

                        <View style={style.btnView}>

                            <TouchableOpacity onPress={() => HandleNavigation('login')}>
                                <Text style={style.btn}>Sign Un</Text>
                            </TouchableOpacity>


                        </View>
                        <View style={style.heading}>
                            <Text style={style.already} onPress={() => HandleNavigation('login')}>Already Have an account ? Log in</Text>
                        </View>
                    </View>

                </View>
            </View>
        </SafeAreaView>
    )
};

const { width } = Dimensions.get("screen")
const style = StyleSheet.create({
    heading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40,



    },
    lable: {
        color: 'black',
        paddingLeft: 10
    },
    img: {
        resizeMode: 'contain',
        width: '70%'
    },
    img2: {
        resizeMode: 'contain',
        width: '50%',
        margin: 10
    },
    inputView: {
        marginTop: '30%'
    },
    input: {
        // height: 40,
        margin: "2%",
        width: width - 40,
        padding: 8,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        backgroundColor: "#ffffff",
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

    },

    btnView: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        margin: 10
    },
    btn: {
        paddingLeft: 50,
        paddingRight: 50,
        padding: 15,
        fontWeight: 'bold',
        fontSize: 20,
        backgroundColor: "green",
        borderRadius: 20


    },
    already: {
        color: 'blue'
    }

})
export default SignUp;