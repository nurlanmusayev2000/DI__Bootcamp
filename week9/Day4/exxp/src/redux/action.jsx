const searchImg = (data) => {
    return {
        type: "GET_SEARCHED_IMAGE",
        payload: data
    }
}


const collectAllImg = (images) => {
    return {
        type: "GET_ALL_IMAGES",
        payload: images
    }
}

const mountainImgGet = () => {
    return {
        type: "GET_MOUNTAIN_IMAGE",
        payload: "Mountain"
    }
}

const beachesImgGet = () => {
    return {
        type: "GET_BEACHES_IMAGE",
        payload: "Beaches"
    }
}

const birdsImgGet = () => {
    return {
        type: "GET_BIRDS_IMAGE",
        payload: "Birds"
    }
}

const foodImgGet = () => {
    return {
        type: "GET_FOOD_IMAGE",
        payload: "Food"

    }
}

const searchInput = (data) => {
    return {
        type: "CHECK_INPUT",
        payload: data
    }
}



export { mountainImgGet, beachesImgGet, birdsImgGet, foodImgGet, searchInput, collectAllImg, searchImg }