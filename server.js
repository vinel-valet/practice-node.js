const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Server');
    /*res.setHeader('Content-type', 'text/html')
    res.write("<h2>Hello</h2>");*/

    res.setHeader('Content-Type', 'application/json');
    const data = JSON.stringify([
        {name: 'Nikolay', age: 28},
        {name: 'Arina', age: 28},
    ])
    res.end(data);
});

server.listen(3000, 'localhost', (error) => {
    error ? console.log(error) : console.log('Listening port')
})