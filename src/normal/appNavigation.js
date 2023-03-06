import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import Splash from "./splash";
import Parent from "./parent";
import SignUp from "./signUp";
import Login from "./login";


const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="splash" component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />

                <Stack.Screen name="signUp" component={SignUp} options={{ headerShown: false }} />

                <Stack.Screen name="parent" component={Parent} options={{ headerShown: false }} />


            </Stack.Navigator>

        </NavigationContainer>
    )
}
export default AppNavigator;