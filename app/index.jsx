import { View, Text, StyleSheet, ImageBackground, Image, TextInput, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    
    <View style={styles.container1}>

        <View style={styles.Top}>
          <Image style={styles.TopImg} source={require('@/assets/images/heart.png')}/>
          <Text style={styles.title}>Health App</Text>
        </View>

        <View style={styles.Bottom}>
            <Link href={'/login'} style={styles.button}>
                <Text>Sign In</Text>
            </Link>
            <Link href={'/signup'} style={styles.button}>
                <Text>Sign Up</Text>
            </Link>

    </View>

    </View>
    
  )
}

export default index

const styles = StyleSheet.create({
    container1: {
        backgroundColor: '#795BF6',
        width: '100%',
        height: '100%',
    },
    Top: {
        height: '50%',
        width: '100%',
        // backgroundColor: 'red'
    },
    Bottom: {
        height: '50%',
        width: '100%',
        backgroundColor: 'black',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button:{
      backgroundColor: 'white',
      borderColor: '#14A4FE',
      borderWidth: 1,
      borderRadius: 10,
      width: 300,
      padding: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10
  },
  TopImg:{
    width: '100%',
    height: '70%'
  },
  title:{
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    fontWeight: '700'
  }
})