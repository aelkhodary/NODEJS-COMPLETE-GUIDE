const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];
// admin/add-product =>Get
router.get('/add-product', (req, res, next) => {
    /*__dirname current directory path 
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));*/
    res.render('add-product', { pageTitle: 'Add Product', path: '/add-product' });
});

// admin/add-product => Post
router.post('/add-product', (req, res, next) => {
    console.log(req.body);

    products.push({ title: req.body.title })
    res.redirect('/');
});

//module.exports = router; 

exports.routes = router;
exports.products = products;