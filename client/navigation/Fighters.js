import React,{useEffect,useState} from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import ModalSelector from 'react-native-modal-selector'


export default function Fighters ({navigation}) {

    const[weightclass,setWeightclass] = useState([]);

    useEffect(() => {
        try {
        (async() => {
            let req = await fetch('http://172.22.219.116:3000/weightclasses')
            let res = await req.json()
            setWeightclass(res)
        })()  }
        catch (error) {
            console.log(error)
        }
       }, [])
       console.log(weightclass[0].id)
       let index = 0;
       const data = [
           { key: null, section: true, label: 'Choose Weightclass'},
           { key: weightclass[0].id, label: 'Flyweight' },
           { key: weightclass[1].id, label: 'Bantamweight' },
           { key: weightclass[2].id, label: 'Featherweight' },
           { key: weightclass[3].id, label: 'Lightweight' },
           { key: weightclass[4].id, label: 'Welterweight' },
           { key: weightclass[5].id, label: 'Middleweight' },
           { key: weightclass[6].id, label: 'Light Heavyweight' },
           { key: weightclass[7].id, label: 'Heavyweight' },
           { key: weightclass[8].id, label: "Womens's Strawweight" },
           { key: weightclass[9].id, label: "Womens's Flyweight" },
           { key: weightclass[10].id, label: "Womens's Bantamweight" },
           { key: weightclass[11].id, label: "Womens's Featherweight" }
       ];

    return(
        <ModalSelector
                    data={data}
                    initValue="Weightclasses"
                    onChange={(option)=>{ alert(`${option.label} has been chosen`) }} />
    )
}