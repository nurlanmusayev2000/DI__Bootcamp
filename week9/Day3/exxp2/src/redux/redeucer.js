const initialState = {
    age: 20,
    loading: false
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "LOADING":
            return {...state, loading: action.payload };

        case "AGE_UP":

            return {...state, age: action.value + 1 }

        case "AGE_DOWN":
            return {...state, age: action.payload - 1 }

        default:
            return state;
    }


}

export default reducer