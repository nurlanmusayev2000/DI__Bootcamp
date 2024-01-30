import axios from 'axios'

const startFetch = () => {
    return {
        type: "START_FETCH"
    }
}

const getallProduct = (data) => {
    return {
        type: "GET_ALL_PRODUCT",
        payload: data
    }
}


const chooseProductsforCategory = (data) => {
    return {
        type: "GET_PRODUCT_BY_CATEGORY",
        payload: data
    }
}

const chooseProductForCity = (data) => {
    return {
        type: "GET_PRODUCT_BY_CITY",
        payload: data
    }
}

const getChosenProduct = (data) => {
    return {
        type: "GET_CHOSEN_PRODUCT",
        payload: data
    }
}

const getPath = (data) => {
    return {
        type: "GET_PATH_AS_PARAMS",
        payload: data
    }
}

const getSearchProducts = (data) => {

    return {
        type: "GET_SEARCH_PRODUCTS",
        payload: data
    }
}

const logIn = (message, usersdata, isloggedIn, productOfUser) => {
    return {
        type: "USER_LOGGED_IN",
        payload: {
            message: message,
            user: usersdata,
            isloggedIn: isloggedIn,
            products: productOfUser
        }

    }
}

const signUp = (data) => {
    return {
        type: "USER_SIGNED_UP",
        payload: data
    }
}
const accessprofile = (data, product) => {
    return {
        type: "LOGIN_ACTIVE",
        payload: {
            usersdata: data,
            productOfUser: product
        }
    }
}
const deniedProfile = (data) => {
    return {
        type: "LOGIN_NOT_ACTIVE",
        payload: data
    }
}



const deleteChosenProduct = () => {
    return {
        type: "DELETE_ITEM"
    }
}

const sendId = (data) => {

    return {
        type: "SEND_ID_TO_ANOTHER_COMPONENT",
        payload: data
    }
}
const catchError = (data) => {
    return {
        type: "CATCH_ERROR",
        payload: data
    }
}

const filteredProducts = (data) => {
    return {
        type: "GET_FILTERED_PRODUCTS",
        payload: data
    }
}

///MIDDLEWARES

const fetchAllProducts = () => {

    return dispatch => {
        dispatch(startFetch());

        axios.get('http://localhost:3005/api').then(res => {
            dispatch(getallProduct(res.data))
        }).catch(err => dispatch(catchError(err.message)))

    }
}

const fetchProductsForCategory = (data) => {



    return dispatch => {
        axios.get(`http://localhost:3005/api/products/category/${data}`).then(res => {
            dispatch(chooseProductsforCategory(res.data))
        }).catch(err => dispatch(catchError(err.message)))
    }
}

const fetchChosenProduct = (data) => {


    return dispatch => {


        axios.get(`http://localhost:3005/api/product/${data}`).then(res => {

            dispatch(getChosenProduct(res.data))
        }).catch(err => dispatch(catchError(err.message)))
    }
}

const fetchSearchProduct = (data) => {


    return dispatch => {
        axios.get(`http://localhost:3005/api/searchProduct/${data}`).then(res => {
            dispatch(getSearchProducts(res.data))
        }).catch(err => dispatch(catchError(err.message)))
    }
}


const fetchSignUp = (data) => {

    return dispatch => {
        axios.post('http://localhost:3005/api/ecommerce/signup', {
            data,
            Headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            localStorage.setItem('token', res.data.token)
            dispatch(signUp(res.data))
        }).catch(err => dispatch(catchError(err.message)))
    }
}

const fetchLogIn = (data) => {

    return (dispatch) => {
        axios.post('http://localhost:3005/api/ecommerce/login', {

            data,
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('refreshtoken', res.data.refreshToken)
            dispatch(logIn(res.data.message, res.data.user, true, res.data.productsOfUser))
        }).catch(err => dispatch(catchError(err.message)))
    }
}

const fetchProfile = () => {
    const token = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refreshtoken')
    return dispatch =>
        axios.get(`http://localhost:3005/api/ecommerce/profile`, {

            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'refreshToken': refreshToken
            }
        }).then(res => {
            console.log('fethprofilesuccces', res);
            if (res.data.newtoken !== undefined) {
                localStorage.setItem('token', res.data.newtoken)
            }
            dispatch(accessprofile(res.data.userdetails, res.data.productsOfUser))
        }).catch(err => {
            console.log('fetchProfile error', err.response.status);
            if (err.response.status === 403) {
                localStorage.clear()
            }
            dispatch(deniedProfile(err))
            dispatch(catchError(err.message))
        })

}

const postNewProduct = (data) => {

    return dispatch => {
        axios.post('http://localhost:3005/api/ecommerce/addProduct', data).then(res => {}).catch(err => dispatch(catchError(err.message)))
    }
}

const deleteProduct = (data) => {

    return dispatch => {
        axios.delete(`http://localhost:3005/api/product/delete/${data}`).then(res => {
            dispatch(deleteChosenProduct())
            dispatch(fetchProfile())
        }).catch(err => dispatch(catchError(err.message)))
    }
}


const fetchFilteredProduct = (data) => {


    return dispatch => {
        console.log('dataofform', data);
        axios.post('http://localhost:3005/api/ecommerce/filter', { data }).then(res => {
            console.log(res);
            dispatch(filteredProducts(res))
        })
    }
}

export { fetchAllProducts, fetchProductsForCategory, chooseProductForCity, fetchChosenProduct, getPath, fetchSearchProduct, getSearchProducts, fetchSignUp, fetchLogIn, fetchProfile, postNewProduct, deleteProduct, sendId, fetchFilteredProduct }