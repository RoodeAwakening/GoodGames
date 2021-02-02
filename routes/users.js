const express = require('express');
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator');
const router = express.Router();

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { logoutUser } = require('../auth');

router.get('/:id', asyncHandler(async(req,res) => {
    const userId = req.params.id
    const user = await db.User.findByPk(req.params.id)
    res.render('user-profile', {user})
}))







router.post('/logout', (req,res) => {
    logoutUser(req,res)
    res.redirect('/login')
})

module.exports = router;
