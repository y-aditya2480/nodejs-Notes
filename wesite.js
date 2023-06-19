const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);

    res.setHeader('Content-Type', 'text/html')
           //READ ABOUT STATUS CODE ON:- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

    if(req.url == '/') {
        res.statusCode = 200;
        res.end('<h1> This is aditya</h1> <p> Hello World!</p>');
    }
    else if(req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1> This is about</h1> <p> About Hello World!</p>');
    }
    else if(req.url == '/hello') {
        req.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else{
        res.statusCode = 404;
    }
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})

// open the port 300 on the browser by {locahost: 3000}

