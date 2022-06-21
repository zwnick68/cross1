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
            <Image source={{uri:selectedFighter.img}} style={styles.images} />
        </View>
        )
    } 
    else if (selectedFighter==null) {
        return(
            <View></View>
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
        flexDirection: "column",
        borderWidth: 1,
        // borderColor: 'white',
        borderRadius: 15,
        borderRightColor: '#2e2c2e',
        backgroundColor: '#2e2c2e',
        color: 'white',
        position: 'absolute',
        top: 180, 
        height: 335, 
        width: 150,
        alignItems: 'center',

    }, 
    name: {
        paddingTop: 5,
        alignItems: 'center',
        alignContent: 'center',
        fontSize: 13,
        color: 'white'
    },
    images: {
        top: 5,
        height:328,
        width: 150,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        right: -2,
        // transform: [{ scaleX: -1 }],
        resizeMode: 'cover',
        zIndex: 1
    }
    
})