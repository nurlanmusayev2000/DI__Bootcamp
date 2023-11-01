import data from "../data/data"

const detailAction = (tit, relDate, rate) => {

    return {
        type: "MOVIE_DETAIL",
        payload: {
            title: tit,
            date: relDate,
            ratings: rate
        }
    }



}


export default detailAction