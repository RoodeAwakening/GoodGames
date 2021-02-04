window.addEventListener("load", (event) => {
    const voteButtons = document.querySelectorAll('.voteBtn')

    for (let i = 0; i < voteButtons.length; i++) {
        const button = voteButtons[i];

        button.addEventListener("click", async (event) => {
            event.preventDefault();
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

    const statusBtns = document.querySelectorAll(".statusBtn");

    for (let i = 0; i < statusBtns.length; i++) {
        const statusBtn = statusBtns[i];

        statusBtn.addEventListener("click", async (event) => {
            event.preventDefault();
            const gameId = event.target.id.split("-")[1];
            const value = event.target.id.split("-")[0];

            let status;
            if (value === "toPlay") {
                status = "toPlay";
            } else if (value === "played") {
                status = "played";
            } else if (value === "playing") {
                status = "playing";
            } else if(value === "delete"){
                status = "delete"
            }

            const res = await fetch(`/api/games/${gameId}/statuses`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ gameId, status }),
            });
            const data = await res.json();

            const targetBtn = document
            .getElementById(`${data.gameStatus.status}-${data.gameStatus.gameId}`)

            targetBtn.style.backgroundColor = "red";
        })
    }
})
