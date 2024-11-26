import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen'; // Correct import

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <AuthStack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        </AuthStack.Navigator>
    );
};

export default AuthStackNavigator;