import React,{useLayoutEffect} from 'react';
import {View,Text,StyleSheet,Button,FlatList,TouchableOpacity} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';


const CategoriesScreen = props => {
    console.log(props);
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerLeft: () => {
                return (<HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
                  <Item 
                  title="menu"
                  iconName="ios-menu"
                  color = "white"
                  onPress = {()=> props.navigation.toggleDrawer()}
                   />
                </HeaderButtons>);
              }
        })
    });
    //console.log(props);
    const renderGridItem = itemData =>{
        //console.log(itemData);
        
        return (<CategoryGridTile 
            item={itemData.item}
            onSelect = {() => props.navigation.navigate(
                {name:'CategorieMealsScreen',params:{
                itemId: itemData.item.id,}
            }) }

              />);
    }
    //console.log(props);
    return(
    
    <FlatList 
    keyExtractor ={(item,index) => item.id}
    data = {CATEGORIES}
    renderItem = {renderGridItem}
    numColumns = {2}
    />
   
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

})

export default CategoriesScreen;
