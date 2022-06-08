import React,{useState,useEffect} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
//screens
import Versus from './Versus';
import Fighters from './Fighters';

const versus = 'Versus';
const fightersPage = 'Fighters';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    const[fighters, setFighters] = useState([])
    useEffect(() => {
        (async() => {
            let req = await fetch('http://127.0.0.1:3000/fighters')
            if (req.ok){
            let res = await req.json()
            setFighters(res)}
            else (req.catch(error)) 
        })()   
       }, [])
return (
    <NavigationContainer>
        <Tab.Navigator
        initialRouteName={versus}
        screenOptions={({route}) =>({
              tabBarIcon: ({focused, color, size}) => {
                  let iconName;
                  let rn = route.name;

                  if (rn === versus) {
                      iconName = focused ? 'home' : 'home-outline'
                  }
                  else if (rn === fightersPage) {
                      iconName = focused ? 'list' : 'list-outline'
                  }

                  return <Ionicons name={iconName} size={size} color={color}/>
              },  
        }) }
                tabBarOptions={{
                    activeTintColor: 'tomato', 
                    inactiveTintColor: 'grey', 
                    labelStyle: { paddingBottom: 10, fontSize: 10}, 
                    style: {padding: 10, height: 70}
                }}
        
        >

            <Tab.Screen style= {{alignItems: 'center'}} name={versus} children={() => <Versus fighters={fighters}/>}
            />
            <Tab.Screen name={fightersPage} children={() => <Fighters fighters={fighters}/>}/>

        </Tab.Navigator>
    </NavigationContainer>
)}

