import { View, Text, StyleSheet, ImageBackground, Dimensions, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import { Linking } from 'react-native';

const Depression = () => {

    

const makeCall = (phoneNumber) => {
  const url = `tel:${phoneNumber}`;
  Linking.openURL(url).catch(err => console.error("Could not open dialer", err));
};




  return (
    // <View>
    <ScrollView style={styles.mainDiv}>
      {/* <Text>Stress</Text> */}
      <Text style={styles.desc}><b>Attention-Deficit/Hyperactivity Disorder (ADHD)</b> is a neurodevelopmental disorder that affects children, adolescents, and adults. It is characterized by persistent patterns of inattention, hyperactivity, and impulsivity that interfere with daily life, learning, and relationships.</Text>
    
       <Text style={[styles.para2, styles.paraHead]}>Depression is a mental health disorder characterized by persistent feelings of sadness, hopelessness, and a loss of interest in activities that one typically enjoys. It can also affect a person’s physical health, leading to changes in appetite, sleep patterns, and energy levels. Depression is more than just feeling down; it's a serious condition that can impact daily life and require treatment.</Text>

       <Text style={styles.text}>Symptoms of Depression:

<br/>Persistent sadness, emptiness, or hopelessness

<br/>Loss of interest in activities once enjoyed

<br/>Changes in appetite and weight

<br/>Sleep disturbances (insomnia or oversleeping)

<br/>Fatigue or lack of energy

<br/>Difficulty concentrating or making decisions

<br/>Feelings of worthlessness or excessive guilt

<br/>Thoughts of death or suicide</Text>

       <Text style={styles.text}>How to Control Depression:

<br/>1. Seek Professional Help:

Consult a mental health professional like a psychologist or psychiatrist for an accurate diagnosis.

Therapy or counseling can help address underlying issues.



<br/>2. Medication:

Antidepressants can be prescribed by psychiatrists to balance brain chemicals.

It's important to take medication as directed and discuss any side effects.



<br/>3. Lifestyle Changes:

Regular physical activity can increase the production of endorphins, which elevate mood.

Maintaining a balanced diet with adequate nutrition can impact mood positively.

Proper sleep hygiene: maintaining a regular sleep schedule and avoiding screens before bedtime.



<br/>4. Stress Management:

Practice relaxation techniques like deep breathing, meditation, or yoga.

Reduce stress by managing workload and maintaining a healthy work-life balance.



<br/>5. Social Support:

Talking to friends, family, or support groups can provide emotional support.

Avoid isolation, even if it feels comfortable.

</Text>



<iframe width="560" height="315" style={styles.ytubeVid} src="https://www.youtube.com/embed/NCc-EvGcUn0?si=XNDn8d8SCE1JBKZD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

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

export default Depression

const styles = StyleSheet.create({
  text:{
    color: 'white',
    fontSize: 28,
    padding: 15
  },
    mainDiv:{
        backgroundColor:'black',
        padding: 10
    },
   
    container: {
        width: Dimensions.get('window').width,
        // height: Dimensions.get('window').height,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex:-1,
        backgroundColor: 'black'
        // height: '100%',
        // overflowY: 'scroll',

    },
    desc: {
        padding: 15,
        fontSize: 30,
        color:'white'
    },
    para2: {
        padding: 10,
        color:'white',
        fontSize: 30
    },
    paraHead:{
        fontWeight:700,
        marginTop: 50
    },
    ytubeVid:{
        margin: 'auto'
    },
    DocHead: {
        padding: 15,
        margin: 'auto',
        fontSize: 30,
        color:'white',
        fontWeight: '700'
    },
    DocName:{
        padding: 10,
        paddingBottom: 5,
        color:'white',
        fontSize:30
    },
    DocSubHead: {
        padding: 10,
        paddingBottom: 5,
        color:'white',
        fontSize:30
    },
    DocText: {
        padding: 10,
        paddingBottom: 5,
        fontSize:30,
        color:'white'
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
        backgroundColor:'black',
        overflowY:'scroll',
        // position: 'relative',
        // top:0,
        zIndex: 999,
        fontSize: 40
    },

})