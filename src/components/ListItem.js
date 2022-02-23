import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Image,
  } from 'react-native';
  import React from 'react';
  import {DeleteIcon} from '../constant';
  
  const ListItem = props => {
    return (
      <FlatList
        data={props.listItems}
        renderItem={({item, index}) => (
          <View style={styles.container}>
            <View style={styles.indexContainer}>
              <Text style={styles.index}>{index + 1}</Text>
            </View>
  
            <View style={styles.taskContainer}>
              <Text style={styles.task}> {item.task}</Text>
              <TouchableOpacity
                onPress={() => {
                  props.deleteItem(item.id);
                }}>
                <Image source={DeleteIcon} style={styles.deleteIcon} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    );
  };
  
  export default ListItem;
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginHorizontal: 20,
      // flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
    },
    indexContainer: {
      backgroundColor: '#3E3364',
      borderRadius: 12,
      marginRight: 10,
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
    },
    index: {
      color: '#fff',
      fontSize: 20,
    },
    taskContainer: {
      backgroundColor: '#3E3364',
      borderRadius: 12,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 5,
      minHeight: 50,
    },
    task: {
      color: '#fff',
      width: '90%',
      fontSize: 16,
    },
    deleteIcon: {
      tintColor: '#888',
    },
  });