const express = require('express');

/*const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');

const shopeRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);

app.use(shopeRoutes);*/

//catch and handel any request 
app.use('/', (req, res, next) => {

    res.status(404).send('<h1>Page Note Found</h1>');
});

app.listen(8080);