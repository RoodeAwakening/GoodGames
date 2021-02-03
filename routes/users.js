const express = require('express');
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator');
const router = express.Router();

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { logoutUser } = require('../auth');

router.get('/:id', asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId;
    console.log(userId);

    const user = await db.User.findByPk(userId);
    // req.session.user = user;
    // console.log(user);
    res.render('user-profile', { user, userId })
}))







router.post('/logout', (req,res) => {
    logoutUser(req,res)
    res.redirect('/login')
})

module.exports = router;
