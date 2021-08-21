import React,{useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import DefaultText from '../components/DefaultText';
import FilterComponent from '../components/FilterComponent';

const FiltersScreen = props => {
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
