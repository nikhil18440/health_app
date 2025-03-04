import { View, Text, StyleSheet,ImageBackground, Pressable } from 'react-native'
import React from 'react'
import testImg from '@/assets/images/test.png'
import { Link } from 'expo-router'

const app = () => {
  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={testImg}
        resizeMode='cover'
        style={styles.image}
      > */}
      <Text style={styles.textArea}>my app</Text>
      {/* </ImageBackground> */}

      <Link href="/explore">
        <Pressable>
          <Text>
            explore
          </Text>
        </Pressable>
      </Link>
      <Link href="/login">
        {/* <Pressable> */}
          <Text style={styles.login}>
            login
          </Text>
        {/* </Pressable> */}
      </Link>
      
      <Link href="/signings">
        {/* <Pressable> */}
          <Text style={styles.login}>
            Signings
          </Text>
        {/* </Pressable> */}
      </Link>
      
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '50%',
    // backgroundColor: 'red'
  },
  textArea: {
    width: '100%',
    height: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'red'
  },
  image: {
    resizeMode: 'cover',
    height: '50%',
    width: '50%'
  },
  login:{
    // color: 'white',
    fontSize: 20
  }

})