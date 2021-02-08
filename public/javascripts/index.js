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
    const statuses = ['toPlay', 'playing', 'played']

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
            } else if (value === "delete") {
                status = "delete";
                statusBtns.forEach(button => {
                    button.style.backgroundColor = "#e8e8e8";
                })
            }

            const res = await fetch(`/api/games/${gameId}/statuses`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ gameId, status }),
            });
            const data = await res.json();
            const nonTargets = statuses.filter(status => status != data.gameStatus.status)
            const nonTarget1 = document.getElementById(`${nonTargets[0]}-${data.gameStatus.gameId}`)
            const nonTarget2 = document.getElementById(`${nonTargets[1]}-${data.gameStatus.gameId}`)
            const targetBtn = document
            .getElementById(`${data.gameStatus.status}-${data.gameStatus.gameId}`)

            nonTarget1.style.backgroundColor = "#e8e8e8";
            nonTarget2.style.backgroundColor = "#e8e8e8";
            targetBtn.style.backgroundColor = "red";
        });
    };
});
