import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FiltersScreen from '../screens/FiltersScreen';
import Color from '../constants/Color';

const FilterStackNav = () =>{
    const Stack = createStackNavigator();
    var headerStyleProp = {
        headerTintColor:'white',
        headerTitleStyle:{
          fontFamily: 'miglia',
          fontSize: 15,
        },
        headerStyle:{
          backgroundColor: Color.lightGreen,
        },
       
      }
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="filterScreen1" 
            component={FiltersScreen}
            options = {{title:"Filter",...headerStyleProp}}
             />
        </Stack.Navigator>
    );
};

export default FilterStackNav;