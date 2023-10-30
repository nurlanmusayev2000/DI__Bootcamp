const reducer = (state, action) => {
    switch (action.type) {
        case "MOVIE_DETAIL":
            return { movieDetail: action.payload }

        default:
            return state
    }
}

export default reducer