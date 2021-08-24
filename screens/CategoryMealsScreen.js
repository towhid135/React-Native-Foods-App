import React,{useLayoutEffect} from 'react';
import {View,Text,StyleSheet,Button,FlatList} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import MealItem from '../components/MealItem';
import { useSelector } from 'react-redux'; /*it allows us to manage a slice of globaly manage
state that means we can use data from store*/
import DefaultText from '../components/DefaultText';

const CategoryMealsScreen = props => {
    const renderMealItem = (itemData) => {
        return(
        <MealItem itemObj = {itemData} onSelectMeal = {() => {props.navigation.navigate({name:'MealDetailsScreen',params:{
            mealId: itemData.item.id,
        }})}} 
        />);
    };
   
    /* useSelector gets the state as an argument from reat-redux */
    const availableMeals = useSelector((state) => state.meals.filteredMeals )
    //console.log(props);
    const selectedItemId = props.route.params['itemId'];
    //finding selected category
    const selectedCategory = CATEGORIES.find((cat) => cat.id === selectedItemId);
    //finding meals for the selected category
    const selectedMeals = availableMeals.filter( (meal)=> meal.categoryIds.indexOf(selectedItemId) >= 0 );

    if (selectedMeals.length <= 0){
        return(
            <View style={styles.textContainer}>
                <DefaultText>
                    The meal is not available. May be you should check the filter!
                </DefaultText>
            </View>
        );
    }
    

    useLayoutEffect(()=>{
        props.navigation.setOptions({
            title: selectedCategory.title,
        });
    });
    return(
    <View style={styles.screen}>
       <FlatList
       data = {selectedMeals}
       keyExtractor = {(item,index) => item.id}
       renderItem = {renderMealItem}
       style = {{width:'100%'}}
        />
    </View>    
    )
    
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }

})

export default CategoryMealsScreen;
