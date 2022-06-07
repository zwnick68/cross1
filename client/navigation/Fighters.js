import * as React from 'react';
import {View, Text} from 'react-native';


export default function Fighters ({navigation}) {
    return(
        <View style={{ flex: 1, alignItems:'center', justifyContent: 'center'}}>
            <Text 
                onPress={() => navigation.navigate('Fighters')}
                style={{fontsize: 30, fontWeight: 'bold'}}>Fighters</Text>
        </View>
    )
}