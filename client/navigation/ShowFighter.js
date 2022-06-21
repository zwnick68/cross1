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



export default function ShowFighter({count,setCount,fighters,setSelectedFighter, setSecondSelectedFighter,selectedFighter,secondSelectedFighter}) {
    const [id, setID] = useState([])
    const [secondID, setSecondID] = useState([])

  const firstFighter = () => {

    if (fighters.id == secondID){
      setSecondSelectedFighter(null)
      setSecondID(null)
    }

    else if (fighters.id != id) {
    setSelectedFighter(fighters)
    setID(fighters.id)
    
    }
    else if (fighters.id == id)
    setSelectedFighter(null)

    else if (fighters.id == secondID)
      setSecondSelectedFighter(null)
      
  }

  const secondFighter = () => {

    if (fighters.id == id) {
      setSelectedFighter(null)
      setID(null)
    }
    else if (fighters.id != secondID) {
      setSecondSelectedFighter(fighters)
      setSecondID(fighters.id)
     
      }
      
      else if (id == null || id == secondID)
      setSelectedFighter(null)

      

      else if (fighters.id == secondID)
      setSecondSelectedFighter(null)
  }

  // const setCounter = () => {
  //   setCount(count+1)
  // }
  // console.log(fighters.id)
    return (
        <View>
           <TouchableHighlight style={styles.item} onPress={() => {
           if (count % 2 == 0) {
            firstFighter()
              }
            else if (count % 2 != 0)
            {
             secondFighter()
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
        // flex: 1,
        // marginBottom: 500,
        display:'flex',
        // flexDirection: 'row',
      },
      item: {
        backgroundColor: '#2e2c2e',
        padding: 3,
        marginVertical: 2,
        marginHorizontal: 2,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'white',
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