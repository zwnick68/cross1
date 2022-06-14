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



export default function ShowFighter({count,setCount,fighters,setVisible,setSelectedFighter, setSecondSelectedFighter, setSecondVisible,selectedFighter,secondSelectedFighter}) {
    
  const firstFighter = () => {
    setSelectedFighter(fighters)
    setVisible(true)
  }

  const secondFighter = () => {
    setSecondSelectedFighter(fighters)
    setSecondVisible(true)
  }

  // const setCounter = () => {
  //   setCount(count+1)
  // }
  // console.log(count)
    return (
        <View>
           <TouchableHighlight style={styles.item} onPress={() => {
           if (count % 2 != 0) {firstFighter()
            // setCount(count+1)
              }
            else if (count % 2 == 0)
            {secondFighter()
              // setCount(count+1)
            }
            
            setCount(count+1)
            console.log(count)
           }
           }>
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