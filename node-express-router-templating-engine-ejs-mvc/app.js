const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const errorController = require('./controllers/error');


const app = express();
// the ejs templating engine 
app.set('view engine', 'ejs');
app.set('views', 'views');

//const adminRoutes = require('./routes/admin');
const adminRoutes = require('./routes/admin');

const shopeRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({ extended: false }));

//console.log(path.join(__dirname, 'public'));
///Users/aelkhodary/Documents/GitHub/NODEJS-COMPLETE-GUIDE/node-express-router-html/public
app.use(express.static(path.join(__dirname, 'public')));

//add filter /admin
app.use('/admin', adminRoutes);

app.use(shopeRoutes);


//catch and handel any request 
app.use('/', errorController.get404);

app.listen(8081);