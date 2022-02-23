import {ADD_LIST, DELETE_LIST} from './types';

export const addTask = task => ({
  type: ADD_LIST,
  data: task,
});

export const deleteTask = key => ({
  type: DELETE_LIST,
  key: key,
});
