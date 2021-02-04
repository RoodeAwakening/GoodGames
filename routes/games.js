const express = require('express');
const router = express.Router();

const db = require('../db/models');
const rating = require('../db/models/rating');
const { csrfProtection, asyncHandler } = require('./utils');

router.get('/', asyncHandler(async (req, res) => {
    if(!req.session.auth){
        res.redirect('/login')
    }

    const userId = req.session.auth.userId;
    const games = await db.Game.findAll({
        include: db.Rating
    });
    
    for(let i = 0; i < games.length; i++){
        let total = 0
        const ratings = games[i].Ratings
        for(let j = 0; j < ratings.length; j++){
            const rating = ratings[j]
            if(rating.yesOrNoVote){
                total+=1
            }
        }
        if (!ratings.length) {
            games[i].rating = 0
        } else {
            games[i].rating = Math.floor((total/ratings.length) * 100)
        }
    }
    res.render('games', { games, userId })
}));

router.get('/:id', asyncHandler(async (req, res) => {
    if(!req.session.auth){
        res.redirect('/login')
    }
    const userId = req.session.auth.userId;
    const gameId = req.params.id

    
    const game = await db.Game.findByPk(gameId, {
        include: [db.Console, db.Publisher, db.Genre]
    });
    const allRatings = await db.Rating.findAll({ where: { gameId } });
    const allComments = await db.Comment.findAll({ where: { gameId } });
    const status = await db.GameStatus.findOne({where :{
        userId,
        gameId
    }})

    let total = 0
    for (let i = 0; i < allRatings.length; i++){
        const rating = allRatings[i]
        if (rating.yesOrNoVote){
            total+=1
        }
    }
    if (allRatings.length === 0) {
        game.rating = 0;
    } else {
        game.rating = Math.floor((total/allRatings.length) * 100)
    }
    res.render('game-detail', { game, allComments, status, userId })
}))


router.post('/:id', asyncHandler (async (req,res) => {
    const { comment } = req.body
    const userId = req.session.auth.userId;
    const gameId = await req.params.id

    await db.Comment.create({userId, gameId, comment})

    res.redirect(`/games/${gameId}`)

}))




module.exports = router;
