import React, {useState, useEffect} from 'react'
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
    Modal
} from 'react-native'

import ShowFighter from './ShowFighter'
import DropDown from './DropDown'
import DropDownTwo from './DropDownTwo'



export default function FighterGrid() {

  const [fighters, setFighters] = useState([])
  const [visible, setVisible] = useState(false)
  const [selectedFighter, setSelectedFighter] = useState([])
  const [secondSelectedFighter, setSecondSelectedFighter] = useState([])
  const [secondVisible, setSecondVisible] = useState(false)
  const [count, setCount]= useState(2)


  useEffect(() => {
    const request = async () => {
      let req = await fetch('http://172.18.146.189:3000/fighters')
      let res = await req.json()
      if (req.ok) {
        return setFighters(res)
      } else {
        Alert.alert('Request failed')
      }
    }
    request()
   }, [])
    
    return (
        <View style={styles.container}>
            <FlatList
                data={fighters}
                // onDragEnd={({fighters}) => setFighters(fighters)}
                numColumns={8}
                renderItem={({item}) => <ShowFighter count={count} setCount={setCount} fighters={item} setVisible={setVisible} selectedFighter={selectedFighter} secondSelectedFighter={secondSelectedFighter} setSelectedFighter={setSelectedFighter} setSecondSelectedFighter={setSecondSelectedFighter} setSecondVisible={setSecondVisible}/>}
                keyExtractor={(item) => item.id}
                
                
                // ListFooterComponent={displayfighter}
            />
              <DropDown visible={visible} secondVisible={secondVisible} setVisible={setVisible} selectedFighter={selectedFighter} secondSelectedFighter={secondSelectedFighter}></DropDown>
              <DropDownTwo visible={visible} secondVisible={secondVisible} setVisible={setVisible} selectedFighter={selectedFighter} secondSelectedFighter={secondSelectedFighter}></DropDownTwo>
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
