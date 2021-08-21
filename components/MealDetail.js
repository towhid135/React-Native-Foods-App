import React, { version } from 'react';
import DefaultText from './DefaultText';
import Color from '../constants/Color';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';

const MealDetail = props =>
{
    let textList = []
    const IngredientsComponent = (props2) =>{
        //console.log(props2)
        //console.log('key : ',props2.id);
        /*let indx;
        for(indx in props2.listItems){
            textList.push( <DefaultText style={styles.ingredientsStyle}>{props2.listItems[indx]}</DefaultText> )       
        }
        return (
            <ScrollView style={styles.ingredientsContainer} >
                <View style={{alignItems:'center'}}>
               <DefaultText style={{...styles.headerStyle}}>{props2.title}</DefaultText>
               </View >
                   <View style={styles.ingredientsContainer} key={props2.id}>
                      {[...textList]}
                  </View>
            </ScrollView>
        );*/
        return (
        <View style={styles.ingredientsContainer}>
        <View style={{alignItems:'center'}}>
        <DefaultText style={{...styles.headerStyle}}>{props2.title}</DefaultText>
        </View>
        {props2.listItems.map((item) => 
        {return (
            <View  key={props2.listItems.indexOf(item).toString()}>
            <DefaultText style={styles.ingredientsStyle} >{item}</DefaultText> 
            </View>
        )
        }
       )}
       </View>
    )
    };
    //console.log(props.mealItem);
    return (
    <View style={styles.screen}>
      <ScrollView style={styles.scrollViewStyle}  >
    <View style={styles.componentContainer}  key={props.mealItem.id} >
        <Image style={styles.imageStyle}  source = {{uri: props.mealItem.imageUrl}} />

        <IngredientsComponent id={props.mealItem.id+'1'} title="Ingredients" listItems={props.mealItem.ingredients} />
        <IngredientsComponent id={props.mealItem.id+'2'} title="Steps" listItems={props.mealItem.steps} />
        
        </View>
      </ScrollView>
    
   </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: "100%",
    },
    scrollViewStyle:{
        flex: 1,
        width: "100%",
    },
    imageStyle:{
        width: 300,
        height:300,
        borderRadius: 150,
        marginTop:10,

    },
    componentContainer:{
        flex: 1,
        alignItems:'center',
    },
    headerStyle:{
        fontSize: 20,
        marginVertical:10,
        color: Color.accentColor,
    },
    ingredientsContainer:{
         width: "100%"
    },
    ingredientsStyle:{
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginTop:10,
    }
});

export default MealDetail;