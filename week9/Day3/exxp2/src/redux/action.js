const agedown = (data) => {
    return {
        type: "AGE_DOWN",
        payload: data
    }
}

const ageUpAsnc = (val) => {
    return {
        type: "AGE_UP",
        value: val
    }
}

const loading = (data) => {
    return {
        type: "LOADING",
        payload: data
    }
}

const ageup = (val) => {
    console.log("in middleware");
    return dispatch => {
        console.log("in middleware2");

        dispatch(loading(true));
        setTimeout(() => {
            dispatch(ageUpAsnc(val));
            dispatch(loading(false));

        }, 5000)
    }
}

export { ageup, agedown }