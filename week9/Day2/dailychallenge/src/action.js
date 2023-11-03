const setSearchField = (text) => ({
    type: "CHANGE_SEARCH_FIELD",
    payload: text
})

const checkRobotsAction = () => ({
    type: "CHECK_ROBOTS",
})


export { setSearchField, checkRobotsAction }