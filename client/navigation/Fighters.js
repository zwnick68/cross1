import React,{useEffect,useState} from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';


export default function Fighters ({navigation}) {
    const[weightclass,setWeightclass] = useState();
    useEffect(() => {
        (async() => {
            let req = await fetch('http://localhost:3000/weightclasses')
            let res = await req.json()
            setWeightclass(res)
        })()   
       }, [])

    return(
        <View style={{ flex: 1, alignItems:'center', justifyContent: 'center'}}>
            <Text 
                onPress={() => navigation.navigate('Fighters')}
                style={{fontsize: 30, fontWeight: 'bold'}}>Fighters</Text>
                <Picker
                selectedValue={weightclass}
                        onValueChange={(itemValue, itemIndex) =>
                             setWeightclass(itemValue)
                             }>
                        <Picker.Item label="Bantamweight" value="bantamweight" />
                        <Picker.Item label="Featherweight" value="js" />
                </Picker>
        </View>
    )
}