import React,{useEffect,useState} from 'react';
import {View, Text} from 'react-native';
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
     console.log(weightclass)
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

    return(
     
        <ModalSelector
                    data={data}
                    initValue="Weightclasses"
                    visible={false}
                    onChange={(option)=>{ alert(`${option.key.fighters[0].name} has been chosen`) }}
                    keyExtractor={(data) => data.key } />
    )
}