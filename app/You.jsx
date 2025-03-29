import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { useStore } from '@/stateManagement';

const You = () => {

  const {user,setUser} = useStore();

  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = ['Male', 'Female'];
  const [Age, setAge] = useState(null)
  const [height, setHeight] = useState(null)
  const [Weight, setWeight] = useState(null)

  const handleOptionPress = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else if (selectedOptions.length < 1) {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  console.log(Age, Weight, height)

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.head1}>Tell us a little bit about yourself</Text>
        <Text id='textView'>Please select your gender</Text>
        <View style={styles.optionsContainer}>
          {options.map((option, index) => (
            <Pressable 
              key={index} 
              style={[styles.optionButton, selectedOptions.includes(option) && { color: 'white' , backgroundColor: '#14A4FE'}]}
              onPress={() => handleOptionPress(option)} 
              disabled={selectedOptions.length >= 3 && !selectedOptions.includes(option)}
            >
              <Text style={[styles.optionText, selectedOptions.includes(option) && { color: 'white' , backgroundColor: '#14A4FE'}]}>{option}</Text>

            </Pressable>
          ))}
        </View>

        <Text style={styles.genderText}>What is your age?</Text>
        <TextInput
            style={styles.input}
            placeholder="Age"
            placeholderTextColor="grey"
            onChange={(e) => setAge(e.target.value)}
        />
        
        <Text style={styles.genderText}>How tall are you?(cm)</Text>
        <TextInput
            style={styles.input}
            placeholder="Height"
            placeholderTextColor="grey"
            onChange={(e) => setHeight(e.target.value)}
        />

        <Text style={styles.genderText}>How much do you weigh?(kg)</Text>
        <TextInput
            style={styles.input}
            placeholder="Weight"
            placeholderTextColor="grey"
            onChange={(e) => setWeight(e.target.value)}
        />

        {/* <View style={styles.selectedContainer}>
          <Text style={styles.selectedText}>Selected Options:</Text>
          {selectedOptions.map((selected, index) => (
            <Text key={index} style={[styles.selectedOption, { backgroundColor: 'blue', color: 'white' }]}>{selected}</Text>


          ))}
        </View> */}
      </View>

      <View style={styles.bottom}>
        <Pressable style={styles.button}>
          <Link href='/Activity' style={styles.buttonLink} >
          <Text style={styles.btnText}>Previous</Text>
          </Link>
        </Pressable>
        <Pressable style={styles.button} disabled={selectedOptions.length >=3 ? true : false}>
          <Link href='/Home' style={styles.buttonLink} onPress={() => setUser({...user, weight:Weight, height:height, age:Age, gender:selectedOptions[0]})}>
          <Text style={[selectedOptions.length >=3 && { color: 'white' , backgroundColor: '#14A4FE'}]}>Next</Text>
          </Link>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    display: 'flex',
    padding: 15,
    justifyContent: 'space-between'
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    marginTop: 5
  },
  head1: {
    fontSize: 22,
    marginTop: 10,
    fontWeight: 700
  },
  head2: {
    fontSize: 15,
    marginBottom: 20,
    fontWeight: 500
  },
  button: {
    backgroundColor: '#14A4FE',
    padding: 5,
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    margin: 10,
    borderRadius: 10
  },
  btnText: {
    color: 'white',
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row'
  },
  selectedContainer: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
  },
  selectedText: {
    fontWeight: 'bold',
  },
  selectedOption: {
    marginVertical: 5,
  },
  optionsContainer: {
    marginVertical: 10,
  },
  optionButton: {
    backgroundColor: '#E0E0E0',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  optionText: {
    textAlign: 'center',
  },
  buttonLink: {
    color: 'white'
  },
  genderText:{
    // fontSize: 16,
    marginTop: 20
  }
});

export default You;
