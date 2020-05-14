
const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('this always runs!');
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('In the Next Middleware');

    res.send('<h1> the product page </h1>');
});

app.use('/', (req, res, next) => {
    console.log('In the Next Middleware');

    res.send('<h1> welcome to default routing  </h1>');
});


app.listen(8080);



