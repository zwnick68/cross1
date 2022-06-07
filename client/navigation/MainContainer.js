import * as React from 'react';
import { View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
//screens
import Versus from './Versus';
import Fighters from './Fighters';

const versus = 'Versus';
const fighters = 'Fighters';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
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
                  else if (rn === fighters) {
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

            <Tab.Screen name={versus} component={Versus}/>
            <Tab.Screen name={fighters} component={Fighters}/>

        </Tab.Navigator>
    </NavigationContainer>
)}

