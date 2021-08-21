import React,{useLayoutEffect} from 'react';
import {View,Text,StyleSheet,Button,FlatList} from 'react-native';
import {CATEGORIES,MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {
    const renderMealItem = (itemData) => {
        return(
        <MealItem itemObj = {itemData} onSelectMeal = {() => {props.navigation.navigate({name:'MealDetailsScreen',params:{
            mealId: itemData.item.id,
        }})}} 
        />);
    };

    //console.log(props);
    const selectedItemId = props.route.params['itemId'];
    //finding selected category
    const selectedCategory = CATEGORIES.find((cat) => cat.id === selectedItemId);
    //finding meals for the selected category
    const selectedMeals = MEALS.filter( (meal)=> meal.categoryIds.indexOf(selectedItemId) >= 0 );
    

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
    }

})

export default CategoryMealsScreen;
