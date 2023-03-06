import React from "react";
import { View, Text,  StyleSheet } from "react-native"



const CustomDrawer = () => {
    return (
       
            <View style={style.CustomDrawer}>
                <Text>CustomDrawer</Text>
            </View>
        
    )
}
const style = StyleSheet.create({
    CustomDrawer: {
        flex: 1,
        backgroundColor: 'blue',
    }
})
export default CustomDrawer;