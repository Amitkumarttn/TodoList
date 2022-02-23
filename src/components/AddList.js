import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SendIcon} from '../constant';
import Toast from 'react-native-toast-message';

const AddList = props => {
  const [item, setItem] = useState('');

  const itemValidate = () => {
    if (item === '') {
      Toast.show({
        type: 'info',
        text1: 'Please Enter something!',
      });
    } else {
      props.addItem(item);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      style={styles.container}>
      <TextInput
        style={styles.inputField}
        value={item}
        onChangeText={text => {
          setItem(text);
        }}
        placeholder={'Write a task'}
        placeholderTextColor={'#fff'}
      />
      <TouchableOpacity
        onPress={() => {
          itemValidate();
          setItem('');
        }}>
        <Image source={SendIcon} style={styles.icon} />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default AddList;

const styles = StyleSheet.create({
  container: {
    borderColor: '#fff',
    backgroundColor: '#3E3364',
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 20,
  },
  inputField: {
    color: '#fff',
    height: 50,
    flex: 1,
  },
  button: {
    height: 30,
    width: 30,
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
});
