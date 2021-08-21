import { StatusBar } from 'expo-status-bar';
import React,{useState,useRef} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import DrawerNavigator from './navigator/DrawerNavigator'

/*props.navigation.push shows animation if we want to go to the currently running
screen again and again */

//it faster the code. needs to use in large projec
enableScreens();
const fontFetch = () =>{
  return Font.loadAsync({
    'miglia': require('./assets/fonts/Miglia.ttf')
  })
};

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const [fontFlag,setFontFlag] = useState(false);
  const ref = useRef(null);

  if(!fontFlag){
    return <AppLoading 
    startAsync = {fontFetch}
    onFinish = {() => setFontFlag(true)}
    onError = {(err) => console.log(err)}
     />;
  }

  return (
  /* if we use component from other files then we can't wrapp the NavigationContainer
  with the View
   */
  <NavigationContainer >
     <DrawerNavigator />
  </NavigationContainer>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle:{
    fontFamily: 'miglia',
  }
});
