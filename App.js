import React, { Component } from 'react';
import { StyleSheet, Text, Keyboard,  View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Platform,Button, Image, TouchableHighlight,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './src/login/homescreen.js';
import Signup from './src/login/signup.js';
import Signin from './src/login/signin.js';
import Todojune from './src/login/Todojune.js';
import Todojuly from './src/login/Todojuly.js';
import TodoAugust from './src/login/TodoAugust.js';
import Plan from './src/login/Plan.js';
import Starter from './src/login/Starter.js';



 


const RootStack = createStackNavigator(
{
  Home: { screen: Home },
  Signup: {screen: Signup},
  Signin: {screen: Signin},
 Todojune: {screen: Todojune},
 Todojuly: {screen: Todojuly},
 TodoAugust: {screen: TodoAugust},
 Plan: {screen: Plan},
 Starter: {screen: Starter},
 
},
{
    initialRouteName: 'Home',
}

);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

