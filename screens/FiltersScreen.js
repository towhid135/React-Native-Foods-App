import React,{useState,useLayoutEffect} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import DefaultText from '../components/DefaultText';
import FilterComponent from '../components/FilterComponent';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';

const FiltersScreen = props => {
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
                    <Item 
                    title='save' 
                    iconName='ios-save' 
                    color= "white"
                    onPress={()=>{console.log("save button is")}} 
                    />
                </HeaderButtons>
              ),
        })
    });

    const [isGluten,setIsGluten] = useState(false);
    const [isLactose,setIsLactose] = useState(false);
    const [isVegan,setIsVegan] = useState(false);
    const [isVegetarian,setIsVegetarian] = useState(false);
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
