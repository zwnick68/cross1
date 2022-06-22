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
    Modal,  
    SafeAreaView
} from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'

import ShowFighter from './ShowFighter'
import DropDown from './DropDown'
import DropDownTwo from './DropDownTwo'

export default function FighterGrid() {

  const [fighters, setFighters] = useState([])
  const [selectedFighter, setSelectedFighter] = useState([])
  const [secondSelectedFighter, setSecondSelectedFighter] = useState([])
  const [count, setCount]= useState(2)
  const [show, setShow] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [dropDefault, setDropDefault]= useState([])

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }

   const fetchData = () =>  {
    try {
        (
          async() => {
            let req = await fetch('http://172.29.35.84:3000/weightclasses')
            let res = await req.json()
            setFighters(res)
            setDropDefault(res[2])
            setShow(res[2].fighters)
            setSelectedFighter(res[2].fighters[getRandomIntInclusive(0,15)])
            setSecondSelectedFighter(res[2].fighters[getRandomIntInclusive(0,15)])
            
        })()  }
        catch (error) {
            console.log(error)
        }
       }

    useEffect(()=> {
      fetchData()
    },[])

    const callRefreshControl = () => {fetchData()}
    
    return (
      <SafeAreaView>
        <View style={styles.buttonContainer}>

      <SelectDropdown
            data={fighters}
            defaultButtonText= "Select Weightclass"
            defaultValue={dropDefault}
            buttonStyle={styles.button1BtnStyle}
            buttonTextStyle={styles.button1BtnTxtStyle}
            buttonBackgroundColor='#1f181e'
            statusBarTranslucent={true}
            // dropdownTextStyle={styles.dropdownTextStyle}
            rowStyle={styles.rowStyle}
            rowTextStyle={styles.dropdownTextStyle}
            // rowStyle={{width:'100%'}}
            onSelect={(selectedItem, index) => {
                // console.log(selectedItem.fighters, index)
                setShow(selectedItem.fighters)
                setSelectedFighter(null)
                setSecondSelectedFighter(null)
            }}
            rowTextForSelection={(item, index) => {

                const data = [
                    
                    'Flyweight',
                    'Bantamweight',
                    'Featherweight', 
                    'Lightweight', 
                  'Welterweight', ,
                   'Middleweight',
                   'Light Heavyweight',
                'Heavyweight',
                  "Womens's Strawweight",
                   "Womens's Flyweight",
                  "Womens's Bantamweight",
                     "Womens's Featherweight" 
                ];
                for (let i = 0; i < data.length; i++) {
                item = data[index]
                return item
            }
            }}
            buttonTextAfterSelection={(item, index) => {

                const data = [
                    
                    'Flyweight',
                    'Bantamweight',
                    'Featherweight', 
                    'Lightweight', 
                  'Welterweight', ,
                   'Middleweight',
                   'Light Heavyweight',
                'Heavyweight',
                  "Womens's Strawweight",
                   "Womens's Flyweight",
                  "Womens's Bantamweight",
                     "Womens's Featherweight" 
                ];
                for (let i = 0; i < data.length; i++) {
                item = data[index]
                return item
            }}}
            />
      </View> 
 
 <View style={styles.container}>
            <FlatList
                data={show}

                refreshControl= {<RefreshControl 
                  onRefresh={callRefreshControl}
                  refreshing={refresh}
                />}
                
                numColumns={8}

                renderItem={({item}) => <ShowFighter

                count={count} 
                setCount={setCount} 
                fighters={item}  
                selectedFighter={selectedFighter} 
                secondSelectedFighter={secondSelectedFighter} 
                setSelectedFighter={setSelectedFighter} 
                setSecondSelectedFighter={setSecondSelectedFighter} 
                
                />}
                keyExtractor={(item) => item.id}
                
            />
            <View style={{alignItems: "center", color: 'white', position: 'absolute', right: 50, left: 50, top: 185}}>
                <Text style={{color:'#2e2c2e', paddingBottom: 11, fontWeight: 'bold'}}>NAME/RECORD</Text>
                <Text style={{color:'#2e2c2e', paddingBottom: 11, fontWeight: 'bold'}}>AGE</Text>
                <Text style={{color:'#2e2c2e', paddingBottom: 11, fontWeight: 'bold'}}>HEIGHT</Text>
                <Text style={{color:'#2e2c2e', paddingBottom: 11, fontWeight: 'bold'}}>WEIGHT</Text>
                <Text style={{color:'#2e2c2e', paddingBottom: 11, fontWeight: 'bold'}}>REACH</Text>
                <Text style={{color:'#2e2c2e', paddingBottom: 11, fontWeight: 'bold'}}>LEG REACH</Text>
                <Text style={{color:'#2e2c2e', paddingBottom: 11, fontWeight: 'bold'}}>SIG STR LPM</Text>
                <Text style={{color:'#2e2c2e', paddingBottom: 11, fontWeight: 'bold'}}>SIG STR ACC</Text>
                <Text style={{color:'#2e2c2e', paddingBottom: 11, fontWeight: 'bold'}}>TD AVG</Text>
                <Text style={{color:'#2e2c2e', paddingBottom: 11, fontWeight: 'bold'}}>TD ACC</Text>
                <Text style={{color:'#2e2c2e', paddingBottom: 11, fontWeight: 'bold'}}>SUB AVG</Text>
                

                    
                        </View>
              <DropDown key={fighters.id} fighters={fighters} setSelectedFighter={setSelectedFighter} selectedFighter={selectedFighter} secondSelectedFighter={secondSelectedFighter}></DropDown>
              
              <DropDownTwo key={fighters.id} fighters={fighters} setSecondSelectedFighter={setSecondSelectedFighter} selectedFighter={selectedFighter} secondSelectedFighter={secondSelectedFighter}></DropDownTwo>
              </View>
             
                
             
            </SafeAreaView>
            
            
        
    )
    }
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        marginTop: 5,
        // marginBottom: 10,
        display:'flex',
        // color: 'white'
        // flexDirection: 'row',
      },
      images: {
          height: 70,
          width: 39
      },
      buttonContainer: {
        paddingTop: 10,
          alignItems: 'center'
      },
      button1BtnStyle: {
        width: '70%',
        height: 35,
        backgroundColor: '#2e2c2e',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'white',
        color: 'white',
        
        
      }, 
    button1BtnTxtStyle: {color: 'white', fontFamily: 'monospace'},
    
    dropdownTextStyle: {
        color: 'white', fontFamily: 'monospace'
    }, 
    rowStyle: {
        backgroundColor: '#2e2c2e'

    }, 
    images: {
        // flex: 1,
        height: 350,
        width: 400, 
        resizeMode: 'contain',
        position: 'absolute',
        top: 8,
        left: 10,
        bottom: 200,
        zIndex: -1
    }, 
    statTitles: {
      // flex:1,
      alignItems: 'center',
      flexDirection: 'column', 
      color: 'white',
      bottom: 200
    },
    statText: {
     fontSize: 30, 
     color: 'white',
     top: 200 
     
    }
    });
