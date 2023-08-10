const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const createPath = (page) => path.join(__dirname, `${page}.html`);
const listName = [
    {name: 'Nikolay', id: 1},
    {name: 'Arina', id: 2},
    {name: 'Nitita', id: 3},
]

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('routing/styles'));
app.use(express.urlencoded({extended: false}));

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Listening port ${PORT}`)
})

app.get('/', (req, res) => {
    /*res.sendFile(createPath('home'))*/
    res.render('list', { listName, active: 'home'})
});
app.post('/add', (req, res) => {
    const newName = {name: req.body.name, id: new Date()};
    listName.push(newName);
    res.redirect('/');
})

app.get('/features', (req, res) => {
    res.render('features', {surname: 'Vinel', active: 'features'})
});
app.get('/names', (req, res) => {
    res.redirect('/')
});

app.use((req, res) => {
    res.sendFile(createPath('error'))
});