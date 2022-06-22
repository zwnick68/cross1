import React,{useRef,useEffect,useState} from 'react';
import {View, Text,ScrollView,Modal, StyleSheet,Image,Pressable,Button} from 'react-native';

export default function Individual ({foiters}) {
    const[visible,setVisible]=useState(false)
    const[display,setDisplay]=useState([])
    return(
                    <View>
                        
                        <View style={styles.pressableContainer}>
                            <Pressable onPressOut={()=> 
                            {setVisible(true)
                            setDisplay(foiters)
                            console.log(display)}}>
                            <View> 
                                    <Modal style={{margin: 0, backgroundColor: 'white'}}
                                     animationType='slide'
                                    visible={visible}
                                    hardwareAccelerated={true}
                                    onRequestClose={() => {
                                    alert("Modal has been closed.");
                                    setVisible(!visible);
                                             }}
                                        > 
                                        <View>
                                            <Text>{display.name}</Text>
                                            <Button onPress={()=> setVisible(false)}
                                            title="Back"
                                            ></Button>
                                        </View>                 
                                     </Modal>  
                                </View>
                            
                        <Image source={{uri:foiters.img}} style={styles.images}/>
                                    </Pressable>
                        <View style={styles.textContainer}> 
                        <Text style ={styles.ranking}>
                            {foiters.ranking}
                        </Text>   
                         <Text style ={styles.baseText}>
                            {foiters.name}
                         </Text>
                         <Text style ={styles.nickname}>
                            "{foiters.nickname}"
                         </Text>
                         <Text style ={styles.baseText}>
                            {foiters.fight_record}
                         </Text>
                         </View>
                         </View>
                         
                         </View>
    )

}
const styles = StyleSheet.create({

    baseText: {
        fontFamily: 'monospace',
        color: 'white',
        alignItems: 'flex-start'
},
ranking: {
    fontFamily: 'monospace',
    color: '#5a0b96',
    alignItems: 'flex-start'
},
baseText: {
    fontFamily: 'monospace',
    color: 'white',
    alignItems: 'flex-start'
},
nickname: {
    fontFamily: 'monospace',
    color: '#5a0b96',
    alignItems: 'flex-start'
},
baseText: {
    fontFamily: 'monospace',
    color: 'white',
    alignItems: 'flex-start'
},
    modalContainer: {
        paddingTop: 10,
        width: '100%',
        // alignItems: 'flex-start',
        justifyContent:'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    pressableContainer: {
        // flex: 1,
        paddingTop: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'white',
        paddingBottom: 10,
        marginBottom: 10,
        paddingLeft: 10

    },
    textContainer: {
        // paddingLeft: 60

    },
    contentContainer: {
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'lightgrey',
        // paddingTop: 50,
        // paddingBottom: 50,
        // zIndex: 2 
        // marginTop: OFFSET,
        
    }, 
    button1BtnStyle: {
        width: '70%',
        height: 35,
        backgroundColor: '#2e2c2e',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'white',
        color: 'white',
        bottom: 6
        
      }, 
    button1BtnTxtStyle: {color: 'white', fontFamily: 'monospace'},
    
    dropdownTextStyle: {
        color: 'white', fontFamily: 'monospace'
    }, 
    rowStyle: {
        backgroundColor: '#2e2c2e',
        // marginBottom: 10

    }, 
    images: {
        // flex: 1,
        // height: 350,
        // width: 400, 
        // resizeMode: 'contain',
        // position: 'absolute',
        // top: 8,
        // left: 10,
        // bottom: 200,
        // zIndex: -1
        height: 90,
        width: 90,
        right: 50,
        position: 'absolute'
    }
})