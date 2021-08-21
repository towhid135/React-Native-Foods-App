import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FilterStackNav from './FilterStackNav';
import HomeFavoriteTabNav from './HomeFavoriteTabNav';
import Color from '../constants/Color';

const DrawerNavigator = () =>{
    const Drawer = createDrawerNavigator();
    var drawerStyleProp = {
        drawerTintColor:'white',
        drawerTitleStyle:{
          fontFamily: 'miglia',
          fontSize: 15,
        },
        headerStyle:{
          backgroundColor: Color.lightGreen,
        },
       
      }
    return(
        <Drawer.Navigator
         drawerStyle={{
            backgroundColor: '#65c3ba',
            width: "80%",
          }}
        >
            <Drawer.Screen 
            name="Home" 
            component={HomeFavoriteTabNav} 
            options = {{title:'HOME'}}
            />

            <Drawer.Screen 
            name= 'Filter' 
            component = {FilterStackNav} 
            options = {{title:"FILTER",}}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;