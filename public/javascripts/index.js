window.addEventListener("load", (event) => {
    const voteButtons = document.querySelectorAll('.voteBtn')

    for (let i = 0; i < voteButtons.length; i++) {
        const button = voteButtons[i];

        button.addEventListener("click", async (event) => {
            event.preventDefault();
            console.log('-----LOG-----', event.target);
            // grab the id of the button that was clicked and split the game id from the element id
            const gameId = event.target.id.split("-")[1];
            const value = event.target.value;

            let yesOrNoVote;
            if (value === 'true') {
                yesOrNoVote = true;
            } else {
                yesOrNoVote = false;
            }

            const res = await fetch(`/api/games/${gameId}/ratings`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ gameId, yesOrNoVote }),
            });
            const data = await res.json();
            let percentage = document.getElementById("percentage");
            percentage.innerHTML = `${data.newRating}% player rating`;
        })
    }
})
