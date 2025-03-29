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
      <Text style={styles.desc}><b>Attention-Deficit/Hyperactivity Disorder (ADHD)</b> is a neurodevelopmental disorder that affects children, adolescents, and adults. It is characterized by persistent patterns of inattention, hyperactivity, and impulsivity that interfere with daily life, learning, and relationships.</Text>
    
       <Text style={[styles.para2, styles.paraHead]}>ADHD symptoms are generally divided into two categories: inattention and hyperactivity-impulsivity. A person may exhibit symptoms from one or both categories.</Text>

       <Text style={styles.text}>Symptoms of ADHD:
<br/>
ADHD symptoms are generally divided into two categories: inattention and hyperactivity-impulsivity. A person may exhibit symptoms from one or both categories.
<br/>
1. Inattention:

Difficulty focusing on tasks or activities

Easily distracted by external stimuli

Frequently making careless mistakes

Difficulty organizing tasks and managing time

Often losing items like keys, books, or tools

Forgetfulness in daily activities

Avoidance of tasks that require sustained mental effort

<br/>
2. Hyperactivity and Impulsivity:

Constant fidgeting or restlessness

Difficulty remaining seated when required

Excessive talking or interrupting others

Difficulty waiting for one's turn

Acting without thinking, making quick decisions without considering consequences

Difficulty playing quietly or engaging in calm activities

A sense of inner restlessness


<br/>

Measures to Manage and Treat ADHD:
<br/>
1. Professional Help:

Behavioral Therapy: Helps develop organizational skills, emotional regulation, and coping strategies.

Cognitive Behavioral Therapy (CBT): Addresses negative thought patterns and impulsivity.

Medication:

Stimulants: Such as methylphenidate (Ritalin) or amphetamine-based medications (Adderall).

Non-Stimulants: Atomoxetine or certain antidepressants for those who don't respond to stimulants.


<br/>
2. Lifestyle Changes:

Structured Routine: Establishing daily schedules and clear expectations.

Organization Tools: Using planners, timers, and checklists to stay organized.

Healthy Lifestyle: Regular exercise, balanced nutrition, and sufficient sleep.

Minimizing Distractions: Creating a quiet, clutter-free workspace.

Mindfulness and Relaxation: Practicing mindfulness techniques to improve focus and reduce stress.

<br/>
3. Support Systems:

Parental Training: For children with ADHD, parents can learn strategies to support their child's development.

Support Groups: Connecting with others who have ADHD can provide encouragement and practical advice.

Academic Support: School accommodations like extended time for tests or preferential seating.


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

export default Stress

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