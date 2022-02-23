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
import AddItem from './src/components/AddItem';
import ListItem from './src/components/ListItem';
// import {v4 as uuidv4} from 'uuid';

EmptyList = () => (
  <View>
    <Text style={styles.heading}>Nothing</Text>
  </View>
);

const App = () => {
  const [list, setList] = useState([]);
  const addItem = text => {
    const newItem = {
      id: Math.random(),
      task: text,
    };
    setList([...list, newItem]);
  };
  const deleteItem = id => {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO LIST</Text>
      <View style={styles.scrollView}>
        <View style={styles.taskContainer}>
          {list.length === 0 ? (
            <EmptyList />
          ) : (
            <ListItem deleteItem={deleteItem} listItems={list} />
          )}
        </View>
      </View>
      <AddItem addItem={addItem} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C',
    // alignItems: 'center',
    // justifyContent: 'center',
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