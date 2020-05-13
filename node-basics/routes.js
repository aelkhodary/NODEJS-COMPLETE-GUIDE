
//console.log(req.url, req.method, req.headers);
//process.exit();
const fs = require('fs');

const routesRequest = (req, res) => {
    const url = req.url;
    const method = req.method;

    // Routing Request 
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title> Enter Message </title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit" >Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    // Redirect Request 
    if (url === '/message' & method === 'POST') {
        const body = [];
        // listten to event data
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        // listten to event end 
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            console.log(message);
            // block the next line . 
            // fs.writeFileSync('message.txt', message);//this code blocking the next line.
            // none block the code 
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end;
            });

        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> MY fisrt page </title></head>');
    res.write('<body><h1>Hello my node.js server!</h1></body>');
    res.write('</html>');
    res.end();
}

module.exports = routesRequest;
