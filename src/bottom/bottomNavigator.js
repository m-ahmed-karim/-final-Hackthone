import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, View, Image } from "react-native"

import Home from './home';
import Cart from './cart';
import Account from './account';

const Bottom = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Bottom.Navigator>
            <Bottom.Screen name='home' component={Home} options={{
                headerShown: false, tabBarIcon: () => {
                    return (
                        <Image style={{ width: 20, height: 20 }} source={require('../image/home.png')} />
                    )
                }
            }} />


            <Bottom.Screen name='cart' component={Cart} options={{
                headerShown: false, tabBarIcon: () => {
                    return (
                        <Image style={{ width: 20, height: 20 }} source={require('../image/Cart.png')} />
                    )
                }
            }} />


            <Bottom.Screen name='account' component={Account} options={{
                headerShown: false, tabBarIcon: () => {
                    return (
                        <Image style={{ width: 25, height: 25 }} source={require('../image/profile.png')} />
                    )
                }
            }} />

        </Bottom.Navigator>
    )
}

export default BottomNavigator;