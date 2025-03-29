import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { GiTwoCoins } from 'react-icons/gi'
import { useStore } from '@/stateManagement';
// import gyro from 'gyroSupport'

const SitUps = () => {

    const {user,setUser} = useStore();

  return (
    <ScrollView style={styles.container}>
        
      <View style={styles.imgDiv}><Image style={styles.img} source={require('@/assets/images/situps.jpeg')}/></View>
      <Text style={styles.head}>Sit Ups</Text>

      <Text style={styles.task}><b>Task</b>: Do 30 sit ups</Text>
      <Text style={styles.reward}><b>Reward</b>: 10 coins <GiTwoCoins color='#795BF6' size={30}/></Text>
      <View style={styles.stepsDiv}>
        <Text style={styles.steps}><b>Steps:</b></Text>
        <Image style={styles.img2} source={require('@/assets/images/situpS.jpg')}/>
      </View>
      <Text style={styles.track}>Tracking: {0}</Text>
      <Pressable style={styles.btn} onPress={() => setUser({...user, coins:user.coins+10})}>Task Complete</Pressable>
    </ScrollView>
  )
}

export default SitUps

const styles = StyleSheet.create({
    stepsDiv:{
        margin: 20
    },
    steps:{
        color: 'white',
        fontSize: 25,
        fontWeight:700,
        textAlign:'center'
    },
    img2:{
        width: '90vw',
        height: 250,
        resizeMode:'contain',
        margin: 'auto',
        margin:5
    },
    container: {
        height: '100vh',
        width:'100vw',
        backgroundColor:'black'
    },
    img:{
        width:200,
        borderRadius: '50%',
        height: 200,
        margin:'auto'
    },
    imgDiv:{
        width:'100vw',
        padding: 20
    },
    head:{
        color:'white',
        fontSize: 30,
        fontWeight: 800,
        textAlign:'center'
    },
    task:{
        color:'white',
        fontSize: 23,
        textAlign:'center',
        marginTop: 30
    },reward:{
        width: '100%',
        color:'white',
        fontSize: 23,
        textAlign:'center',
        marginTop: 30,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'green'
    },
    track:{
        color: 'white',
        fontSize: 23,
        textAlign:'center',
        marginTop: 10
    },
    btn:{
        borderColor:'#795BF6',
        borderWidth: 2,
        color:'#795BF6',
        width: '90vw',
        textAlign: 'center',
        padding: 15,
        borderRadius: 20,
        marginTop: 20,
        alignSelf: 'center',
        marginBottom: 30,
        fontSize: 25
    }
})