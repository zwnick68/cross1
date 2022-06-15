import React,{useRef,useEffect,useState} from 'react';
import {View, Text,ScrollView,Modal} from 'react-native';
import ModalSelector from 'react-native-modal-selector'
import ScrollList from './ScrollList';
import {Picker} from '@react-native-picker/picker'
import { SafeAreaView } from 'react-native-safe-area-context';



export default function Fighters () {

    const[weightclass,setWeightclass] = useState([])
    const[id,setID] = useState([])
    const[visible,setVisible]=useState(false)

    useEffect(() => {
        try {
        (async() => {
            let req = await fetch('http://172.21.141.173:3000/weightclasses')
            let res = await req.json()
            setWeightclass(res)
        })()  }
        catch (error) {
            console.log(error)
        }
       }, [])
     console.log(weightclass[2])
    //    let index = 0;
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

       const pickerRef = useRef();

        function open() {
        pickerRef.current.focus();
        }

        function close() {
        pickerRef.current.blur();
        }
        console.log(id.fighters)
        return(
        <View>
        <ModalSelector
                    data={data}
                    initValue="Weightclasses"
                    listItemAccessible={true}
                    accessible={true}
                    cancelButtonAccessibilityLabel={'Exit'}
                    keyExtractor={(data) => data.key }
                    // visible={false}
                    onChange={(option)=>{setID(option.key.fighters); setVisible(true)}}
                     />

        <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={visible}>
                    <SafeAreaView> 
                    <ScrollView>                   
                <View style={{width: '100%',alignItems: 'center', justifyContent:'center', color: 'black', paddingBottom:'50%'}}>
                    {id.map((foiters) => {
                        return (
                            <View>
                         <Text>{foiters.name}</Text>
                         <Text>{foiters.nickname}</Text>
                         <Text>{foiters.fight_record}</Text>
                         <Text>{foiters.height}</Text>
                         <Text>{foiters.weight}</Text>
                         <Text>{foiters.reach}</Text>
                         </View>
                    )})}
               
                </View>
                </ScrollView>
                </SafeAreaView> 
                </Modal>
            </View>
            </View>
    )
}