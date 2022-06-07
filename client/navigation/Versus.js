import * as React from 'react';
import {View, Text} from 'react-native';


export default function Versus ({navigation}) {
    return(
        <View style={{ flex: 1, alignItems:'center', justifyContent: 'center'}}>
            <Text 
                onPress={() => navigation.navigate('Versus')}
                style={{fontsize: 30, fontWeight: 'bold'}}>Versus</Text>
        </View>
    )
}