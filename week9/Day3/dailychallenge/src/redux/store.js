import {createStore , applyMiddleware} from 'redux';
import { searchRobots } from './reducers';
import thunk from 'redux-thunk';

const initialState = {
	searchField:"",
	robots:[],
	searchingRobots:[]
};

export const store = createStore(searchRobots ,initialState,applyMiddleware(thunk))