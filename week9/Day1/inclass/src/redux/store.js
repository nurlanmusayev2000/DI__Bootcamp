import { createStore } from "redux"
import { Reducer } from "redux"
import reducer from "./reducer"

let store = createStore(reducer)

export default store