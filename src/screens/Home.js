import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
// import StackNav from './src/routes/StackNav';

import {useDispatch, useSelector} from 'react-redux';
import AddList from '../components/AddList';
import ViewList from '../components/ViewList';
import {addTask, deleteTask} from '../redux/action/Task';

EmptyList = () => (
  <View style={styles.emptyListContainer}>
    <Text style={styles.emptyListHeading}>"No data found. Please add new Task"</Text>
  </View>
);

const Home = () => {
  const dispatch = useDispatch();
  const deleteCurrent = key => dispatch(deleteTask(key));
  const tasks = useSelector(state => state.taskVal.taskList);
  const submitTask = task => dispatch(addTask(task));

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO LIST</Text>
      <View style={styles.scrollView}>
        <View style={styles.taskContainer}>
          {tasks.length === 0 ? (
            <EmptyList />
          ) : (
            <ViewList deleteItem={deleteCurrent} listItems={tasks} />
          )}
        </View>
      </View>
      <AddList addItem={submitTask} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C',
  },
  emptyListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListHeading: {
    color: '#888',
    fontSize: 16
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 60,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  },
});
