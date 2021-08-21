import React,{useLayoutEffect,useState} from 'react';
import {View,Text,StyleSheet,Button,FlatList} from 'react-native';
import {MEALS} from '../data/dummy-data'
import MealDetail from '../components/MealDetail';
import CustomHeaderButton from '../components/HeaderButton';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import Color from '../constants/Color';

const MealDetailScreen = props => {
    const selectedMealId = props.route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === selectedMealId);
    const [loveButton,setLoveButton] = useState(false);
    //console.log(selectedMeal.id);
    const routeName = props.route.name;

    useLayoutEffect(()=>{
        props.navigation.setOptions({
            headerStyle:{
                backgroundColor: routeName==='MealDetails2' ? Color.lightBlue : Color.lightGreen,
              },
            title: selectedMeal.title,
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
                    <Item 
                    title='favorite' 
                    iconName='ios-heart' 
                    color= {loveButton ? Color.darkPink : 'white'}
                    onPress={()=>{setLoveButton(!loveButton)}} 
                    />
                </HeaderButtons>
              ),
        });
    });

    const renderMealDetail = itemData =>{
        //console.log('item data',itemData);
        return <MealDetail mealItem={itemData} />;
    }


    return (
      <View style={styles.screen}>
         {renderMealDetail(selectedMeal)}
      </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }

})

export default MealDetailScreen;
