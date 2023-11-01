import inputAction from "./action";


const initialState = {
    inputField: " "
}
const reducer = (state=initialState, action) => {
    switch (action.type) {
        case "ADD_DETAIL":
            return (Object.assign({}, state, { inputField: action.payload }))/* ? */

        default:
            return state
    }
}

export default reducer