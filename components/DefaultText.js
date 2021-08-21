import React from 'react';
import {Text,StyleSheet} from 'react-native';

const DefaultText = props => {
    return <Text style={{...props.style,...styles.textStyle}}>{props.children}</Text>
}

const styles = StyleSheet.create({
    textStyle:{
        fontFamily: 'miglia',
    }
});

export default DefaultText;