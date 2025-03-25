import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {

  let points = 89

  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <View style={styles.titem}>
            {/* <Image source={require('@/assets/images/health.png')} style={styles.titemImg}/> */}
            <View style={styles.titemImg}>
              <View style={styles.titemImgCircle}>
                <Text style={styles.titemImgText}>{points}</Text>
                
              </View>
              
            </View>
            <View style={styles.titemText}>
              <Text style={styles.titemText1}>Points</Text>
              <Text style={styles.titemText2}>do more tasks daily to earn more points and redeem them to get rewards</Text>
            </View>
        </View>
      </View>
      
      <View style={styles.middle}>
        <View style={styles.titem}>
              {/* <Image source={require('@/assets/images/health.png')} style={styles.titemImg}/> */}
              <Image source={require('@/assets/images/muscle.png')} style={styles.mitem}/>
              <View style={styles.titemText}>
                <Text style={styles.titemText1}>Physical Health</Text>
                <Text style={styles.titemText2}>focus on physical health</Text>
              </View>
          </View>
      </View>

      <View style={styles.bottom}>
      <Link style={styles.titem} href='/MentalHealth'>
            {/* <Image source={require('@/assets/images/health.png')} style={styles.titemImg}/> */}
            <Image source={require('@/assets/images/brain.png')} style={styles.mitem}/>
            
            <View style={styles.titemText}>
              <Text style={styles.titemText1}>Mental Health</Text>
              <Text style={styles.titemText2}>focus on physical health</Text>
            </View>
        </Link>
      </View>
    


    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'whitesmoke'
    },
    top:{
        height: '25vh',
        width: '100%',
        padding: 20,
        
    },
    middle: {
      height: '25vh',
        width: '100%',
        padding: 20,

    },
    bottom:{
        height: '25vh',
        width: '100%',
        padding: 20,
        // backgroundColor: 'blue'
    },
    titem: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row'
    },
    brow: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },
    bitem: {
        width: 'calc(50vw - 40px)',
        height: '20vh',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20
    },
    // titemImg:{
      
    //   resizeMode: 'contain',
    //   backgroundColor: 'lime',
    //   borderRadius: '50%',
    // },
    titemText: {
      // flex: 1
      width: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 30
    },
    titemImg:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    titemImgCircle:{
      backgroundColor:'lime',
      width: 100,
      height: 100,
      margin: 20,
      borderRadius: '50%',
        position: 'relative'
    },
    titemImgText: {
      // position: 'absolute',
      // top:'50%',
      // left:'50%',
      // right: '50%'
      margin: 'auto',
      color: 'white',
      fontSize: 30,
      fontWeight: 700
    },
    titemText1:{
      fontSize: 20,
    },
    titemText2:{
      textAlign: 'center'
    },
    mitem:{
      width: '40%',
      height: '100%', 
      resizeMode: 'contain',
    }

})