import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Homepage from './pages/homepage';
import LoginPage from './pages/login_page';
import React from 'react';

const Tab = createBottomTabNavigator();

const TabNavOptions = {
    tabBarShowLabel: false,
    tabBarActiveTintColor: "#4B7079",
    tabBarInactiveTintColor: "#FFFFFF",
    tabBarStyle: {
        width: "100%",
        height: 60,
        position: "absolute",
        left: 0,
        bottom: 30,
        borderRadius: 30, // Adjusted to 30 for more modern look
        borderTopWidth: 0,
        backgroundColor: "#75B1BC",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
};

export default function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={TabNavOptions}>
                <Tab.Screen name="Home" component={Homepage} />
                <Tab.Screen name="Settings" component={LoginPage} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
