const products = require('./product')
let item = (a) => {
    let itemOfproduct = products.find((arr) => arr.name == a)
    console.log(itemOfproduct);
}

item("dell");