const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];
// admin/add-product =>Get
router.get('/add-product', (req, res, next) => {

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