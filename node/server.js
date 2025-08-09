const http = require('http');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    // send response
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h2>This is the server</h2>')
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});