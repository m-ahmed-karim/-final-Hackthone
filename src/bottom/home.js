import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from "react-native"
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";




const Home = () => {


    return (

        <SafeAreaView>
            <View style={style.main}>

                <Image style={style.sylani} source={require('../image/sylani.png')} />

                <View>
                    <Image style={style.cart} source={require('../image/Cart.png')} />
                </View>

            </View>
            <View style={style.h3}>
                <Text style={style.text}>DICCOUNT STORE</Text>
            </View >
            <View style={style.coverView}>
                <Image style={style.cover} source={require('../image/Grocery.png')} />
            </View>
            <View style={style.search}>
                <Image source={require('../image/Search.png')} />

                <TextInput style={style.searchInput} placeholder={"search"} />

            </View>
            <View style={style.h4}>
                <Text style={style.text}>Shop by categry</Text>
            </View>
            <ScrollView style={style.horiView} horizontal={true}>


                <View style={style.icon}><Image source={require('../image/one.png')} /></View>
                <View style={style.icon}><Image source={require('../image/two.png')} /></View>
                <View style={style.icon}><Image source={require('../image/three.png')} /></View>
                <View style={style.icon}><Image source={require('../image/one.png')} /></View>
                <View style={style.icon}><Image source={require('../image/two.png')} /></View>
                <View style={style.icon}><Image source={require('../image/three.png')} /></View>
            </ScrollView>

            {/* product card----- */}

            <ScrollView style={style.vertical} >


                <View style={style.icon2}>
                    <Image source={require('../image/meet1.jpeg')} />
                    <View >
                        <Text style={style.text3}>Meet</Text>
                    </View>
                    <View style={style.kg_plue}>
                        <Text style={style.text4} >800 kg</Text>
                        <TouchableOpacity>
                            <View style={style.plus}><Image source={require('../image/plus.png')} /></View>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={style.icon2}>
                    <Image source={require('../image/meet3.jpeg')} />
                    <View >
                        <Text style={style.text3}>Meet</Text>
                    </View>
                    <View style={style.kg_plue}>
                        <Text style={style.text4} >1,200 per.kg</Text>
                        <TouchableOpacity>
                            <View style={style.plus}><Image source={require('../image/plus.png')} /></View>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={style.icon2}>
                    <Image source={require('../image/meet1.jpeg')} />
                    <View >
                        <Text style={style.text3}>Meet</Text>
                    </View>
                    <View style={style.kg_plue}>
                        <Text style={style.text4} >900 per.kg</Text>
                        <TouchableOpacity>
                            <View style={style.plus}><Image source={require('../image/plus.png')} /></View>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={style.icon2}>
                    <Image source={require('../image/meet2.jpeg')} />
                    <View >
                        <Text style={style.text3}>Meet</Text>
                    </View>
                    <View style={style.kg_plue}>
                        <Text style={style.text4} >800 kg</Text>
                        <TouchableOpacity>
                            <View style={style.plus}><Image source={require('../image/plus.png')} /></View>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>




        </SafeAreaView >
    )
}

const style = StyleSheet.create({
    main: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 10

    },
    sylani: {
        width: '50%',
        resizeMode: 'contain'
    },
    h3: {
        paddingLeft: '5%',
        marginTop: -10
        

    },
    kg_plue: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    plus: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 20,
        borderRadius: 15,

    },
    text3: {
        margin: 5,
        color: 'black',
        fontSize: 22,

    },

    text4: {
        color: 'black',
        fontSize: 16

    },
    icon2: {
        margin: '5%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderBottomColor: 'green',
        borderRadius: 15,
        padding: 10
    },
  
    h4: {
        paddingLeft: '5%',
        marginTop: 10

    },
    text: {
        color: 'blue',
        fontWeight: 'bold',
    },
    coverView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cover: {
        resizeMode: 'contain',
        width: '95%'
    },
    search: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#E8E8E8',
        borderRadius: 40
    },
    searchInput: {

        width: '80%'

    },
    horiView: {
        display: 'flex',
       
        margin: 20

    },
    icon: {
        margin: 5
    },

    vertical: {
        height: '40%'
    }


})
export default Home;