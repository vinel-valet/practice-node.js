const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log('Server');
    res.setHeader('Content-type', 'text/html')
    if (req.url === '/') {
        fs.readFile('routing/home.html', (err, data) => {
            if (err) {
                console.log(err);
                res.end();
            } else {
                res.end(data)
            }
        })
    }
});

server.listen(3000, 'localhost', (error) => {
    error ? console.log(error) : console.log('Listening port')
})