import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity, ImageBackground} from 'react-native';
import DefaultText from './DefaultText'

const MealItem = props =>{
    return(
    <View style = {styles.mealItem}>
        <TouchableOpacity onPress={props.onSelectMeal}>
            <View>
                <View  style={{...styles.mealRow,...styles.mealHeader}}>
                    <ImageBackground 
                    source={{uri: props.itemObj.item.imageUrl}} 
                    style={styles.bgImage}
                    >
                    <View style={styles.titleContainer}>
                    <Text  style={styles.styleTitle}>{props.itemObj.item.title}</Text>
                    </View>
                    </ImageBackground>

                </View>
                <View style={{...styles.mealRow,...styles.mealDetails}}>
                    <DefaultText>{props.itemObj.item.duration}</DefaultText>
                    <DefaultText>{props.itemObj.item.complexity.toUpperCase()}</DefaultText>
                    <DefaultText>{props.itemObj.item.affordability.toUpperCase()}</DefaultText> 
                </View>
            </View>
        </TouchableOpacity>
    </View>

        );
};

const styles = StyleSheet.create({
    mealItem:{
        height: 200,
        width: '95%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        alignItems: 'center',
        paddingLeft: 20,
    },
    mealRow: {
        flexDirection: 'row',
    },
    mealHeader: {
        height: '85%',
    },
    mealDetails: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%',
    },
    //without including height and width, online images throw errors 
    bgImage:{
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        borderRadius: 15,
        overflow: 'hidden',
    },
    styleTitle:{
        fontFamily: 'miglia',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    titleContainer:{
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    }
});

export default MealItem;