import axios from 'axios'

const autoComplete = data => {

    return {
        type: "GETLOCATION",
        payload: data
    }

}


const currentWeather = data => {

    return {
        type: "GETCURRENTWEATHER",
        payload: data
    }
}


const day5Forecast = data => {

    return {
        type: "DAYFORECATS",
        payload: data
    }
}

const searchData = (data) => {

    return {
        type: "SEARCH_DATA",
        payload: data
    }
}

const loading = () => {

    return {
        type: "LOADING",
        payload: true
    }
}

const addFav = (dataName, dataDegree, dataDesc) => {
    return {
        type: "ADD_TO_FAVORITES",
        payload: {
            name: dataName,
            degree: dataDegree,
            description: dataDesc
        }
    }
}

const fetchAutoSearch = (data) => {


    return (dispatch, getState) => {

        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${data}&limit=5&appid=f610391dda27e40c812af263660c0fa5`).then(res => {
            console.log("autoComp");
            console.log(res);
            dispatch(autoComplete(res.data[0]))
            const lat = res.data[0].lat;
            const lon = res.data[0].lon;
            console.log(lat.toFixed(2));

            axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=f610391dda27e40c812af263660c0fa5`).then(res => {
                console.log("currentweather", res.data);
                dispatch(currentWeather(res.data));

            })
            axios.get(`https://api.tomorrow.io/v4/timelines?location=${data}&fields=temperature&timesteps=1d&units=metric&apikey=cIoZA1DGl82NJQfM5E51khj0IjFOzHbA`).then(res => {
                console.log(res.data);
                dispatch(day5Forecast(res.data))

            })



        })



        //const key = res.data[0].Key
        //axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=hfageFjiaVG7DMwyawOPlPQy3AE3QpEe`).then(res => {
        //    console.log("curren");
        //    dispatch(currentWeather(res))
        //})
        //axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=hfageFjiaVG7DMwyawOPlPQy3AE3QpEe`).then(res => {
        //    console.log("5day", res);
        //    dispatch(day5Forecast(res))
        //})

    }
}


export { searchData, fetchAutoSearch, loading, addFav }