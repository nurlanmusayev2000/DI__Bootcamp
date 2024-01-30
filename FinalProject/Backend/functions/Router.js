const express = require('express');
const router = express.Router();
const { authenticateJWT, dateMiddleWare } = require('./authmiddleware');
const multer = require('multer');
const path = require('path')


const {
    getAllProductDetails,
    getProductForCategory,
    getProduct,
    getProductForSearchResult,
    postSignUpUser,
    postLoginUser,
    getUserProfile,
    postNewProduct,
    addNewProductImg,
    deleteProduct,
    updateProduct,
    updateProductImg,
    sendEmailToSeller,
    filteredProduct
} = require('./Controller');

router.get('/', getAllProductDetails);
router.get('/products/category/:id', getProductForCategory);
router.get('/product/:id', getProduct);
router.get('/searchProduct/:search', getProductForSearchResult);
router.post('/ecommerce/signup', postSignUpUser);
router.post('/ecommerce/login', postLoginUser);
router.get('/ecommerce/profile', authenticateJWT, getUserProfile);
router.post('/ecommerce/addProduct', authenticateJWT, postNewProduct);
router.post('/send/email', sendEmailToSeller);
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({ storage: storage })

router.post('/upload/images', upload.array('images', 3), addNewProductImg);
router.post('/ecommerce/filter', dateMiddleWare, filteredProduct)
router.delete('/product/delete/:id', deleteProduct);
router.put('/product/update/:id', updateProduct);
router.put('/product/image/update/:id', upload.array('images', 3), updateProductImg)


module.exports = router