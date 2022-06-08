import React, { Fragment } from 'react'
import { render } from 'react-dom'
import {
    StyleSheet, 
    Text,
    FlatList, 
    Image, 
    View,
    StatusBar
} from 'react-native'

export default function FighterGrid({fighters}) {
    

   const _renderItem = ({item, index}) => {
     console.log(item.img)
       return (
           <View style={styles.item}>
    <Image resizeMode="contain" source={item.img} style={{width: '150px', height: '150px'}} />
        <Text style={styles.title}>{item.name}</Text>
        </View>
       )
       
    }
    
    return (
        <View>
            <FlatList style={styles.container}
                data={fighters}
                numColumns={4}
                renderItem={_renderItem}
            />
            </View>
        
    )
    }
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        marginBottom: 500,
      },
      item: {
        backgroundColor: 'purple',
        padding: 15,
        marginVertical: 4,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 16,
        color: 'white',
      },
    });
