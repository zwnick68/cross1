import React, {useRef,useState, useEffect} from 'react'
import {
    StyleSheet, 
    Text,
    FlatList, 
    Image, 
    View,
    PanResponder, 
    Animated,
    TouchableHighlight, 
    RefreshControl,
    ActivityIndicator, 
    Platform, 
    Modal,
    ImageBackground
} from 'react-native'
import Fighters from './Fighters'
// import Animated from 'react-native-reanimated'


export default function DropDown({visible,setVisible,selectedFighter}) {
    console.log(selectedFighter)
    return(
        <View onPress={()=> {return null}} style= {{display: visible? "block" : "none"} }>
            <Text>{selectedFighter.name}</Text>
        </View>
    )

}