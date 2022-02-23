import {ADD_LIST, DELETE_LIST} from '../action/types';

const INITIAL_STATE = {
  taskList: [],
};

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        taskList: state.taskList.concat({
          key: Math.random(),
          task: action.data,
        }),
      };
    case DELETE_LIST:
      return {
        ...state,
        taskList: state.taskList.filter(item => item.key !== action.key),
      };
    default:
      return state;
  }
};
export default taskReducer;
