const express = require('express');
const router = express.Router();

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');

router.get('/', asyncHandler(async(req,res) => {
    const games = await db.Game.findAll()
    res.render('games', {games})
}))

router.get('/:id', asyncHandler(async(req,res) => {
    const gameId = req.params.id
    const game = await db.Game.findByPk(gameId)
    res.render('game-detail', {game})
}))

module.exports = router;