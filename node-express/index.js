//const http = require('http');

const express = require('express');

const app = express();
app.use((req, res, next) => {
    console.log('In the Middleware');
    next(); //allow the request to continue to the next middleware in line 
});

app.use((req, res, next) => {
    console.log('In the Next Middleware');
    //res.setHeader('Content-Type', 'text/html');
    res.send('<h1>Hello from express</h1>');
});

/*const server = http.createServer(app);
server.listen(8080);*/
app.listen(8080);



