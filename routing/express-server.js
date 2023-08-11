const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const userRouter = require('./routes/user-routes')
const PORT = 3000;
const db = 'mongodb+srv://vinel-admin:mano-9.kolyan@cluster0.vfoic0m.mongodb.net/node-list-name?retryWrites=true&w=majority';

mongoose.connect(db)
    .then(()=> console.log('connected'))
    .catch((error)=> console.log(error));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('routing/styles'));
app.use(express.urlencoded({extended: false}));
app.use(userRouter);

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Listening port ${PORT}`)
})

app.get('/features', (req, res) => {
    res.render('features', {surname: 'Vinel', active: 'features'})
});
app.get('/names', (req, res) => {
    res.redirect('/')
});
app.use((req, res) => {
    res.render('error-page', {active: 'home'});
});