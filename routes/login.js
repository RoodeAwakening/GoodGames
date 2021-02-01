const express = require('express');
const router = express.Router();

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');

/* GET users listing. */
router.get('/', csrfProtection, asyncHandler(async(req, res)=> {
  //todo create login.pug
  res.render('login', {csrfToken: req.csrfToken()})

})
);






module.exports = router;
