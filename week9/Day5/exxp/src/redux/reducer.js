const initialState = {
    posts: [
        { id: 1, title: 'Sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat' },
        { id: 2, title: 'Dolorem eum magni eos aperiam quia', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat' },
        { id: 3, title: 'Ea molestias quasi exercitationem repellat qui ipsa sit aut', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat' }
    ],
    chosenPost: ""
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "DELETE_POST":

            return {...state, chosenPost: "" }
            // payload qebul edib meselen post idsi onun esasinda filter edib delete etmeli
        case "SHOW_POST":
            const chosenPost = state.posts.find((item) => item.id === action.payload)
            return {...state, chosenPost: chosenPost }
        default:
            return state;
    }


}

export default reducer