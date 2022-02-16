import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskData from './TaskData';

export default function App() {
  let [taskList, setTaskList] = useState(TaskData);

  let generateTask = () => {
    let num = Math.floor(Math.random() * (taskList.length));
    return taskList[num].title;
  }

  return (
    <View style={{
      flex: 1, flexDirection: 'column'
    }}>
      <Text style={{marginTop: '50px', marginLeft: '50px' }}>Hi, Devin! Your selected task is {generateTask()}</Text>
      <View style={{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
      <View style={{height: 100, width: 100, backgroundColor: 'powderblue'}}/>
      <View style={{height: 100, width: 100, backgroundColor: 'red', right: 30, top: 30}} />
      <View style={{ height: 100, width: 100, backgroundColor: 'lightgreen'}} />
      </View>
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
