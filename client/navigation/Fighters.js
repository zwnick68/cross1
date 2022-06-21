import React,{useRef,useEffect,useState} from 'react';
import {View, Text,ScrollView,Modal, StyleSheet,Image,Pressable} from 'react-native';
import ModalSelector from 'react-native-modal-selector'
import {Picker} from '@react-native-picker/picker'
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectDropdown from 'react-native-select-dropdown'
import { LinearGradient } from 'expo-linear-gradient';




export default function Fighters () {
    //state
    const[weightclass,setWeightclass] = useState([])
    const[id,setID] = useState([])
    const[visible,setVisible]=useState(false)
    const [selector,setSelector]=useState(false)
    
    //fetch
    useEffect(() => {
        try {
        (async() => {
            let req = await fetch('http://192.168.87.75:3000/weightclasses')
            let res = await req.json()
            setWeightclass(res)
            setID(res[2].fighters)
        })()  }
        catch (error) {
            console.log(error)
        }
       }, [])
    //  console.log(id)
    //  console.log(weightclass[2])
       //Modal selectors
        const data = [
           { key: null, section: true, label: 'Choose Weightclass'},
           { key: weightclass[0], label: 'Flyweight' },
           { key: weightclass[1], label: 'Bantamweight' },
           { key: weightclass[2], label: 'Featherweight' },
           { key: weightclass[3], label: 'Lightweight' },
           { key: weightclass[4], label: 'Welterweight' },
           { key: weightclass[5], label: 'Middleweight' },
           { key: weightclass[6], label: 'Light Heavyweight' },
           { key: weightclass[7], label: 'Heavyweight' },
           { key: weightclass[8], label: "Womens's Strawweight" },
           { key: weightclass[9], label: "Womens's Flyweight" },
           { key: weightclass[10], label: "Womens's Bantamweight" },
           { key: weightclass[11], label: "Womens's Featherweight" }
       ];

        return(
            <View>

      <View style={{alignItems: 'center', paddingTop: 15,}}>
      

        <SelectDropdown
            data={weightclass}
            defaultButtonText= "Select Weightclass"
            defaultValueByIndex={2}
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
                setID(selectedItem.fighters)
                setVisible(!visible)
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

      
                <ScrollView>

                <View style={styles.modalContainer}>
                    {id.map((foiters) => {
                        console.log(foiters)
                        return (
                            <View>
                        <Pressable onPress={()=> alert("ayoooooo")}>
                        <View style={styles.pressableContainer}>
                        <Image source={{uri:foiters.img}} style={styles.images}/>
                        <View style={styles.textContainer}> 
                        <Text style ={styles.ranking}>
                            {`${foiters.ranking}`}
                        </Text>   
                         <Text style ={styles.baseText}>
                            {`${foiters.name}`}
                         </Text>
                         <Text style ={styles.nickname}>
                            {`"${foiters.nickname}"`}
                         </Text>
                         <Text style ={styles.baseText}>
                            {`${foiters.fight_record.replace('(W-L-D)','')}`}
                         </Text>
                         </View>
                         </View>
                         </Pressable>
                         </View>
                    )})}
                </View>

           
                </ScrollView>
                
                
      </View>   
    )
}
const styles = StyleSheet.create({

    baseText: {
        fontFamily: 'monospace',
        color: 'white',
        alignItems: 'flex-start'
},
ranking: {
    fontFamily: 'monospace',
    color: '#5a0b96',
    alignItems: 'flex-start'
},
baseText: {
    fontFamily: 'monospace',
    color: 'white',
    alignItems: 'flex-start'
},
nickname: {
    fontFamily: 'monospace',
    color: '#5a0b96',
    alignItems: 'flex-start'
},
baseText: {
    fontFamily: 'monospace',
    color: 'white',
    alignItems: 'flex-start'
},
    modalContainer: {
        paddingTop: 10,
        width: '100%',
        // alignItems: 'flex-start',
        justifyContent:'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    pressableContainer: {
        // flex: 1,
        paddingTop: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'white',
        paddingBottom: 10,
        marginBottom: 10,
        paddingLeft: 10

    },
    textContainer: {
        // paddingLeft: 60

    },
    contentContainer: {
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'lightgrey',
        // paddingTop: 50,
        // paddingBottom: 50,
        // zIndex: 2 
        // marginTop: OFFSET,
        
    }, 
    button1BtnStyle: {
        width: '70%',
        height: 35,
        backgroundColor: '#2e2c2e',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'white',
        color: 'white',
        bottom: 6
        
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
    }
})