import React from 'react';
import {createStackNavigator} from  '@react-navigation/stack';
import FavoritesScreen from '../screens/FavoritesScreen';
import Color from '../constants/Color';
import MealDetailScreen from '../screens/MealDetailScreen';

const FavoriteStackNavigator = () =>{
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
            name = 'FavoriteScreen' 
            component={FavoritesScreen}
            options = {{title:'FAVORITE',...headerStyleProp}}
             />
             <Stack.Screen 
             name='MealDetails2' 
             component={MealDetailScreen} 
             options = {{
                 title: "Meal Details2",
                 ...headerStyleProp,
             }}
             />
        </Stack.Navigator>
    );
};

export default FavoriteStackNavigator;