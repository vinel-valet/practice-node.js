const express = require('express');
const app = express();
const path = require('path');
const createPath = (page) => path.join(__dirname, `${page}.html`)

app.listen(3000, (error) => {
    error ? console.log(error) : console.log('Listening port')
})

app.get('/', (req, res) => {
    res.sendFile(createPath('home'))
});
app.get('/about', (req, res) => {
    res.redirect('/')
});

app.use((req, res) => {
    res.sendFile(createPath('error'))
});

