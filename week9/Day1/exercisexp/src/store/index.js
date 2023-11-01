 import { connect } from 'react-redux';
 import { createStore } from 'redux';
 import reducerFunction from '../reducers';

 const initialState = { count: 0 }

 const store = createStore(reducerFunction, initialState);

 export default store