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
    //  console.log(item.img)
       return (
           <View style={styles.item}>
    <Image source={{uri:item.img}} style={styles.images} />
        {/* <Text style={styles.title}>{item.name}</Text> */}
        </View>
       )
       
    }
    
    return (
        <View>
            <FlatList style={styles.container}
                data={fighters}
                numColumns={8}
                renderItem={_renderItem}
            />
            </View>
        
    )
    }
const styles = StyleSheet.create ({
    container: {
        // flex: 1,
        // marginBottom: 500,
        display:'flex',
        // flexDirection: 'vertical',
      },
      item: {
        backgroundColor: 'purple',
        padding: 4,
        marginVertical: 1,
        marginHorizontal: 1,
      },
      title: {
        fontSize: 6,
        color: 'white',
      },
      images: {
          height: 70,
          width: 39
      },
    });
