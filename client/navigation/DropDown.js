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


export default function DropDown({visible,secondvisible,setVisible,selectedFighter,secondSelectedFighter}) {
    console.log(selectedFighter)
    if (selectedFighter) {
        return(
        <View style ={styles.container}>
            <Text>{selectedFighter.name}</Text>
            <Image source={{uri:selectedFighter.img}} style={styles.images} />
        </View>
        )
    } 
    
//    if (secondSelectedFighter) {
//         return(
//             <View style ={styles.fighter2}>
//                 <Text>{secondSelectedFighter.name}</Text>
//             </View>
//         )
//     }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row-reverse"
    }, 
    name: {
        fontSize: 30
    },
    images: {
        height: 140,
          width: 100
    }
    
})