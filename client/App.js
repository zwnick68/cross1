import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput, Scroll, Alert } from 'react-native';
import { useEffect, useState } from 'react';

import MainContainer from './navigation/MainContainer';

export default function App() {
 
  const styles = StyleSheet.create({
    background: {
      backgroundColor: 'black'
    },
  })
  
  return (
    
   <MainContainer styles={styles.background}>
     <View styles={styles.background}>

     </View>
   </MainContainer>
  );
};

