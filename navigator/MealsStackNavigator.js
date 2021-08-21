import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import Color from "../constants/Color";
import CustomHeaderButton from '../components/HeaderButton';


const MealsStackNavigator = () =>{
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

    return (
        <Stack.Navigator>

          <Stack.Screen 
          name="categoriesScreen" 
          component = {CategoriesScreen} 
          options={{
           title: "Food Categories",
           ...headerStyleProp,
          }}
          />

          <Stack.Screen 
          name='CategorieMealsScreen'
          component={CategoryMealsScreen}
          options = {{
           title: "Selected Category",
           ...headerStyleProp}}
          />

          <Stack.Screen
          name = 'MealDetailsScreen'
          component = {MealDetailScreen}
          options = {{
           title: "Meal Details",
           ...headerStyleProp}}
           />
        </Stack.Navigator>
    );
};

export default MealsStackNavigator;