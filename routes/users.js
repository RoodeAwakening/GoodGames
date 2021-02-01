var express = require('express');
var router = express.Router();
const {csrfProtection, asyncHandler} = require('./utils')
const db = require('../db/models')
const {check, validationResult} = require('express-validator');

/* GET users listing. */
router.get('/signup', csrfProtection, (req,res) => {
  const user = db.User.build()
  res.render('signup', {
    title: 'Register',
    user, 
    csrfToken: req.csrfToken()
  });
});

const userValidators = [

]

router.post('/signup', csrfProtection, userValidators, asyncHandler(async (req,res) => {
  const {
    username,
    firstname,
    lastName,
    email,
    hasedPassword
  }
  await User.build({username, firstname, lastName, email, hasedPassword})
  const validatorErrors = validationResult(req)

  if(validatorErrors.isEmpty()) {
    await user.save();
    res.redirect('/games');
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render('signup', {
      title: 'Register',
      user,
      errors,
      csrfToken: req.csrfToken()
    })
  }
}))

module.exports = router;

