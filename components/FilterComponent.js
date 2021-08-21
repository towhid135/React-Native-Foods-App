import React from 'react';
import { Switch,View,Text,StyleSheet } from 'react-native';
import DefaultText from './DefaultText';
import Color from '../constants/Color';

const FilterComponent = props => {
    return(
        <View style={styles.switchContainer} >
            <Text style={{fontWeight:'bold',fontSize:15}}>{props.title}</Text>
            <Switch
              trackColor={{true:Color.lightGreen,false: Color.Alizarin}}
              value={props.stateValue}
              onValueChange={changedValue => props.setStateValue(changedValue)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    switchContainer:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: "90%",
        marginTop: 20,
    }
});

export default FilterComponent;