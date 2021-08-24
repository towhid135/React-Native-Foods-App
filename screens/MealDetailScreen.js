import React,{useLayoutEffect,useState,useEffect,useCallback} from 'react';
import {View,Text,StyleSheet,Button,FlatList} from 'react-native';
import MealDetail from '../components/MealDetail';
import CustomHeaderButton from '../components/HeaderButton';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import Color from '../constants/Color';
import {useSelector, useDispatch} from 'react-redux';
import {toggleFavorite} from '../store/actions/actionMeals';

const MealDetailScreen = props => {
    const availableMeals = useSelector((state) => state.meals.meals);
    const selectedMealId = props.route.params.mealId;
    const selectedMeal = availableMeals.find((meal) => meal.id === selectedMealId);
    const [loveButton,setLoveButton] = useState(false);

    /* if the selectedMealId is inside of the favorite meals list then the
    loveButton will be red, else it will remain white
     */
    const favMeals = useSelector((state) => state.meals.favoriteMeals);
    useLayoutEffect( () => {
    if( (favMeals.find((fMeals) => fMeals.id === selectedMealId ) ) ){
        setLoveButton(true);
    } else{
        setLoveButton(false);
    }
   }
    );


    const routeName = props.route.name;

    const dispatch = useDispatch();
    /*When you dispatch an action creator it passes the action object to the root 
    reducer. The action object is passed through the entire state tree and any 
    reducers that process the action type consume it.*/
    const toggleFavoriteHandler = useCallback( () => {
        //console.log('entered into toggleFavoriteHandler');
        setLoveButton(!loveButton);
        dispatch(toggleFavorite(selectedMealId));
    },[selectedMealId,dispatch]);

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
                    iconName={loveButton ? 'ios-heart' : 'ios-heart-outline'} 
                    color= {loveButton ? Color.darkPink : 'white'}
                    onPress={toggleFavoriteHandler} 
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
