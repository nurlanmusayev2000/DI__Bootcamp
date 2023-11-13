const initialState = {
    card: [{
            title: "Points",
            rank: 3000
        },
        {
            title: "Lightings",
            rank: 8561
        },
        {
            title: "Shakas",
            rank: 333000
        },
        {
            title: "Diamonds",
            rank: 98661
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "PASS_DATA":

            return state

        default:
            return state;
    }
}


export default reducer