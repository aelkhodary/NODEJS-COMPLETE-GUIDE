const express = require('express');

const router = express.Router();
// admin/add-product =>Get
router.get('/add-product', (req, res, next) => {
    res.send('<form action="/admin/product" method="POST"> <input type="text" name="title"><button type="submit">add product</button> </form>');
});
// admin/product => Post
router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router; 