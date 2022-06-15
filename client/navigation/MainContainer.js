import React,{useState,useEffect} from 'react';
import { View, Text, Settings,StyleSheet } from 'react-native';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons,AntDesign,Entypo } from '@expo/vector-icons';
import Versus from './Versus'
import Fighters from './Fighters'

const versus = 'Versus'
const fightersPage = 'Fighters'
const settings = "Settings"
const news = "News"

const Tab = createBottomTabNavigator();

const navTheme = DefaultTheme;
navTheme.colors.background = 'black'

export default function MainContainer(){
    
    
return (
    <NavigationContainer theme={navTheme}>
        <Tab.Navigator 
        initialRouteName={versus}
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
                  else if (rn === news) {
                    iconName = focused ? 'settings' : 'settings-outline'
                }

                  return <Ionicons name={iconName} size={size} color={color}/>
              },  
        }) }
                tabBarOptions={{
                    activeTintColor: 'purple', 
                    inactiveTintColor: 'grey', 
                    labelStyle: { paddingBottom: 5, fontSize: 11}, 
                    // style: {padding: 10, height: 70},
                    activeBackgroundColor: "#000000",
                    inactiveBackgroundColor: "#000000",
                    barStyle: "#000000"
                }}
        
        >
            
            {/* <Tab.Screen style={styles.background} name={news} children={() => <News/>}/> */}
            <Tab.Group screenOptions={{ headerStyle: { backgroundColor: 'purple' } }}>
            <Tab.Screen style={styles.background} name={fightersPage} children={() => <Fighters/>}/>
            <Tab.Screen style={styles.background} name={versus} children={() => <Versus/>}/>
            <Tab.Screen style={styles.background} name={settings} children={() => <Settings/>}/>
            </Tab.Group>
        </Tab.Navigator >
    </NavigationContainer>
)}

const styles = StyleSheet.create({
    background: {
        justifyContent: 'center'
    },
    title: {
        color: 'white'
    }
})

