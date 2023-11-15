import axios from 'axios';

//1.


const forwardSuccess = (chosenDay, joke) => {
    console.log("---- ACTION CREATOR : forward success ---- ")
    return {
        type: "DAY_SUCCESS",
        payload: {
            day: chosenDay,
            newjoke: joke
        }

    }
}

const forwardFailure = (chosenDay, err) => {
    console.log("---- ACTION CREATOR : forward failure ---- ")
    return {
        type: "FORWARD_DAY_FAILURE",
        payload: {
            day: chosenDay,
            err: err
        }
    }
}

//2.
const forward = weekday => {
    console.log("---- Redux Thunk ---- NEW ACTION CREATOR ---- ")



    return (dispatch, getState) => {
        console.log("getState in middleware", getState());
        let week = getState().week
        let currentDay = week.indexOf(weekday)

        let chosenDay;
        if (currentDay === week.length - 1) {
            chosenDay = week[0]
        } else {
            chosenDay = week[currentDay + 1]
        }

        axios
            .get('https://api.chucknorris.io/jokes/search', {
                params: {
                    query: chosenDay
                }
            })

        //if the promise if fulfilled
        .then(res => {
            //get a random index
            let random = Math.floor(Math.random() * res.data.result.length);
            //get the value of the joke
            let result = res.data.result[random].value
            dispatch(forwardSuccess(chosenDay, result));
        })

        //if the promise if rejected
        .catch(err => {
            dispatch(forwardFailure(chosenDay, err.message));
        });
    };
};

const backward = weekday => {
    console.log("---- Redux Thunk ---- NEW ACTION CREATOR ---- ")



    return (dispatch, getState) => {
        console.log("getState in middleware", getState());
        let week = getState().week
        let currentDay = week.indexOf(weekday)

        let chosenDay;
        if (currentDay === 0) {
            chosenDay = week[6]
        } else {
            chosenDay = week[currentDay - 1]
        }
        console.log("chosen dey", chosenDay);

        axios
            .get('https://api.chucknorris.io/jokes/search', {
                params: {
                    query: chosenDay
                }
            })

        //if the promise if fulfilled
        .then(res => {
            //get a random index
            let random = Math.floor(Math.random() * res.data.result.length);
            //get the value of the joke
            let result = res.data.result[random].value
            dispatch(forwardSuccess(chosenDay, result));
        })

        //if the promise if rejected
        .catch(err => {
            dispatch(forwardFailure(chosenDay, err.message));
        });
    };
};

//3.
export {
    forward,
    backward
}