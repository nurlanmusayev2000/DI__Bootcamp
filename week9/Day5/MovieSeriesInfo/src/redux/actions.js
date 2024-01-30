import axios from 'axios'

const startFetch = () => {
    return {
        type: "STARTING_TO_FETCH"
    }
}

const failure = (data) => {
    return {
        type: "FAILURE",
        parload: data
    }
}

const movieSearch = (data) => {

    return {
        type: "SEARCH_MOVIE",
        payload: data
    }
}

const fetchallmovies = (data) => {


    return dispatch => {

        dispatch(startFetch())

        axios.get(`http://www.omdbapi.com/?s=${data}&apikey=817a2e1`).then(res => {
            console.log(res.data.Search);
            dispatch(movieSearch(res.data.Search))
        }).catch(err => {
            dispatch(failure(err.message))
        })


    }
}



const addExatcMovie = (data) => {
    return {
        type: "ADD_EXACT_MOVIE",
        payload: data
    }
}

const addMovieToState = (data) => {


    return {
        type: "ADD_MOVIE_TO_STATE",
        payload: data
    }
}


const fetchMovieDetails = (data) => {

    return (dispatch, getState) => {
        dispatch(addExatcMovie(data))

        const id = getState().text;

        axios.get(`http://www.omdbapi.com/?i=${id}&apikey=817a2e1`).then(res => {
            console.log("fetchinfDet", res.data);
            dispatch(addMovieToState(res.data));
            console.log(getState());
        }).catch(err => {
            dispatch(failure(err.message))
        })
    }

}

export { fetchallmovies, fetchMovieDetails }