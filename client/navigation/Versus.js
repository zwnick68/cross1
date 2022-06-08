import * as React from 'react';
import {View, Text,Image} from 'react-native';


export default function Versus ({navigation,fighters}) {
    console.log(fighters)
    return(
        <View style={{ flex: 1, alignItems:'center', justifyContent: 'center'}}>
            <Text 
                onPress={() => navigation.navigate('Fighters')}
                style={{fontsize: 30, fontWeight: 'bold'}}>Versus</Text>
               
                {fighters.map((element) => {
                return(
                    <Text>{element.name}</Text>
                )
            })}
            
        </View>
    )
}