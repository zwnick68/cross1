import React,{useState,useEffect} from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons,AntDesign,Entypo } from '@expo/vector-icons';
import Versus from './Versus'
import Fighters from './Fighters'
import Settings from './Settings'

import { LinearGradient } from 'expo-linear-gradient';

const versus = 'Versus'
const fightersPage = 'Fighters'
const settings = "Settings"


const Tab = createBottomTabNavigator();

const navTheme = DefaultTheme;
navTheme.colors.background = 'black'
navTheme.colors.text = 'white'




export default function MainContainer(){
    
    
return (
    
    <NavigationContainer theme={navTheme}>
    
    <Tab.Navigator 
        initialRouteName={fightersPage}
        screenOptions={
            
            ({route}) =>({

              tabBarIcon: ({focused, color, size}) => {
                 
                    let iconName;
                  let rn = route.name;

                  if (rn === versus) {
                      iconName = focused ? 'home' : 'home-outline'
                  }
                  else if (rn === fightersPage) {
                      iconName = focused ? 'list' : 'list-outline'
                  }
                  else if (rn === settings) {
                      iconName = focused ? 'settings' : 'settings-outline'
                  }

                  return <Ionicons name={iconName} size={size} color={color}/>
              },  
                            }) 
                        
                                }
                tabBarOptions={{
                    activeTintColor: '#5a0b96', 
                    inactiveTintColor: 'grey', 
                    labelStyle: { paddingBottom: 5, fontSize: 12.5}, 
                    // style: {padding: 10, height: 70},
                    activeBackgroundColor: "#000000",
                    inactiveBackgroundColor: "#000000",
                    barStyle: {
                        color: "#000000",
                        borderWidth: 10
                },
                    position: 'absolute',
                    fontFamily: 'monospace',
                    zIndex: 1,
                }}
        
        >
            
            <Tab.Group 
            screenOptions={{ 
                headerStyle: { 
                    backgroundColor: '#262525',
                    height: 60,
                    borderBottomLeftRadius:10,
                    borderBottomRightRadius:10
                                }, 
                headerTitleStyle: {
                fontFamily: 'monospace',
                fontWeight: 'bold',
                color: 'white',
                paddingBottom: 10,
                                },
                            }}>
            
            <Tab.Screen name={fightersPage} children={(yup) => <Fighters key={yup}/>}/>
            <Tab.Screen name={versus} children={() => <Versus/>}/>
            <Tab.Screen name={settings} children={() => <Settings/>}/>

            </Tab.Group>
        
        </Tab.Navigator >

    </NavigationContainer>
)}

const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'monospace'
},
    background: {
        justifyContent: 'center'
    },
    title: {
        color: 'white'
    }
})

