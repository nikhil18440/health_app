import { View, Text, ScrollView, StyleSheet, Image, Pressable } from 'react-native'
import {GoArrowUpRight, GoBell, GoBellFill, GoHomeFill} from 'react-icons/go'
import {LuBrain, LuWeight} from 'react-icons/lu'
import {FaBrain} from 'react-icons/fa'
import React from 'react'
import CircularProgress from 'react-native-circular-progress-indicator';
import { Link } from 'expo-router';
import { GiTwoCoins } from "react-icons/gi";

const Home = () => {

    const day = new Date().getDate()
    const month = new Date().getMonth()

    const getDayName = () => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return days[new Date().getDay()];
    };

    const monthNames = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
      ];
      
      const currentMonthName = monthNames[new Date().getMonth()];

  return (
    <ScrollView style={styles.sView}>

      <View style={styles.topbar}>
        <View style={styles.topLeft}> 
            <Text style={styles.topLeftText1}>Hello,</Text>
            <Text style={styles.topLeftText2}>Nikhil.k</Text>
        </View>
        <View style={styles.topRight}> 
            <View style={styles.bellBox}>
                <GoBell style={styles.bellBoxIcon} color='black'/>
            </View>
            <Link style={styles.profile} href={'/ProfileScreen'}>
                <Image style={styles.profilePic} source={require('@/assets/images/ppic.jpg')}/>
            </Link>
        </View>
      </View>

      <View style={styles.progressDiv}>
        <Image style={styles.progressPic} source={require('@/assets/images/gym2.jpeg')}/>
        <Text style={styles.progressDivHead}>Progress</Text>
        <View style={styles.pbar}>
        <CircularProgress
        
  value={100}
  radius={50}
  progressValueColor={'#fff'}
  duration={10000}
  strokeColorConfig={[
    { color: 'white', value: 0 },
    { color: 'white', value: 50 },
    { color: '#795BF6', value: 100 },
  ]}
/>
        </View>

        <View style={styles.bottomDiv}>
            <Text style={styles.bottomDivDate}>{getDayName()}, {day}, {currentMonthName}</Text>
            <Link style={styles.bottomDivBtn} href={'/PhysicalHealth'}>
                <Text style={styles.bottomDivText}>Continue the excercise</Text>
                <View style={styles.arrowDiv}>
                    <GoArrowUpRight color='white' size={15}/>
                </View>
            </Link>
        </View>

      </View>

      <View style={styles.midDiv}>

        <View style={styles.midLeft}>
            <View style={styles.midDivsTop}>
                <View style={styles.midDivsTopImg}><LuWeight color='black' size={20}/></View>
                <View style={styles.midDivsTopText}>Calories</View>
            </View>
        </View>
        <View style={styles.midRight}>
            <View style={styles.midDivsTop}>
                <View style={styles.midDivsTopImg}></View>
                <View style={styles.midDivsTopText}>Calories</View>
            </View>
        </View>

        {/* <View style={styles.midRight}></View> */}
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

export default Home

const styles = StyleSheet.create({
    bottomBar:{
        backgroundColor: '#BCB4FD',
        width: '90%',
        height: 50,
        position: 'fixed',
        bottom: 40,
        borderRadius: 15,
        left: 20,
        right: 20,
        display: 'flex',
        alignItems:'center',
        justifyContent: 'space-evenly',
        flexDirection:'row'
    },
    midDivsTopImg:{
        backgroundColor: 'yellowgreen'
    },
    midDiv:{
        width:'100vw',
        height: 200,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 30
    },
    midLeft:{
        width: '45%',
        height: '100%',
        backgroundColor: '#2b192f',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    midRight:{
        width: '45%',
        height: '100%',
        backgroundColor: '#2b192f',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    arrowDiv:{
        backgroundColor: '#795BF6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: '50%'
    },
    bottomDivDate:{
        color: 'white',
        fontSize: 17,
        position: 'absolute',
        bottom: 80,
        left: 20,
        zIndex: 999,
    },
    bottomDivText:{
        fontSize: 15,
        padding: 5
    },
    bottomDivBtn:{
        backgroundColor:'white',
        position: 'absolute',
        bottom: 20,
        left: 20,
        zIndex: 999,
        width: '90%',
        borderRadius: 10,
        padding: 7,
        color: '#454545',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    progressDivHead:{
        position: 'absolute',
        top: 20,
        left: 20,
        fontSize: 25,
        fontWeight: 700,
        zIndex: 999,
        color: 'whitesmoke'
    },
    pbar:{
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 999
    },
    progressPic:{
        width: '100%',
        height: 300,
        position: 'relative',
        zIndex: -1
    },
    progressDiv:{
        margin: 'auto',
        marginTop: 50,
        height:300,
        width:'92vw',
        overflow: 'hidden',
        borderRadius: 20,
        position: 'relative'
    },
    topbar: {
        height: 50,
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        alignContent:'center'
    },
    sView:{
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    },
    profilePic:{
        width: 50,
        height: 50,
        borderRadius: '50%',
        marginLeft: 10
    },
    topLeftText1:{
        fontSize: 20,
        color: 'gray'
    },
    topLeftText2:{
        fontSize: 20,
        color: 'white'

    },
    topRight:{
        display:'flex',
        flexDirection:"row",

    },
    bellBox:{
        width: 50,
        height:50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'whitesmoke',
        borderRadius: '50%'
    },
    bellBoxIcon:{
        width: 36,
        height :36
    },

})