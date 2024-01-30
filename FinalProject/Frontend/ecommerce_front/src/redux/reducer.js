const initialState = {
    products: [],
    productByCat: [],
    productByCity: [],
    chosenProduct: [],
    params: [],
    searchProducts: [],
    isLoggedIn: false,
    logInMessage: '',
    usersData: {},
    ProductOfUser: [],
    usersDetail: [],
    productId: '',
    hasError: false,
    error: '',
    filteredProduct: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALL_PRODUCT":
            return {...state, products: action.payload }
        case "GET_PRODUCT_BY_CATEGORY":
            return {...state, productByCat: action.payload }
        case "GET_PRODUCT_BY_CITY":
            return {...state, productByCity: action.payload }
        case "GET_CHOSEN_PRODUCT":
            return {...state, chosenProduct: action.payload }
        case "GET_PATH_AS_PARAMS":
            return {...state, params: action.payload }
        case "GET_SEARCH_PRODUCTS":
            return {...state, searchProducts: action.payload }
        case "USER_SIGNED_UP":
            return {...state, logInMessage: action.payload }
        case "USER_LOGGED_IN":
            return {...state, isLoggedIn: action.payload.isloggedIn, logInMessage: action.payload.message, usersData: action.payload.user, ProductOfUser: action.payload.products }
        case "LOGIN_ACTIVE":
            return {...state, isLoggedIn: true, usersData: action.payload.usersdata, ProductOfUser: action.payload.productOfUser }
        case "LOGIN_NOT_ACTIVE":
            return {...state, logInMessage: action.payload, usersData: [], ProductOfUser: [], isloggedIn: false };
        case "SEND_ID_TO_ANOTHER_COMPONENT":
            return {...state, productId: action.payload }
        case "CATCH_ERROR":
            return {...state, hasError: true, error: action.payload };
        case "GET_FILTERED_PRODUCTS":
            return {...state, filteredProduct: action.payload }

        default:
            return state;
    }
}

export default reducer