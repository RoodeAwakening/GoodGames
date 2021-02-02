const express = require('express');
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator');
const router = express.Router();

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { logoutUser } = require('../auth');

router.post('/logout', (req,res) => {
    logoutUser(req,res)
    res.redirect('/login')
})

module.exports = router;
