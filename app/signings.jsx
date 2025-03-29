import { View, Text, StyleSheet, ImageBackground, Image, TextInput, Pressable } from 'react-native'
import React from 'react'

const signings = () => {
  return (
    
    <View style={styles.container}>

        <View style={styles.Top}>
        <Image source={require('@/assets/images/google.png')}/>
        </View>

        <View style={styles.Bottom}>
            <Pressable>
                <Text>Sign In</Text>
            </Pressable>
            <Pressable>
                <Text>Sign Up</Text>
            </Pressable>
    </View>

    </View>
    
  )
}

export default signings

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#14A4FE',
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
        backgroundColor: 'white',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
    }
})