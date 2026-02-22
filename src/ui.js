import { Player } from "./player.js"

class UserInterface {
    constructor() {
        this.player1 = new Player()
        this.player2 = new Player()
    }

    drawP1Board(container) {
        container.innerHTML = ""
        const board = this.player1.board.grid

        board.forEach((row, x) => {
            const gridRow = document.createElement("div");
            gridRow.classList.add("grid-row")
            row.forEach((cell, y) => {
                const gridCell = document.createElement("div");
                gridCell.classList.add("grid-cell-p1");
                gridCell.dataset.x = x;
                gridCell.dataset.y = y;
                gridRow.appendChild(gridCell)

                if (cell === 0) {
                    gridCell.classList.add("water")
                } else if (cell === 1) {
                    gridCell.classList.add("miss")
                } else if (cell === 2) {
                    gridCell.classList.add("hit")
                } else {
                    gridCell.classList.add("ship")
                }
            })
            container.appendChild(gridRow)
        })
    }

    // need to figure out how to not let the player pick the same spot twice
    gameRound(x, y, container) {
        this.player2.board.receiveAttack(x, y)
        this.drawP2Board(container)
        this.player1.board.receiveRandomAttack()
        this.drawP1Board(container.previousElementSibling)
    }

    drawP2Board(container) {
        container.innerHTML = ""
        const board = this.player2.board.grid

        board.forEach((row, y) => {
            const gridRow = document.createElement("div");
            gridRow.classList.add("grid-row")
            row.forEach((cell, x) => {
                const gridCell = document.createElement("div");
                gridCell.classList.add("grid-cell-p2");
                gridCell.dataset.x = x;
                gridCell.dataset.y = y;
                gridCell.addEventListener("click", () => { 
                    this.gameRound(x, y, container)
                })

                gridRow.appendChild(gridCell)

                if (cell === 1) {
                    gridCell.classList.add("miss")
                } else if (cell === 2) {
                    gridCell.classList.add("hit")
                } else {
                    gridCell.classList.add("water")
                }
            })

            container.appendChild(gridRow)
        })
    }
}

export { UserInterface }