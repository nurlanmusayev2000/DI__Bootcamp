const reducer = (state, action) => {

    switch (action.type) {
        case "GET_SEARCHED_IMAGE":
            console.log("button action");
            return {...state, typeOfImg: action.payload };

        case "GET_ALL_IMAGES":

            return {...state, imgCollection: action.payload }


        case "GET_MOUNTAIN_IMAGE":
            console.log("this is mountaine img", state);
            return {...state, typeOfImg: action.payload };

        case "GET_BEACHES_IMAGE":

            return ({...state, typeOfImg: action.payload })

        case "GET_BIRDS_IMAGE":

            return ({...state, typeOfImg: action.payload })

        case "GET_FOOD_IMAGE":

            return ({...state, typeOfImg: action.payload })

        default:
            return state;
    }
}


export default reducer