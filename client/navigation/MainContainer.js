import React,{useState,useEffect} from 'react';
import { View, Text, Settings,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons,AntDesign,Entypo } from '@expo/vector-icons';
import Versus from './Versus'
import Fighters from './Fighters'

const versus = 'Versus'
const fightersPage = 'Fighters'
const settings = "Settings"
const news = "News"

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    
    
return (
    <NavigationContainer style={styles.background}>
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
                  else if (rn === settings) {
                      iconName = focused ? 'settings' : 'settings-outline'
                  }
                  else if (rn === news) {
                    iconName = focused ? 'settings' : 'settings-outline'
                }

                  return <Ionicons name={iconName} size={size} color={color}/>
              },  
        }) }
                tabBarOptions={{
                    activeTintColor: 'purple', 
                    inactiveTintColor: 'grey', 
                    labelStyle: { paddingBottom: 10, fontSize: 10}, 
                    style: {padding: 10, height: 70},
                    activeBackgroundColor: "black"
                }}
        
        >
            
            <Tab.Screen name={news} children={() => <News/>}/>
            <Tab.Screen name={fightersPage} children={() => <Fighters/>}/>
            <Tab.Screen name={versus} children={() => <Versus/>}/>
            <Tab.Screen name={settings} children={() => <Settings/>}/>

        </Tab.Navigator>
    </NavigationContainer>
)}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'black'
    }
})

