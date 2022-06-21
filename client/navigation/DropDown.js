import React, {useRef,useState, useEffect} from 'react'
import {
    StyleSheet, 
    Text,
    FlatList, 
    Image, 
    View,
    PanResponder, 
    Animated,
    TouchableHighlight, 
    RefreshControl,
    ActivityIndicator, 
    Platform, 
    Modal,
    ImageBackground
} from 'react-native'
import Fighters from './Fighters'
// import Animated from 'react-native-reanimated'


export default function DropDown({fighters,visible,secondvisible,setVisible,selectedFighter,secondSelectedFighter,setSelectedFighter}) {
    // console.log(fighters)
    if (selectedFighter) {
        return(
        <View style ={styles.container}>
             <Text style={styles.name}>{selectedFighter.name} {selectedFighter.fight_record}</Text>
                <Text style={styles.age}>{selectedFighter.age}</Text>
                <Text style={styles.height}>{selectedFighter.height}</Text>
                <Text style={styles.weight}>{selectedFighter.weight}</Text>
                <Text style={styles.reach}>{selectedFighter.reach}</Text>
                <Text style={styles.legreach}>{selectedFighter.leg_reach}</Text>
                <Text style={styles.sslpm}>{selectedFighter.slpm}</Text>
                <Text style={styles.ssacc}>{selectedFighter.strAcc}</Text>
                <Text style={styles.tdavg}>{selectedFighter.tdAvg}</Text>
                <Text style={styles.tdacc}>{selectedFighter.grpAcc}</Text>
                <Text style={styles.subavg}>{selectedFighter.subAvg}</Text>
            <Image source={{uri:selectedFighter.img}} style={styles.images} />
        </View>
        )
    } 
    else if (selectedFighter==null) {
        return(
            <View></View>
        )
    }
    
//    if (secondSelectedFighter) {
//         return(
//             <View style ={styles.fighter2}>
//                 <Text>{secondSelectedFighter.name}</Text>
//             </View>
//         )
//     }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        // borderWidth: 1,
        // borderColor: 'white',
        borderRadius: 15,
        borderRightColor: '#2e2c2e',
        backgroundColor: '#2e2c2e',
        color: 'white',
        position: 'absolute',
        top: 180, 
        height: 335, 
        width: 150,
        // alignItems: 'center',

    }, 
    name: {
        alignItems: 'center',
        paddingTop: 5,
        paddingLeft: 17,
        // alignItems: 'flex-start',
        fontSize: 12,
        color: 'white',
        fontStyle: 'larger',
        fontWeight: 'bold',
        position: 'absolute',
        zIndex: 1
    },
    age: {
        paddingTop: 35,
        paddingLeft: 120,
        // alignItems: 'flex-start',
        fontSize: 13,
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        zIndex: 1
    },
    height: {
        paddingTop: 65,
        paddingLeft: 110,
        // alignItems: 'flex-start',
        fontSize: 13,
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        zIndex: 1
    },
    weight: {
        paddingTop: 95,
        paddingLeft: 105,
        // alignItems: 'flex-start',
        fontSize: 13,
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        zIndex: 1
    },
    reach: {
        paddingTop:125,
        paddingLeft: 110,
        // alignItems: 'flex-start',
        fontSize: 13,
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        zIndex: 1
    },
    legreach: {
        paddingTop: 155,
        paddingLeft: 110,
        // alignItems: 'flex-start',
        fontSize: 13,
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        zIndex: 1
    },
    sslpm: {
        paddingTop: 185,
        paddingLeft: 115,
        // alignItems: 'flex-start',
        fontSize: 13,
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        zIndex: 1
    },
    ssacc: {
        paddingTop: 215,
        paddingLeft: 115,
        // alignItems: 'flex-start',
        fontSize: 13,
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        zIndex: 1
    },
    tdavg: {
        paddingTop: 245,
        paddingLeft: 115,
        // alignItems: 'flex-start',
        fontSize: 13,
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        zIndex: 1
    },
    tdacc: {
        paddingTop: 273,
        paddingLeft: 115,
        // alignItems: 'flex-start',
        fontSize: 13,
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute',
        zIndex: 1
    },
    subavg: {
        paddingTop: 303,
        paddingLeft: 112,
        // alignItems: 'flex-start',
        fontSize: 13,
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        zIndex: 1
    },
    images: {
        top: 24,
        height:312,
        width: 100,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        right: -1,
        // transform: [{ scaleX: -1 }],
        resizeMode: 'cover',
        zIndex: -1
    }
    
})