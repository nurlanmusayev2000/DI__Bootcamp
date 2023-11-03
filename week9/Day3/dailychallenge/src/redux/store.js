import {createStore , applyMiddleware} from 'redux';
import { searchRobots } from './reducers';
import thunk from 'redux-thunk';


export const store = createStore(searchRobots ,applyMiddleware(thunk))