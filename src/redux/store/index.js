import {createStore} from 'redux';
// import thunk from 'redux-thunk';
import combinedReducers from '../reducer';
const store = createStore(combinedReducers);

export default store;