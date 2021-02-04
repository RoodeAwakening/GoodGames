const express = require('express');
const router = express.Router();
window.addEventListener('DOMContentLoaded', event =>{


const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keyup',event =>{
  console.log(searchBar.value);
   let input = event.target.value 

  
  input=input.toLowerCase(); 
  let x = document.querySelectorAll('.game-container'); 
  
  for (i = 0; i < x.length; i++) {  
      if (!x[i].innerHTML.toLowerCase().includes(input)) { 
          x[i].style.display="none"; 
      } 
      else { 
          x[i].style.display="list";                  
      } 
  } 

  if(searchBar.value.length === 0){
    router.get('/', asyncHandler(async (req, res) => {
      const games = await db.Game.findAll({
          include: db.Rating
      });
      const userId = req.session.auth.userId;
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
              games[i].rating = (total/ratings.length) * 100
          }
      }
      res.render('games', { games, userId })
  }));
  }
})



})

