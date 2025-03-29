import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';

const goals = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = ['Not very active', 'Lightly Active', 'Active', 'Very Active'];

  const handleOptionPress = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else if (selectedOptions.length < 1) {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.head1}>What is your baseline Activity level?</Text>
        <Text id='textView'>choose what describes you best</Text>
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
        {/* <View style={styles.selectedContainer}>
          <Text style={styles.selectedText}>Selected Options:</Text>
          {selectedOptions.map((selected, index) => (
            <Text key={index} style={[styles.selectedOption, { backgroundColor: 'blue', color: 'white' }]}>{selected}</Text>


          ))}
        </View> */}
      </View>

      <View style={styles.bottom}>
        <Pressable style={styles.button}>
          <Link href='/what' style={styles.buttonLink} >

          <Text style={styles.btnText}>Previous</Text>
          </Link>
        </Pressable>
        <Pressable style={styles.button} disabled={selectedOptions.length >=3 ? true : false}>
          <Link href='/You' style={styles.buttonLink} >
          <Text style={[selectedOptions.length >=3 && { color: 'white' , backgroundColor: '#14A4FE'}]}>Next</Text>
          </Link>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
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
    fontWeight: 700,
    color:'white'
  },
  head2: {
    fontSize: 15,
    marginBottom: 20,
    fontWeight: 500,
    color:'white'
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
  }
});

export default goals;
