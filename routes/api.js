const express = require('express');
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator');
const router = express.Router();

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { logoutUser } = require('../auth');


router.post('/:id/ratings',asyncHandler(async(req,res)=>{
  const { userId, gameId, yesOrNoVote } = req.body
  const newRating = await db.Rating.create ({userId, gameId, yesOrNoVote})
  res.json({newRating})
}))


router.patch('/:id/ratings', asyncHandler(async(req,res)=>{

}))


router.delete('/:id/ratings',asyncHandler(async(req,res)=>{

}))

module.exports = router;