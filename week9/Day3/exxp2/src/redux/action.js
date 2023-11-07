const ageup = (data) => {
    return {
        type: "AGE_UP",
        payload: data
    }
}

const agedown = (data) => {
    return {
        type: "AGE_DOWN",
        payload: data
    }
}

export { ageup, agedown }