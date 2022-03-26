const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req,res) => {
    //usind lodash
    const num = _.random(0,20);
    console.log(num);

    //routing

    let path = './views/';

    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('location', '/about');
            break;
        default :
            path += '404.html';
            res.statusCode = 404;
            break;

    }

    //get a response back to the browser(the content the browser will display)
    //set the header
    res.setHeader('Content-Type', 'text/html');

    //write to the browser and get a response
    //sending a file to the browser

    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err)
            res.end()
        } else {
            res.write(data)
            res.end();
        }
    })
})

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
})