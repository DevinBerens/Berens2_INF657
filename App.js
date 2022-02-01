import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  let myName = 'Devin';
  let toDoList = [
    {
      id: 1,
      title: 'Clean house',
      description: 'You need to clean the house'
    },
    {
      id: 2,
      title: 'Fix car',
      description: 'You need to fix the car'
    },
    {
      id: 3,
      title: 'Buy groceries',
      description: 'Time to go shopping'
    }
  ];

  let generateTask = () => {
    let num = Math.floor(Math.random() * (toDoList.length));
    return toDoList[num].title;
  }

  return (
    <View style={styles.container}>
      <Text>Hi, {myName}! Your selected task is {generateTask()}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
