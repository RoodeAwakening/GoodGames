window.addEventListener("load", (event)=>{
    const voteButtons = document.querySelectorAll('.voteBtn')

    
    
    for (let i = 0; i < voteButtons.length; i++) {
        const button = voteButtons[i];
        
        button.addEventListener("click", async(event)=>{
        console.log('-----LOG-----',event.target.id);
        
        //const id = event.target.id
        const res = await fetch(`/api/games/${id}/ratings`, {
            method: "POST", 
            "Content-Type": "application/json",
            body: {
                userId: 1,
                gameId: 1,
                yesOrNoVote: true,
                
            },
        })
        const data = await res.json() 
    })
}
   
})