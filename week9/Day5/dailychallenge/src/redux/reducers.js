const initialState = {
    text: '',
    movies: [],
    loading: false,
    movie: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "STARTING_TO_FETCH":
            console.log("Fetching has already started");
            return state


        case "SEARCH_MOVIE":

            return {...state, movies: action.payload }

        case "ADD_EXACT_MOVIE":
            console.log("helloooo", action.payload);
            return {...state, text: action.payload }

        case "ADD_MOVIE_TO_STATE":

            return {...state, movie: action.payload }
        default:
            return state;
    }
}

export default reducer