window.addEventListener("load", (event)=>{
    const voteButtons = document.getElementsByClassName('voteBtn')
    

    for(button of voteButtons){
        button.addEventListener("click", async(event)=>{
            const id = event.target.id
            const res = await fetch (`/api/games/${id}/ratings`, {
                method: "POST", 
                "CONTENT-TYPE": "application/json",
                body: {
                    comment:'testing'
                },
            })
            console.log('----------',body);
            const data = await res.json() 
        })
    }
})