const User = require("../models/user");

const getUser = (req, res) => {
    User.findById(req.params.id)
        .then((user) => res.render('user', { user, active: 'home' }))
        .catch((error)=> console.log(error))
}

const getUsers = (req, res) => {
    User.find()
        .then((listName) => res.render('list', { listName, active: 'home'}))
        .catch((error)=> console.log(error))
}

const addUser = (req, res) => {
    const newName = {name: req.body.name};
    const user = new User(newName);
    user.save()
        .then(()=>res.redirect('/'))
        .catch((error)=>console.log(error))
}
module.exports = {
    getUser,
    getUsers,
    addUser
}