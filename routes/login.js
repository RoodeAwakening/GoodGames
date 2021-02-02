const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();

const db = require('../db/models');
const bcrypt = require('bcryptjs')
const { csrfProtection, asyncHandler } = require('./utils');

/* GET users listing. */
router.get('/', csrfProtection, asyncHandler(async (req, res)=> {
  res.render('login', { csrfToken: req.csrfToken() })
  })
);

const loginValidators = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password'),
];

router.post("/", csrfProtection, loginValidators, asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body.password)
  // req.session.user = user;

  let errors = [];
  const validatorErrors = validationResult(req);
  console.log(validatorErrors)
  if (validatorErrors.isEmpty()) {
    const user = await db.User.findOne({ where: { email } });

    if (user !== null) {
      const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());
      
      if (passwordMatch) {
        
        return res.redirect('/games');
        
      }
    }

    errors.push('Login failed for the provided email address and password');

  } else {
    errors = validatorErrors.array().map((error) => error.msg);
  }

  res.render('login', {
    title: 'Login',
    email,
    errors,
    csrfToken: req.csrfToken(),
  })
}));


module.exports = router;
