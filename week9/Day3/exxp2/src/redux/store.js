import { applyMiddleware, createStore } from 'redux';
import reducer from './redeucer';
import thunk from "redux-thunk"
//const logAction = (store) => (next) => (action) => {
//    // Our middleware
//    console.log("---IN THE MIDDLEWARE---")
//    console.log(JSON.stringify(action))
//        // call the next function

//    return next(action);
//}



const store = createStore(reducer, applyMiddleware(thunk))

export default store