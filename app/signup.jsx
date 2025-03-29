import { View, Text, StyleSheet, TextInput, Pressable, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors'
import { Link, Stack } from 'expo-router'
import names from '@/constants/generalNames.js'

const signup = () => {

    // const {width,height} = useWindowDimensions()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


  return (
        <View style={styles.container}>

            <View style={styles.imageDiv}>
                <Image source={require('@/assets/images/treadmill.png')} style={styles.image} />
            </View>

            <View style={styles.inputDiv}>
                <Text style={styles.inputTitle}>{names.appName}</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="First Name"
                    placeholderTextColor="grey"
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Last Name"
                    placeholderTextColor='grey'
                    onChange={(e) => setLastName(e.target.value)}

                />
                <TextInput 
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="grey"
                    onChange={(e) => setEmail(e.target.value)}

                />
                <TextInput 
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Password"
                    placeholderTextColor='grey'
                    onChange={(e) => setPassword(e.target.value)}

                />
                <Link
                href={firstName && lastName && email && password ? '/welcome' : '/signup'}
                    style={styles.button}
                >
                    <Text style={styles.btnText}>SIGN UP</Text>
                </Link>

                <View style={styles.Signup}>
                    <Text style={styles.text}>already a user? </Text>
                    <Link href='login' style={styles.register}>
                        <Text style={styles.text}>Sign In</Text>
                    </Link>
                </View>
                

            </View>

        </View>

  )
}

export default signup

const styles = StyleSheet.create({
    text:{
        color:'white'
    },

    container: {
        backgroundColor:'black',
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
        color: 'white'
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
        marginBottom: 30,
        color:'white'
    }

})