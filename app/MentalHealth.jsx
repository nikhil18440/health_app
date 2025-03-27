import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const MentalHealth = () => {
  return (
    <View style={styles.container}>
      <Pressable style={[styles.Box, styles.Box1]} href='/Stress'>Stress</Pressable>
      <Pressable style={[styles.Box, styles.Box2]} href='/Bipolar'>Bipolar Disorder</Pressable>
      <Pressable style={[styles.Box, styles.Box3]} href='/Anxiety'>stress</Pressable>
      <Pressable style={[styles.Box, styles.Box4]} href='/Anxiety'>stress</Pressable>
      <Pressable style={[styles.Box, styles.Box5]} href='/pullUp'>stress</Pressable>
      <Pressable style={[styles.Box, styles.Box6]} href='/Anxiety'>stress</Pressable>
      
    </View>
  )
}

export default MentalHealth

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%'
  },
  Box: {
    margin: 10,
    textAlign: 'center',
    borderRadius: 20,
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 25,
    color: 'white',
    fontWeight: '800'
  },
  Box1:{
    backgroundColor: 'blue'
  },
  Box2: {
    backgroundColor:'lime'
  },
  Box3: {
    backgroundColor: 'orange'
  },
  Box4:{
    backgroundColor: 'violet'
  },
  Box5:{
    backgroundColor: 'red'
  },
  Box6: {
    backgroundColor: 'pink'
  },
})