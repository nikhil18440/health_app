import { View, Text, StyleSheet, TextInput, Pressable, Image, Dimensions, KeyboardAvoidingView, InputAccessoryView } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { Link, Stack } from 'expo-router'
import names from '@/constants/generalNames.js'

const login = () => {

    // const {width,height} = useWindowDimensions()

  return (
    
            <View style={styles.container}>

<View style={styles.imageDiv}>
    <Image source={require('@/assets/images/health.png')} style={styles.image} />
</View>

<View style={styles.inputDiv}>
    <Text style={styles.inputTitle}>{names.appName}</Text>
    
    <TextInput 
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="grey"
    />
    <TextInput 
        style={styles.input}
        placeholder="Password"
        placeholderTextColor='grey'
        secureTextEntry={true}
    />
    <Pressable 
        style={styles.button}
    >
        <Text style={styles.btnText}>LOGIN</Text>
    </Pressable>

    <View style={styles.Signup}>
        <Text>dont't have an account? </Text>
        <Link href='/signup' style={styles.register}>
            <Text>Sign Up</Text>
        </Link>
    </View>
    <br />
    <View>
        <Text>or login with</Text>
    </View>
    <br />
    <View style={styles.logos}>
        <Image source={require('@/assets/images/google.png')} style={styles.logo} />
        <Image source={require('@/assets/images/fb.png')} style={styles.logo} />
    </View>
    

</View>



</View>


  )
}

export default login

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        height: '100%',
        display: 'flex',
        flexDirection: 'column-reverse'
    },
    imageDiv: {
        width: 'auto',
        height: 'auto'
    },
    image: {
        width: '100%',
        height: 320,
        resizeMode: 'contain',
        marginTop: 50  
    },
    inputDiv: {
        // height: '0%',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        height: '40%'
    },
    input:{
        width: 300,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        marginBottom: 10,
        padding: 10,
        // backgroundColor: 'white'
    },
    button:{
        backgroundColor: '#14A4FE',
        width: 300,
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    btnText:{
        color: 'white'
    },
    register:{
        textDecorationLine: 'underline',
    },
    Signup:{
        display:'flex',
        flexDirection: 'row'
    },
    inputTitle:{
        fontSize: 30,
        fontWeight: 900,
        color:'rgb(31, 31, 31)',
        marginBottom: 30
    },
    logo: {
        width: 40,
        height: 40
    },
    logos: {
        width: '50%',
        justifyContent: 'space-evenly',
        display: 'flex',
        flexDirection: 'row'
    }

})