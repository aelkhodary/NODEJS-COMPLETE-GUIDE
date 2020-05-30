
// /array const products = [];
const fs = require("fs");

const path = require("path");

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'product.json');
const getProductsFromFile = (cb) => {

    fs.readFile(p, (err, fileContent) => {
        let products = [];

        if (err) {
            cb(products);
        } else {
            products = JSON.parse(fileContent)
            cb(products);
        }
    });
}



module.exports = class Product {

    constructor(title) {
        this.title = title;
    }

    save() {

        fs.readFile(p, (err, fileContent) => {

            getProductsFromFile(products => {
                products.push(this)
                fs.writeFile(p, JSON.stringify(products), (err) => {
                    console.log(err);
                });
            });

        });
        // /array products.push(this);
    }

    static fetchAll(cb) {

        getProductsFromFile(cb);

        // /array return products;
    }
}