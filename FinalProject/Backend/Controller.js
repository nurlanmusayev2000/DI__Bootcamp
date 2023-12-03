const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'Mn1475369',
        database: 'ecommerce',
        port: 5432
    }
});
const secretKey = 'mySecretKey'


const getAllProductDetails = async(req, res) => {
    console.log('mainpagefetch');
    const productTable = await knex.select().from('products').orderBy('product_date', 'desc').limit(15);
    const categoryTable = await knex.select().from('categories');
    const subCategoryTb = await knex.select().from("subCategory");
    const productWithCategories = await knex.select('products.product_id', 'products.product_category', 'products.product_subcategory', 'subCategory.subCatId', 'subCategory.subCatName', 'subCategory.subCatId', 'subCategory.categoryRefer', 'categories.id', 'categories.categoryname').from('products').join('subCategory', 'products.product_subcategory', '=', 'subCategory.subCatId').join('categories', 'subCategory.categoryRefer', '=', 'categories.id')

    const countofSubCat = await knex.select('product_subcategory').count().from('products').groupBy('product_subcategory')
    const countofCat = await knex.select('product_category').count().from('products').groupBy('product_category')

    res.json({ "categories": categoryTable, "products": productTable, "subCategory": subCategoryTb, "tables": productWithCategories, "count": [countofCat, countofSubCat] })
}

const getProductForCategory = async(req, res) => {
    const id = req.params.id;
    console.log(id);
    const products = await knex('products').select().where({ 'product_category': id })
    res.json({ products })
}

const getProduct = async(req, res) => {
    const id = req.params.id;
    const product = await knex.select('*')
        .from('products')
        .join('categories', 'categories.id', '=', 'products.product_category')
        .where({ 'products.product_id': id });

    res.json({ "product": product })
}

const getProductForSearchResult = async(req, res) => {
    try {
        const searchParam = req.params.search;
        const searchProduct = await knex.select().from('products').whereRaw('LOWER(product_name) LIKE ?', '%' + searchParam.toLowerCase() + '%').orWhereRaw('LOWER(product_description) LIKE ?', '%' + searchParam.toLowerCase() + '%');
        res.json({ "data": searchProduct })
    } catch (error) {
        res.json({ "data": "Product not found" })
    }
}

const postSignUpUser = async(req, res) => {
    try {
        const data = req.body.data;
        console.log(req.body.data);
        const hashedPassword = bcrypt.hashSync(data.password, 12);
        const existingUser = await knex('login').select('username').where({ 'username': data.username });
        const checkEmail = await knex('usersdata').select('email').where({ 'email': data.email })
        console.log(existingUser, checkEmail);
        if (existingUser.length || checkEmail.length) {
            return res.status(409).json({ message: "username or email already exist" })
        }
        const newUser = await knex('usersdata').insert({ "username": data.username, "name": data.name, "surname": data.surname, "phonenumber": data.phone, "email": data.email })
        await knex('login').insert({ "username": data.username, "hashedpassword": hashedPassword });

        const newUserIdAndUsername = await knex('usersdata').select('id', 'username').where({ 'username': data.username });


        const token = jwt.sign({ id: newUserIdAndUsername[0].id, username: newUserIdAndUsername[0].username }, secretKey, {
            expiresIn: '1h', // Token expires in 1 hour
        });
        console.log('signupsuccess', newUser, token);


        res.status(200).json({ message: 'Login successful', user: newUser, token });
    } catch (error) {
        res.json({ "error": error })
    }


}

const postLoginUser = async(req, res) => {
    try {
        const { username, password } = req.body.data;
        const user = await knex('login').select('username', 'hashedpassword').where({ 'username': username });
        if (!user.length || !bcrypt.compareSync(password, user[0].hashedpassword)) {
            return res.status(401).json({ message: 'Invalid credentials' });

        }
        const userdetails = await knex('usersdata').select().where({ 'username': username });
        const productsOfUser = await knex('products').select().where({ "refer_user": userdetails[0].id })
        console.log('loged in id and username', userdetails[0].id, userdetails[0].username);
        const token = jwt.sign({ id: userdetails[0].id, username: userdetails[0].username }, secretKey, {
            expiresIn: '5h'
        });
        const refreshToken = jwt.sign({ id: user.id }, secretKey, {
            expiresIn: '10h', // Refresh token expires in 7 days
        });
        console.log('loginfetched');
        res.json({ message: 'Login successful', user: userdetails, productsOfUser, token, refreshToken });
    } catch (error) {
        res.json({ "error": error })
    }

}

const getUserProfile = async(req, res) => {
    try {
        const username = req.user
        console.log('aftermiddleware', username);
        const persistedUser = await knex('usersdata').select().where({ 'username': username });
        console.log('afterpersisteduser', persistedUser);

        const productsOfUser = await knex('products').select().where({ "refer_user": persistedUser[0].id })

        res.json({ 'userdetails': persistedUser, productsOfUser })
    } catch (error) {
        res.json({ "error": error })
    }



}

const postNewProduct = async(req, res) => {
    try {
        console.log(req.refer_user);
        const { product_category, product_subcategory, product_name, product_description, img1, img2, img3, price, city, MoreaboutProduct } = req.body.values;
        await knex('products').insert({ product_category, product_subcategory, product_name, product_description, 'refer_user': req.refer_user, price, city, MoreaboutProduct });

        res.json({ 'message': "product added successfully" })
    } catch (error) {
        res.json({ "error": error })
    }
}

const addNewProductImg = async(req, res) => {
    try {
        console.log('files', req.files);
        const refer_product = await knex('products').select('product_id').orderBy('product_id', 'desc').limit(1);
        console.log(refer_product[0].product_id);

        const imgFiles = req.files
            // Save the files to the database or perform other operations
        const baseUrl = "http://localhost:3005/";
        const relativePath = `${ imgFiles[0].path}`;
        const imageUrl = baseUrl + relativePath;
        const relativePath1 = `${imgFiles[1].path}`;
        const imageUrl1 = baseUrl + relativePath1;
        const relativePath2 = `${imgFiles[2].path}`;
        const imageUrl2 = baseUrl + relativePath2;
        await knex('products').where({ 'product_id': refer_product[0].product_id }).update({ 'img1': imageUrl, 'img2': imageUrl1, 'img3': imageUrl2 }, ['product_id', 'img1', 'img2', 'img3'])
        res.json({ message: 'Images uploaded successfully' });
    } catch (error) {
        res.json({ "error": error })
    }

}

const deleteProduct = async(req, res) => {
    try {
        const id = req.params.id
        const deletidProduct = await knex('products').where({ 'product_id': id }).del()
        console.log({ deletidProduct });
        res.json({ message: 'product deleted succesfully' })
    } catch (error) {
        res.json({ "error": error })
    }

}

const updateProduct = async(req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        console.log(id, body);
        await knex('products').where({ 'product_id': id }).update({ 'product_name': body.name, 'product_description': body.product_description, 'price': body.price, 'city': body.city, 'product_category': body.product_category, 'product_subcategory': body.product_subcategory, 'MoreaboutProduct': body.moreAboutProduct })
        res.send('ok')
    } catch (error) {
        res.json({ "error": error })
    }

}

const updateProductImg = async(req, res) => {
    try {
        const id = req.params.id
        const imgFiles = req.files
            // Save the files to the database or perform other operations
        const baseUrl = "http://localhost:3005/";
        const relativePath = `${ imgFiles[0].path}`;
        const imageUrl = baseUrl + relativePath;
        const relativePath1 = `${imgFiles[1].path}`;
        const imageUrl1 = baseUrl + relativePath1;
        const relativePath2 = `${imgFiles[2].path}`;
        const imageUrl2 = baseUrl + relativePath2;
        await knex('products').where({ 'product_id': id }).update({ 'img1': imageUrl, 'img2': imageUrl1, 'img3': imageUrl2 })
        res.send('ok')
    } catch (error) {
        res.json({ "error": error })
    }

}


module.exports = {
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
    updateProductImg
}