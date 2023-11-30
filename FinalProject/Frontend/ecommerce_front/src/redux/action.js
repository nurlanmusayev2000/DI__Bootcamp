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


const chooseProductforCategory = (data) => {
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

const sentToStateOjectValue = (data) => {
    return {
        type: "SENT_TO_STATE", //when logged in sent to state login form values
        payload: data
    }
}

const deleteChosenProduct = () => {
    return {
        type: "DELETE_ITEM"
    }
}


///MIDDLEWARES

const fetchAllProducts = () => {
    const token = localStorage.getItem('token');


    return dispatch => {
        dispatch(startFetch());

        axios.get('http://localhost:3005/', {

            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(res => {
            console.log(res.data);
            dispatch(getallProduct(res.data))
        }).catch(err => console.log('error happened in fetchall product:', err))

    }
}

const fetchChosenProduct = (data) => {



    return dispatch => {

        console.log('insidefetc', data);

        axios.get(`http://localhost:3005/product/${data}`).then(res => {

            console.log(res.data);
            dispatch(getChosenProduct(res.data))
        })
    }
}

const fetchSearchProduct = (data) => {


    return dispatch => {
        axios.get(`http://localhost:3005/searchProduct/${data}`).then(res => {
            dispatch(getSearchProducts(res.data))
        })
    }
}


const fetchSignUp = (data) => {

    return dispatch => {
        axios.post('http://localhost:3005/ecommerce/signup', {
            data,
            Headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token)
            dispatch(signUp(res.data))
        }).catch(err => {
            console.log(err);
            alert(err.response.data.message)
        })
    }
}

const fetchLogIn = (data) => {
    console.log("actiondata:", data);

    return (dispatch) => {
        axios.post('http://localhost:3005/ecommerce/login', {

            data,
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => {
            console.log('loginftchedsuccess data', res);
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('refreshtoken', res.data.refreshToken)
            dispatch(sentToStateOjectValue(data))
            dispatch(logIn(res.data.message, res.data.user, true, res.data.productsOfUser))
        }).catch(err => {
            dispatch(logIn('invalid Credential', false))
        })
    }
}

const fetchProfile = () => {
    const token = localStorage.getItem('token');
    console.log('data for params', token);

    return dispatch =>
        axios.get(`http://localhost:3005/ecommerce/profile`, {

            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(res => {
            console.log('fetchprofile dispatched ', res.data);
            dispatch(accessprofile(res.data.userdetails, res.data.productsOfUser))
        }).catch(err => {
            console.log("insideerr", err);
            dispatch(deniedProfile(err))
        })

}

const postNewProduct = (data) => {


    axios.post('http://localhost:3005/ecommerce/addProduct', data).then(res => {
        console.log('productAddedSuccesfully');
    })
}

const deleteProduct = (data) => {

    console.log('datafordelete', data);
    return dispatch => (
        axios.delete(`http://localhost:3005/product/delete/${data}`).then(res => {
            dispatch(deleteChosenProduct())
            dispatch(fetchProfile())
        }).catch(err => console.log(err)))
}

export { fetchAllProducts, chooseProductforCategory, chooseProductForCity, fetchChosenProduct, getPath, fetchSearchProduct, getSearchProducts, fetchSignUp, fetchLogIn, fetchProfile, postNewProduct, deleteProduct }