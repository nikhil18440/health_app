import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native'
import React from 'react'

const Bipolar = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text1}><b>Bipolar Disorder</b>: A Brief Overview
Bipolar disorder is a mental health condition that causes extreme mood swings, including emotional highs (mania or hypomania) and lows (depression). These mood shifts can affect energy levels, behavior, and daily activities.

Measures to Control Bipolar Disorder
Medication – Mood stabilizers (e.g., lithium), antipsychotics, and antidepressants prescribed by a doctor can help manage symptoms.

Therapy – Cognitive Behavioral Therapy (CBT) and psychoeducation can help in recognizing triggers and coping strategies.

Lifestyle Changes – Maintaining a regular sleep schedule, exercise, and a balanced diet can help stabilize mood.

Avoiding Triggers – Reducing stress, limiting alcohol or drug use, and avoiding overstimulation can help prevent mood swings.

Support System – Engaging with family, friends, or support groups can provide emotional stability and encouragement.</Text>
    
<iframe style={styles.ytubeVid} width="560" height="315" src="https://www.youtube.com/embed/awPP5YrVGyY?si=INhqq_ndGt7ecCaV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<Text style={styles.DocName}>Dr. Nicy salam</Text>
<Text style={styles.DocSubHead}>Consultant psychiatrist</Text>
<Text style={styles.DocText}>More than 10 years of experience in the field of Psychiatry, including 4 years of teaching in experience in different Medical Colleges</Text>

<Pressable style={styles.callIcon}>
        <Image source={require('@/assets/images/call.png')} style={styles.callImg}/>
        <Text style={styles.buttonText}>Book an Appointment</Text>
</Pressable>
    </ScrollView>
  )
}

export default Bipolar


const styles = StyleSheet.create({
    container:{
        // fontSize: 30
        padding: 20
    },
    text1:{
        fontSize: 20,
    },
    ytubeVid:{
        margin: 'auto'
    },
    DocHead: {
        padding: 15,
        margin: 'auto',
        fontSize: 20,
        fontWeight: '700'
    },
    DocName:{
        padding: 10,
        paddingBottom: 5,
        fontSize:20
    },
    DocSubHead: {
        padding: 10,
        paddingBottom: 5,
        fontSize:20
    },
    DocText: {
        padding: 10,
        paddingBottom: 5,
        fontSize:20
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
})