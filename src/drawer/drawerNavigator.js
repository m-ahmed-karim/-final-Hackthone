import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { View, Text } from "react-native"
import CustomDrawer from "./customDrawer";
import Main from "./main";


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={props=> <CustomDrawer {...props}/>}>
            <Drawer.Screen name="main" component={Main} options={{headerShown: false}} />
           

        </Drawer.Navigator>
    )
}
export default DrawerNavigator;