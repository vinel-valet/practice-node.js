const express = require('express');
const {getUser, getUsers, addUser} = require("../controllers/user-controller");
const router = express.Router();

router.get('/user/:id', getUser);
router.get('/', getUsers);
router.post('/add', addUser)

module.exports = router;