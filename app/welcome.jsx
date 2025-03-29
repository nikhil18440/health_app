import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useStore } from '@/stateManagement'

const welcome = () => {

    let name = null

    const handleName = (e) => {
        name = e
    }
    
    const {user,setUser} = useStore();

  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <Text style={styles.head1}>First, what can we call you ?</Text>
        <Text style={styles.head2}>We'd like to get to know you.</Text>

        {/* <br /> */}
        <Text>Prefered first name</Text>
        <TextInput
                style={styles.input}
                placeholderTextColor="grey"
                onChange={(e) => handleName(e)}
            />
      </View>

      <View style={styles.bottom}>
        <Pressable 
            style={styles.button}
        >
            <Link href='/'
            style={styles.buttonLink}>
            <Text style={styles.btnText}>Previous</Text>
            </Link>

        </Pressable>
        <Pressable 
            style={styles.button}
        >
            <Link href='/goals'
            onPress={() => setUser({...user, name:name})}
            style={styles.buttonLink}>
                <Text>next</Text>
                    </Link>
        </Pressable>
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        height: '100%',
        display: 'flex',
        padding: 15,
        justifyContent: 'space-between'
        // flexDirection: 'column-reverse'
    },
    input:{
        width: 300,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        marginBottom: 10,
        padding: 10,
        marginTop: 5
        // backgroundColor: 'white'
    },
    head1: {
        fontSize: 22,
        marginTop: 10,
        fontWeight: 700
    },
    head2: {
        fontSize:15,
        marginBottom: 20,
        fontWeight: 500
    },
    button:{
        backgroundColor: '#14A4FE',
        // width: '50%',
        padding: 10,
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        margin: 10,
        borderRadius: 10,
        color: 'white'
    },
    btnText: {
        color: 'white',
    },
    bottom:{
        display: 'flex',
        flexDirection: 'row'
    },
    buttonLink:{
        color: 'white'
    }
})

export default welcome