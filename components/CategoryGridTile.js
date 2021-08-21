import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform
} from 'react-native';

const CategoryGridTile = props =>{
    let TouchableComp = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >= 21){
        TouchableComp = TouchableNativeFeedback;
    }
    return(
    <View style={{...styles.gridItem}}>
    <TouchableComp  style={{flex:1}}
    onPress={props.onSelect}
    >
        <View style={{backgroundColor:props.item.color,...styles.textContainer}} >
            <Text style={{...styles.textStyle}} numberOfLines={2} >
                {props.item.title}
            </Text>
        </View>
    </TouchableComp>
    </View>
    );
};

const styles = StyleSheet.create({
    gridItem:{
        flex: 1,
        alignItems: 'center',
        height: 150,
        padding:15,
        borderRadius: 10,
        overflow: 'hidden',
    },
    textStyle: {
        fontFamily: 'miglia',
        fontSize: 15,
        textAlign: 'right',
    },
    textContainer: {
        flex: 1,
        width: "90%",
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding:15,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width:0,height:2},
        elevation: 5,

    }
})

export default CategoryGridTile;