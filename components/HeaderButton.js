import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons'
import Color from '../constants/Color';

const CustomHeaderButton = props =>{
    return <HeaderButton 
    {...props} 
    IconComponent={Ionicons}
    iconSize={30}
    
     />;
};

export default CustomHeaderButton;