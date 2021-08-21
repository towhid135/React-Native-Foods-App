import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MealsStackNavigator from './MealsStackNavigator';
import FavoriteStackNavigator from './FavoriteStackNavigtor';
import { Ionicons } from '@expo/vector-icons';
import Color from '../constants/Color';

const HomeFavoriteTabNav = () =>{
    Tab = createMaterialBottomTabNavigator();
    return (
    <Tab.Navigator
     shifting = {true}
     activeColor="tomato"
     inactiveColor='white'
     barStyle={{ backgroundColor: Color.lightGreen}}
     initialRouteName="HomeScreen"
    >
    <Tab.Screen 
      name='HomeScreen' 
      component={MealsStackNavigator} 
      options={{
        tabBarLabel: 'HOME',
        tabBarIcon: ({ color,focused }) => {
          let iconName;
          iconName = focused ? 'ios-home' : 'ios-home-outline';
          return(<Ionicons name={iconName} size={25} color={color} />);
        },
      }}
    />

    <Tab.Screen 
      name='Favorite' 
      component = {FavoriteStackNavigator} 
      options={{
        tabBarLabel: 'FAVORITE',
        tabBarIcon: ({ color,focused }) => {
          let iconName;
          iconName = focused ? 'ios-restaurant' : 'ios-restaurant-outline';
          return(<Ionicons name={iconName} size={25} color={color} />);
        },
        tabBarColor: Color.lightBlue,
      }}
    />
    </Tab.Navigator>
    );
};

export default HomeFavoriteTabNav;