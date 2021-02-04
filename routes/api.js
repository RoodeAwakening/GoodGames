const express = require('express');
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator');
const router = express.Router();

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { logoutUser } = require('../auth');


router.post('/:id/ratings', asyncHandler (async (req, res) => {
  const userId = req.session.auth.userId;
  const { gameId, yesOrNoVote } = req.body;

  const checkRating = await db.Rating.findAll({ where: { userId, gameId}})
  
  let newRating;
  if(checkRating.length === 0){
    await db.Rating.create({userId, gameId, yesOrNoVote})
    const allRatings = await db.Rating.findAll({ where: { gameId } });
    
    let total = 0;
    for (let i = 0; i < allRatings.length; i++){
      const rating = allRatings[i]
      if (rating.yesOrNoVote){
        total+=1
      }
    }
    
    if (allRatings.length === 0) {
      newRating = 0;
    } else {
      newRating = Math.floor((total/allRatings.length) * 100)
    }
    res.json({ newRating })

  } else if(checkRating.yesOrNoVote === true){
      await checkRating.update({ yesOrNoVote: false })
      
      const allRatings = await db.Rating.findAll({ where: { gameId } });
      
      let total = 0;
      for (let i = 0; i < allRatings.length; i++){
        const rating = allRatings[i]
        if (rating.yesOrNoVote){
          total+=1
        }
      }
      
      if (allRatings.length === 0) {
        newRating = 0;
      } else {
        newRating = Math.floor((total/allRatings.length) * 100)
      }
    res.json({newRating})
  } else if(checkRating.yesOrNoVote === false){
      await checkRating.update({ yesOrNoVote: true })
      
      const allRatings = await db.Rating.findAll({ where: { gameId } });
      
      let total = 0;
      for (let i = 0; i < allRatings.length; i++){
        const rating = allRatings[i]
        if (rating.yesOrNoVote){
          total+=1
        }
      }
      
      if (allRatings.length === 0) {
        newRating = 0;
      } else {
        newRating = Math.floor((total/allRatings.length) * 100)
      }
  }
  }))
  
  router.post("/:id/statuses", asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId;
    
    const { gameId, status } = req.body;
    
    if(status === 'delete'){
      await db.GameStatus.destroy({ where: {
        userId,
        gameId
      }})
    }else {
      
      const gameStatus = await db.GameStatus.create({ userId, gameId, status });
      
      res.json({ gameStatus });
  }
}));

// router.patch("/:id/statuses", asyncHandler(async (req, res) => {
//   const { id, status } = req.body;
//   // const statusUpdate = await db.GameStatus.findOne({ where: status });

//   // await statusUpdate.update

// }))

router.patch('/:id/ratings', asyncHandler(async(req,res)=>{

}))


router.delete('/:id/ratings',asyncHandler(async(req,res)=>{

}))

module.exports = router;
