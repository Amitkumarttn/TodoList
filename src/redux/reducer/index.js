
import {combineReducers} from 'redux';
import taskReducer from './TaskReducer';
import TestReducer from './TestReducer';


const combinedReducers = combineReducers({
  testVal: TestReducer,
  taskVal: taskReducer
//   dataVal: dataReducer,
});
export default combinedReducers;