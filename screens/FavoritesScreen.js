import React,{useLayoutEffect} from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import MealItem from '../components/MealItem';
import Color from '../constants/Color';
import CustomHeaderButton from '../components/HeaderButton';
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import {useSelector} from 'react-redux';
const favoriteItemsId = ['m1','m2','m3','m8','m10'];



//console.log(selectedFavoriteItem);

const FavoritesScreen = props => {
    
    const favMeals = useSelector((state) => state.meals.favoriteMeals)
    //console.log(favMeals);

    const routeName = props.route.name;
    useLayoutEffect(() =>{
        props.navigation.setOptions({
            headerStyle:{ 
            backgroundColor: routeName  === 'FavoriteScreen' ? Color.lightBlue : Color.lightGreen,},
            headerLeft: () => {
                return (
                   <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
                       <Item 
                       title= "menu2"
                       iconName="ios-menu"
                       color="white"
                       onPress = {() => {
                           props.navigation.toggleDrawer();
                       }}
                       />
                   </HeaderButtons>
                );
            }
        })
    });
    //console.log(props);
    const renderFavoriteItem = (ItemData) => {
        return (
            <MealItem itemObj = {ItemData} onSelectMeal = {() =>{
                props.navigation.navigate({name:'MealDetails2',params:{
                    mealId: ItemData.item.id,
                }})
            }} 
            />
        );
    }
    return (
        <FlatList 
         data = {favMeals}
         keyExtractor = {(item,index)=> item.id}
         renderItem = {renderFavoriteItem}
        />
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }

})

export default FavoritesScreen;
