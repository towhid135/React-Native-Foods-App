import React,{useState,useLayoutEffect,useCallback,useEffect} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import DefaultText from '../components/DefaultText';
import FilterComponent from '../components/FilterComponent';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import { setFilters } from '../store/actions/actionMeals';
import {useDispatch} from 'react-redux';

const FiltersScreen = props => {
    //console.log(props.route);
    const [isGluten,setIsGluten] = useState(false);
    const [isLactose,setIsLactose] = useState(false);
    const [isVegan,setIsVegan] = useState(false);
    const [isVegetarian,setIsVegetarian] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            isGlutenFree: isGluten,
            isLactoseFree: isLactose,
            vegan: isVegan,
            vegetarian: isVegetarian,
        } 
        dispatch(setFilters(appliedFilters));
        //props.navigation.setParams({save:appliedFilters})
    },[isGluten,isLactose,isVegan,isVegetarian,dispatch]);


    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
                    <Item 
                    title='save' 
                    iconName='ios-save' 
                    color= "white"
                    onPress={saveFilters} 
                    />
                </HeaderButtons>
              ),
        })
    });


    

    return(
    <View style={styles.screen}>
        <Text style={styles.titleStyle}>Available Filters/Restrictions</Text>
        <FilterComponent title="Gluten" stateValue={isGluten} setStateValue={setIsGluten} />
        <FilterComponent title="Lactose" stateValue={isLactose} setStateValue={setIsLactose} />
        <FilterComponent title="Vegan" stateValue={isVegan} setStateValue={setIsVegan} />
        <FilterComponent title="Vegetarian" stateValue={isVegetarian} setStateValue={setIsVegetarian} />
    </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    titleStyle:{
        fontSize: 20,
        marginTop: 10,
        fontWeight:  'bold',
    }

})

export default FiltersScreen;
