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


export default function DropDownTwo({visible,secondvisible,setVisible,selectedFighter,secondSelectedFighter}) {
    // console.log(secondSelectedFighter)
   if (secondSelectedFighter) {
        return(
            <View style ={styles.container}>
                <Text style={styles.name}>{secondSelectedFighter.name}</Text>
                <Text style={styles.age}>{secondSelectedFighter.age}</Text>
                <Text style={styles.height}>{secondSelectedFighter.height}</Text>
                <Text style={styles.weight}>{secondSelectedFighter.weight}</Text>
                <Text style={styles.reach}>{secondSelectedFighter.reach}</Text>
                <Text style={styles.legreach}>{secondSelectedFighter.leg_reach}</Text>
                <Text style={styles.sslpm}>{secondSelectedFighter.slpm}</Text>
                <Text style={styles.ssacc}>{secondSelectedFighter.strAcc}</Text>
                <Text style={styles.tdavg}>{secondSelectedFighter.tdAvg}</Text>
                <Text style={styles.tdacc}>{secondSelectedFighter.grpAcc}</Text>
                <Text style={styles.subavg}>{secondSelectedFighter.subAvg}</Text>
                <Image source={{uri:secondSelectedFighter.img}} style={styles.images} />
            </View>
        )
    }
    else if (secondSelectedFighter==null) {
        return(
            <View></View>
        )
    }
}
const styles = StyleSheet.create({ 
    container: {
        flexDirection: "column",
        // borderWidth: 1,
        // borderColor: 'white',
        borderRadius: 15,
        backgroundColor: '#2e2c2e',
        color: 'white',
        position: 'absolute',
        right: 5,
        top: 180,
        height: 335,
        width: 150, 
        // alignItems: 'center',
    }, 
    name: {
        alignItems: 'center',
        paddingTop: 5,
        paddingLeft: 30,
        // alignItems: 'flex-start',
        fontSize: 13,
        color: 'white',
        fontStyle: 'larger',
        fontWeight: 'bold',
        position: 'absolute',
        zIndex: 1
    },
    age: {
        paddingTop: 35,
        paddingLeft: 10,
        // alignItems: 'flex-start',
        fontSize: 13,
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        zIndex: 1
    },
    height: {
        paddingTop: 65,
        paddingLeft: 1,
        // alignItems: 'flex-start',
        fontSize: 13,
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        zIndex: 1
    },
    weight: {
        paddingTop: 95,
        paddingLeft: 2,
        // alignItems: 'flex-start',
        fontSize: 13,
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        zIndex: 1
    },
    reach: {
        paddingTop:125,
        paddingLeft: 7,
        // alignItems: 'flex-start',
        fontSize: 13,
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        zIndex: 1
    },
    legreach: {
        paddingTop: 155,
        paddingLeft: 10,
        // alignItems: 'flex-start',
        fontSize: 13,
        color: 'black',
        fontWeight: 'bold',
        position: 'absolute',
        zIndex: 1
    },
    sslpm: {
        paddingTop: 185,
        paddingLeft: 10,
        // alignItems: 'flex-start',
        fontSize: 13,
        color: 'black',
        fontWeight: 'bold',
        position: 'absolute',
        zIndex: 1
    },
    ssacc: {
        paddingTop: 215,
        paddingLeft: 10,
        // alignItems: 'flex-start',
        fontSize: 13,
        color: 'black',
        fontWeight: 'bold',
        position: 'absolute',
        zIndex: 1
    },
    tdavg: {
        paddingTop: 245,
        paddingLeft: 10,
        // alignItems: 'flex-start',
        fontSize: 13,
        color: 'black',
        fontWeight: 'bold',
        position: 'absolute',
        zIndex: 1
    },
    tdacc: {
        paddingTop: 273,
        paddingLeft: 10,
        // alignItems: 'flex-start',
        fontSize: 13,
        fontWeight: 'bold',
        color: 'black',
        position: 'absolute',
        zIndex: 1
    },
    subavg: {
        paddingTop: 303,
        paddingLeft: 10,
        // alignItems: 'flex-start',
        fontSize: 13,
        color: 'black',
        fontWeight: 'bold',
        position: 'absolute',
        zIndex: 1
    },
    
    images: {
        top: 5,
        height:328,
        width: 150,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        left: -2,
        transform: [{ scaleX: -1 }],
        resizeMode: 'cover',
        
    }
})