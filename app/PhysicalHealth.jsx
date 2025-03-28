import { View, Text, CheckBox, Button, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';

const PhysicalHealth = () => {  
  // const [tasks, setTasks] = useState({
  //   pushUps: false,
  //   pullUps: false,
  //   Running: false,
  //   sitUps: false
  // });

  // const handleCheckboxChange = (task) => {
  //   setTasks({ ...tasks, [task]: !tasks[task] });

  // };

  // const allTasksCompleted = Object.values(tasks).every(Boolean);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Daily Tasks</Text>

      <View style={styles.taskContainer}>
        <Text style={styles.taskText}>Do 20 Push Ups</Text>
        <CheckBox value={tasks.pushUps} onValueChange={() => handleCheckboxChange('pushUps')} />
      </View>
      <View style={styles.taskContainer}>
        <Text style={styles.taskText}>Do 20 Pull Ups</Text>
        <CheckBox value={tasks.pullUps} onValueChange={() => handleCheckboxChange('pullUps')} />
      </View>
      <View style={styles.taskContainer}>
        <Text style={styles.taskText}>Run 1km</Text>
        <CheckBox value={tasks.Running} onValueChange={() => handleCheckboxChange('Running')} />
      </View>
      <View style={styles.taskContainer}>
        <Text style={styles.taskText}>Do 20 sit ups</Text>
        <CheckBox value={tasks.sitUps} onValueChange={() => handleCheckboxChange('sitUps')} />
      </View>

      {allTasksCompleted && (
        <Link title="Task Complete" color="green" href={'/Home'} style={styles.btn}>

          <Text >Task Completed</Text>
        </Link>
      )} */}

      <View style={styles.item}>
        <Image style={styles.itemImg} source={require('@/assets/images/google.png')}/>
        <Text style={styles.itemText}>Push Ups</Text>
      </View>
      <View style={styles.item}>
        <Image style={styles.itemImg}/>
        <Text style={styles.itemText}>Push Ups</Text>
      </View>
      <View style={styles.item}>
        <Image style={styles.itemImg}/>
        <Text style={styles.itemText}>Push Ups</Text>
      </View>
      <View style={styles.item}>
        <Image style={styles.itemImg}/>
        <Text style={styles.itemText}>Push Ups</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    width: '100vw',
    height:'100vh',
    backgroundColor:'black'
  },
  itemImg:{
    width: '45vw',
    height: '45vh',

  }


  // container: {
  //   padding: 20,
  //   backgroundColor: '#f0f0f0',
  // },
  // header: {
  //   fontSize: 24,
  //   fontWeight: 'bold',
  //   marginBottom: 20,
  // },
  // taskContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginBottom: 10,
  //   width: '100%',
  //   justifyContent: 'space-between',
  //   borderWidth: 1,
  //   borderBlockColor: 'green',
  //   padding: 10,
  // },
  // taskText: {
  //   fontSize: 20,
  //   marginRight: 10,
  // },
  // btn:{
  //   backgroundColor: 'green',
  //   margin: 'auto',
  //   fontSize: 22,
  //   padding: 10,
  //   color: 'white'
  // }
});

export default PhysicalHealth;
