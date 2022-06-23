import React,{useRef,useEffect,useState} from 'react';
import {View, Text,ScrollView,Modal, StyleSheet,Image,Pressable,Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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
                            
                                    <Modal
                                     animationType='fade'
                                     statusBarTranslucent={false}
                                    visible={visible}
                                    hardwareAccelerated={true}
                                    onRequestClose={() => {
                                    alert("Modal has been closed.");
                                    setVisible(!visible);
                                             }}
                                             
                                        > 
                                        
                                        <LinearGradient 
                                            colors={['black', 'gray']} 
                                            start={{
                                                x: 0,
                                                y: 0
                                            }}
                                            end={{
                                                x: 1,
                                                y: 1
                                            }}
                                            style={styles.modal}
                                            >
                                        <View>

                                            


                                           
                                        
                                            <Image source={{uri:display.img}} style={styles.modalImage}/>
                                            <Pressable style={styles.modalButton} onPressOut={()=> setVisible(false)}>
                                                <Text style={{textAlign:'center', color: 'white', fontFamily: 'monospace', fontSize: 15}}>Exit</Text>
                                            </Pressable>
                                            
                                            <Text style={{color: 'white', fontFamily: 'monospace', fontSize: 25, textAlign: 'center', paddingTop: 50, fontWeight: "bold"}}>{display.name}</Text>
                                            <Text style={{color: 'white', fontFamily: 'monospace', fontSize: 20, textAlign: 'center', paddingTop: 30, paddingLeft: 170}}>Record: {display.fight_record}</Text>
                                            <Text style={{color: 'white', fontFamily: 'monospace', fontSize: 20, textAlign: 'center', paddingTop: 26, paddingLeft: 170}}>Age: {display.age}</Text>
                                            <Text style={{color: 'white', fontFamily: 'monospace', fontSize: 20, textAlign: 'center', paddingTop: 26, paddingLeft: 190}}>Height: {display.height}</Text>
                                            <Text style={{color: 'white', fontFamily: 'monospace', fontSize: 20, textAlign: 'center', paddingTop: 26, paddingLeft: 210}}>Weight: {display.weight}</Text>
                                            <Text style={{color: 'white', fontFamily: 'monospace', fontSize: 20, textAlign: 'center', paddingTop: 26, paddingLeft: 225}}>UFC Debut: {display.octagon_debut}</Text>
                                            <Text style={{color: 'white', fontFamily: 'monospace', fontSize: 20, textAlign: 'center', paddingTop: 26, paddingLeft: 240}}>Reach: {display.reach}</Text>
                                            <Text style={{color: 'white', fontFamily: 'monospace', fontSize: 20, textAlign: 'center', paddingTop: 26, paddingLeft: 200}}>Leg Reach: {display.leg_reach}</Text>
                                            <Text style={{color: 'white', fontFamily: 'monospace', fontSize: 15, textAlign: 'center', paddingTop: 12, paddingRight: 275}}>Str. Acc: {display.strAcc}</Text>
                                            <Text style={{color: 'white', fontFamily: 'monospace', fontSize: 15, textAlign: 'center', paddingTop: 12, paddingRight: 275}}>Str. Def: {display.strDef}</Text>
                                            <Text style={{color: 'white', fontFamily: 'monospace', fontSize: 13, textAlign: 'center', paddingTop: 12, paddingRight: 270}}>Sig. Str. Landed Per Min: {display.slpm}</Text>
                                            <Text style={{color: 'white', fontFamily: 'monospace', fontSize: 13, textAlign: 'center', paddingTop: 12, paddingRight: 270}}>Sig. Str. Absorbed Per Min: {display.sabpm}</Text>
                                            <Text style={{color: 'white', fontFamily: 'monospace', fontSize: 15, textAlign: 'center', top: 490, right: 155, position: 'absolute'}}>TD Acc: {display.grpAcc}</Text>
                                            <Text style={{color: 'white', fontFamily: 'monospace', fontSize: 15, textAlign: 'center', top: 522, right: 163, position: 'absolute'}}>TD Def: {display.tdDef}</Text>
                                            <Text style={{color: 'white', fontFamily: 'monospace', fontSize: 15, textAlign: 'center', top: 554, right: 163, position: 'absolute'}}>TD Avg: {display.tdDef}</Text>
                                            <Text style={{color: 'white', fontFamily: 'monospace', fontSize: 15, textAlign: 'center', top: 586, right: 157, position: 'absolute'}}>Sub Avg: {display.tdDef}</Text>
                                            <Text style={{color: 'white', fontFamily: 'monospace', fontSize: 15, textAlign: 'center', top: 490, right: 17, position: 'absolute'}}>KD Ratio: {display.knockdown_ratio}</Text>
                                            <Text style={{color: 'white', fontFamily: 'monospace', fontSize: 15, textAlign: 'center', top: 520, right: 17, position: 'absolute'}}>Avg Ft: {display.avgFt}</Text>



                                            
                                        </View>  
                                        </LinearGradient>               
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
        paddingLeft: 10,

    },
    textContainer: {
        paddingLeft: 60

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
        height: 85,
        width: 56, 
        resizeMode: 'cover',
        position: 'absolute'
        // top: 8,
        // left: 1,
        // bottom: 2,
        // zIndex: -1
        // height: 90,
        // width: 90,
        // right: 50,
        // position: 'absolute'
    }, 
    modal: {
        margin: 0,
        flex: 1, 
        color: 'white', 
        fontWeight: 'bold',
        // alignItems: 'center', 
        fontColor: "white"
    }, 
    modalView: {
       
        
        alignItems: 'center',
        
    },
    modalButton: {
        width: 55,
        height: 25,
        borderRadius: 15, 
        top: 15,
        left: 10,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor:'#2e2c2e',
        position: "absolute",
        zIndex: 1
    }, 
    modalImage: {
        // bottom: 30,
        width: 250, 
        height: 580,
        resizeMode: "contain", 
        position: 'absolute'

    }
})