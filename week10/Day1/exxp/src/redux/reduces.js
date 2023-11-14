const initialState = {
    locationAutoComplete: [],
    getCurrentWeather: [],
    Day5Forecast: [],
    searchField: "",
    favorites: [],
    loading: false,
    weekDays: ["Sunday", "Monday", "ThuesDay", "Wednesday", "Thirsday", "Friday", "Saturday"]

}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "GETLOCATION":

            return {...state, locationAutoComplete: action.payload }

        case "GETCURRENTWEATHER":

            return {...state, getCurrentWeather: action.payload }

        case "DAYFORECATS":

            return {...state, Day5Forecast: action.payload }

        case "SEARCH_DATA":
            console.log(action.payload);
            return {...state, searchField: action.payload }


        case "LOADING":
            console.log("loading", state.loading);
            return {...state, loading: action.payload }

        case "ADD_TO_FAVORITES":

            return {...state, favorites: [...state.favorites, action.payload] }
        default:

            return state
    }

}

export default reducer