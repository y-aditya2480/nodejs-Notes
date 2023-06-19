const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;       //READ ABOUT STATUS CODE ON:- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    res.setHeader('Content-Type', 'text/html')

    res.end('<h1> This is aditya</h1> <p> Hello World!</p>');
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})

// open the port 300 on the browser by {locahost: 3000}

