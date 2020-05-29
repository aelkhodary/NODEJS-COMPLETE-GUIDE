const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();
// the ejs templating engine 
app.set('view engine', 'ejs');
app.set('views', 'views');

//const adminRoutes = require('./routes/admin');
const adminData = require('./routes/admin');

const shopeRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({ extended: false }));

//console.log(path.join(__dirname, 'public'));
///Users/aelkhodary/Documents/GitHub/NODEJS-COMPLETE-GUIDE/node-express-router-html/public
app.use(express.static(path.join(__dirname, 'public')));

//add filter /admin
app.use('/admin', adminData.routes);

app.use(shopeRoutes);


//catch and handel any request 
app.use('/', (req, res, next) => {

    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404.ejs', { pageTitle: 'Page Not Found', path: '/' });
});

app.listen(8081);