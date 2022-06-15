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


export default function DropDownTwo({visible,secondvisible,setVisible,selectedFighter,secondSelectedFighter}) {
    console.log(secondSelectedFighter)
   if (secondSelectedFighter) {
        return(
            <View style ={styles.fighter2}>
                <Text>{secondSelectedFighter.name}</Text>
                <Image source={{uri:secondSelectedFighter.img}} style={styles.images} />
            </View>
        )
    }
}
const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        flexDirection: "row"
    }, 
    name: {
        fontSize: 30
    },
    images: {
        height: 140,
          width: 100
    }
})