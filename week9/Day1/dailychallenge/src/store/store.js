import { createStore } from 'redux'
import reducer from '../reducer/reducer';

const initialState = { movieDetail: "Select Movie" }

const store = createStore(reducer, initialState);
export default store