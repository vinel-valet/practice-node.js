const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const User = require('./models/user')
const PORT = 3000;
const db = 'mongodb+srv://vinel-admin:mano-9.kolyan@cluster0.vfoic0m.mongodb.net/node-list-name?retryWrites=true&w=majority';

mongoose.connect(db)
    .then((res)=> console.log('connected'))
    .catch((error)=> console.log(error));

const createPath = (page) => path.join(__dirname, `${page}.html`);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('routing/styles'));
app.use(express.urlencoded({extended: false}));

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Listening port ${PORT}`)
})

app.get('/user/:id', (req, res) => {
    User.findById(req.params.id)
        .then((user) => res.render('user', { user, active: 'home' }))
        .catch((error)=> console.log(error))
});

app.get('/', (req, res) => {
    User.find()
        .then((listName) => res.render('list', { listName, active: 'home'}))
        .catch((error)=> console.log(error))
});

app.get('/features', (req, res) => {
    res.render('features', {surname: 'Vinel', active: 'features'})
});
app.get('/names', (req, res) => {
    res.redirect('/')
});

app.post('/add', (req, res) => {
    const newName = {name: req.body.name};
    const user = new User(newName);
    user.save()
        .then(()=>res.redirect('/'))
        .catch((error)=>console.log(error))
})

app.use((req, res) => {
    res.render('error-page', {active: 'home'});
});