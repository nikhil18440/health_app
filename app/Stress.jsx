import { View, Text, StyleSheet, ImageBackground, Dimensions, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import { Linking } from 'react-native';

const Stress = () => {

    

const makeCall = (phoneNumber) => {
  const url = `tel:${phoneNumber}`;
  Linking.openURL(url).catch(err => console.error("Could not open dialer", err));
};




  return (
    // <View>
    <ScrollView style={styles.mainDiv}>
      {/* <Text>Stress</Text> */}
      <Text style={styles.desc}><b>Stress</b> is a common part of daily life that everyone experiences. It can arise from various sources, like work, studies, relationships, or financial issues. While a little stress can motivate us to stay focused and productive, too much of it can lead to negative effects on our health, mood, and overall well-being. Learning to manage stress through healthy habits like regular exercise, proper sleep, and relaxation techniques can help us handle daily challenges more effectively.</Text>
    
       <Text style={[styles.para2, styles.paraHead]}>To control stress effectively, consider these measures:</Text>

<Text style={styles.para2}>1. Exercise Regularly: Physical activity releases endorphins, which can boost mood and reduce stress.</Text>


<Text style={styles.para2}>2. Practice Relaxation Techniques: Deep breathing, meditation, and yoga can help calm the mind.</Text>


<Text style={styles.para2}>3. Maintain a Healthy Lifestyle: Eat a balanced diet, stay hydrated, and get enough sleep.</Text>


<Text style={styles.para2}>4. Manage Time Effectively: Plan your tasks, set priorities, and avoid procrastination.</Text>


<Text style={styles.para2}>5. Talk to Someone: Share your feelings with a friend, family member, or counselor.</Text>


<Text style={styles.para2}>6. Take Breaks: Short breaks during work or study can help refresh your mind.</Text>


<Text style={styles.para2}>7. Limit Caffeine and Alcohol: These can increase stress levels if consumed excessively.</Text>



<Text style={styles.para2}>By applying these strategies, you can better handle stress and maintain a healthier, more balanced life.</Text> 

<iframe style={styles.ytubeVid} width="400" height="300" src="https://www.youtube.com/embed/U5odrIsm-60?si=enaFSLQ5Y45Bm3_9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<Text style={styles.DocHead}>Contact a Doctor</Text>



<Text style={styles.DocName}>Dr. Nicy salam</Text>
<Text style={styles.DocSubHead}>Consultant psychiatrist</Text>
<Text style={styles.DocText}>More than 10 years of experience in the field of Psychiatry, including 4 years of teaching in experience in different Medical Colleges</Text>

<Pressable style={styles.callIcon} onPress={() => makeCall()}>
        <Image source={require('@/assets/images/call.png')} style={styles.callImg}/>
        <Text style={styles.buttonText}>Book an Appointment</Text>
</Pressable>

</ScrollView>

    
  )
}

export default Stress

const styles = StyleSheet.create({
   
    container: {
        width: Dimensions.get('window').width,
        // height: Dimensions.get('window').height,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex:-1,
        // height: '100%',
        // overflowY: 'scroll',

    },
    desc: {
        padding: 15,
        fontSize: 30
    },
    para2: {
        padding: 10,
        fontSize: 30
    },
    paraHead:{
        fontWeight:700
    },
    ytubeVid:{
        margin: 'auto'
    },
    DocHead: {
        padding: 15,
        margin: 'auto',
        fontSize: 30,
        fontWeight: '700'
    },
    DocName:{
        padding: 10,
        paddingBottom: 5,
        fontSize:30
    },
    DocSubHead: {
        padding: 10,
        paddingBottom: 5,
        fontSize:30
    },
    DocText: {
        padding: 10,
        paddingBottom: 5,
        fontSize:30
    },
    callIcon:{
        backgroundColor:'lime',
        width: '85%',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'row',
        padding: 15,
        borderRadius: 20,
        marginTop: 20
    },
    callImg: {
        height: 40,
        width: 40,
        padding:10
    },
    buttonText:{
        color:'white',
        fontSize:25,
        fontWeight: '700',
        marginLeft: 20
    },
    mainDiv:{
        // position: 'relative'
        // backgroundImage: require('@/assets/images/health.png'),
        // backgroundRepeat:'no-repeat',
        // backgroundAttachment:'fixed'
        backgroundColor:'transparent',
        overflowY:'scroll',
        // position: 'relative',
        // top:0,
        zIndex: 999,
        fontSize: 40
    },

})