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
    formData: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALL_PRODUCT":
            console.log(action.payload);
            return {...state, products: action.payload }
        case "GET_PRODUCT_BY_CATEGORY":
            return {...state, productByCat: action.payload }
        case "GET_PRODUCT_BY_CITY":
            return {...state, productByCity: action.payload }
        case "GET_CHOSEN_PRODUCT":
            console.log('insidereducer', action.payload);
            return {...state, chosenProduct: action.payload }
        case "GET_PATH_AS_PARAMS":
            return {...state, params: action.payload }
        case "GET_SEARCH_PRODUCTS":
            return {...state, searchProducts: action.payload }
        case "USER_SIGNED_UP":
            return {...state, logInMessage: action.payload }
        case "SENT_TO_STATE":
            return {...state, formData: action.payload }
        case "USER_LOGGED_IN":
            console.log('loginreeducer', action.payload, state);
            return {...state, isLoggedIn: action.payload.isloggedIn, logInMessage: action.payload.message, usersData: action.payload.user, ProductOfUser: action.payload.products }

        case "LOGIN_ACTIVE":
            console.log('reducer when clicked profile get succes', action.payload);
            return {...state, isLoggedIn: true, usersData: action.payload.usersdata, ProductOfUser: action.payload.productOfUser }
        case "LOGIN_NOT_ACTIVE":
            return {...state, logInMessage: action.payload, usersData: [], ProductOfUser: [], isloggedIn: false }
        default:
            return state;
    }
}

export default reducer