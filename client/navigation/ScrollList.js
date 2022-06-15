import React,{useEffect,useState} from 'react';
import {View, Text,ScrollView} from 'react-native';
import ModalSelector from 'react-native-modal-selector'


export default function ScrollList ({fighters}) {
    console.log(fighters)
    return (
    <View>
        <Text>{fighters.name}</Text>
    </View>
    )
}