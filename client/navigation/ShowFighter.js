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
    Alert
} from 'react-native'
// import Animated from 'react-native-reanimated'



export default function ShowFighter({fighters,setVisible,setSelectedFighter}) {
    
    // const dropdown = () => {
    //     // console.log(fighters)
    //     // return (
    //     // <View>
    //     //     <Text style={styles.title}>{fighters.name}</Text>
    //     // </View>
    //     // )
    //     // return(
    //     Alert.alert(fighters.name)
    // }

    return (
        <View>
           <TouchableHighlight style={styles.item} onPress={()=> {setSelectedFighter(fighters); setVisible(true)}}>
    <Image source={{uri:fighters.img}} style={styles.images} />
        {/* <Text style={styles.title}>{item.name}</Text> */}
        </TouchableHighlight>
        </View>
       )

      

}
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        // marginBottom: 500,
        display:'flex',
        // flexDirection: 'row',
      },
      item: {
        backgroundColor: 'purple',
        padding: 4,
        marginVertical: 1,
        marginHorizontal: 1,
      },
      title: {
        flex: 2,
        fontSize: 30,
        color: 'black',
      },
      images: {
          height: 70,
          width: 39
      },
    });