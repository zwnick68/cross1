import * as React from 'react';
import {View, Text,FlatList} from 'react-native';
import FighterGrid from './FighterGrid';


export default function Versus ({navigation,fighters}) {
    // console.log(fighters)
    return(
        <View style={{ flex: 1, alignItems:'center', justifyContent: 'center'}}>
            {/* <Text 
                onPress={() => navigation.navigate('Fighters')}
                style={{fontsize: 10, fontWeight: 'bold'}}>Versus</Text> */}
                   <FighterGrid fighters={fighters}></FighterGrid>    
        </View>
    )
}

