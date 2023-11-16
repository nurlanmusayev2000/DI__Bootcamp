const reducer = (state, action) => {
    switch (action.type) {

        case "DAY_SUCCESS":
            console.log(" ---- REDUCER ---- ", action.type)
            return {
                ...state, //copying the original state
                weekday: action.payload.day, //update the value of the weekday key with the value of action.payload.day
                joke: action.payload.newjoke //update the value of the joke key with the value of action.payload.newjoke
            }

        case "FORWARD_DAY_FAILURE":
            console.log(" ---- REDUCER ----", action.type)
            return {
                ...state, //copying the original state
                weekday: action.payload.day, //update the value of the weekday key with the value of action.payload.day
                joke: "Error - no joke", //update the value of the joke key
                err: action.payload.err //update the value of the err key with the value of action.payload.err
            }

        default:
            return state;
    }
}

export { reducer };