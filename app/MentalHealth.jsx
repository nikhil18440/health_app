import { View, Text, Pressable, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { GiTwoCoins } from 'react-icons/gi'
import { GoHomeFill } from 'react-icons/go'
import { FaBrain } from 'react-icons/fa'

const MentalHealth = () => {
  return (
    <ScrollView style={styles.mainDiv}>
    <View style={styles.container}>

      <Link href={'/Stress'} style={styles.linkDiv}>
        <Text style={styles.linkDivText}>Stress</Text>
        <Image source={require('@/assets/images/stress.jpg')} style={styles.containerItem}/>
      </Link>

      <Link href={'/Bipolar'} style={styles.linkDiv}>
        <Text style={styles.linkDivText}>Bipolar Disorder</Text>
        <Image source={require('@/assets/images/bipolar.jpg')} style={styles.containerItem}/>
      </Link>

      <Link href={'/Depression'} style={styles.linkDiv}>
        <Text style={styles.linkDivText}>Depression</Text>
        <Image source={require('@/assets/images/anxiety.jpg')} style={styles.containerItem}/>
      </Link>

      <Link href={'/PTSD'} style={styles.linkDiv}>
        <Text style={styles.linkDivText}>PTSD</Text>
        <Image source={require('@/assets/images/ptsd.jpg')} style={styles.containerItem}/>
      </Link>

      <Link href={'/ADHD'} style={styles.linkDiv}>
        <Text style={styles.linkDivText}>ADHD</Text>
        <Image source={require('@/assets/images/adhd.jpg')} style={styles.containerItem}/>
      </Link>

      {/* <Pressable style={[styles.Box, styles.Box1]} href='/Stress'>Stress</Pressable>
      <Pressable style={[styles.Box, styles.Box2]} href='/Bipolar'>Bipolar Disorder</Pressable>
      <Pressable style={[styles.Box, styles.Box3]} href='/ADHD'>ADHD</Pressable> */}
      {/* <Pressable style={[styles.Box, styles.Box4]} href='/Anxiety'>stress</Pressable>
      <Pressable style={[styles.Box, styles.Box5]} href='/pullUp'>stress</Pressable>
      <Pressable style={[styles.Box, styles.Box6]} href='/Anxiety'>stress</Pressable> */}

      
      
    </View>
    <View style={styles.bottomBar}>
    <Link href={'/Redeem'} style={styles.bottomItem}>
        <GiTwoCoins size={25}/>
    </Link>
    <Link href={'/Home'} style={styles.bottomItem}>
        <GoHomeFill size={25}/>
    </Link>
    <Link href={'/MentalHealth'} style={styles.bottomItem}>
        <FaBrain size={25}/>
    </Link>
  </View>
  </ScrollView>
  )
}

export default MentalHealth

const styles = StyleSheet.create({
  bottomBar:{
    backgroundColor: '#BCB4FD',
    width: '90%',
    height: 50,
    position: 'sticky',
    bottom: 10,
    borderRadius: 15,
    left: 20,
    right: 20,
    display: 'flex',
    alignItems:'center',
    justifyContent: 'space-evenly',
    flexDirection:'row'
},
  container:{
    width: '100vw',
    height: '100vh',
    backgroundColor:'black',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-evenly',
    margin:'auto'
  },
  Box: {
    margin: 10,
    textAlign: 'center',
    borderRadius: 20,
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 25,
    color: 'white',
    fontWeight: '800',
    backgroundColor: 'gray'
  },
  containerItem:{
    width: '100%',
    height: '15vh',
    borderRadius: 20
    // marginRight: 20
    // margin: 10
  },
  linkDiv:{
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
    width: '100%'
    // justifyContent:'space-evenly'
  },
  mainDiv:{
    backgroundColor:'black'
  },
  linkDivText:{
    fontSize: 30,
    position:'absolute',
    zIndex:999,
    color:'white',
    fontWeight:800
  }
  // Box1:{
  //   backgroundColor: 'blue'
  // },
  // Box2: {
  //   backgroundColor:'lime'
  // },
  // Box3: {
  //   backgroundColor: 'orange'
  // },
  // Box4:{
  //   backgroundColor: 'violet'
  // },
  // Box5:{
  //   backgroundColor: 'red'
  // },
  // Box6: {
  //   backgroundColor: 'pink'
  // },
  // Box:{
  //   backgroundColor: 'whitesmoke'
  // }
})