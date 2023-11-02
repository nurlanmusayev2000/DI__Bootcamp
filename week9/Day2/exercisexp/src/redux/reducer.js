import { inputAction, deleteItemAction } from "./action";


const initialState = {
    inputField: [],
    editField: [],
    inputValue: {

    }
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_DETAIL":
            return ({...state, inputField: [...state.inputField, action.payload] })

        case "DELETE_ITEM":
            const listItems = state.inputField.filter((item, index) => { return action.payload !== index })
            return ({...state, inputField: [...listItems] })

        case "EDIT_ITEM":
            const editedItem = state.inputField.filter((item, index) => { return action.payload === index })
            return ({...state, editField: [...editedItem] })

        case "SET_EDITED_ITEM":
            const lastEditedItems = state.inputField.map((item, index) => {
                if (index === action.payload.id) {
                    console.log("ifin insidei");
                    return action.payload.data
                } else {
                    console.log("elsin insidi");
                    return item
                }
            });
            console.log("inside reduceer", lastEditedItems);
            state.editField = []
            return ({...state, inputField: lastEditedItems })
        default:
            return state
    }
}



export default reducer