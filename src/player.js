import { Gameboard } from "./gameboard.js"

class Player {
    constructor() {
        this.board = new Gameboard(10);
        this.lengths = [5, 4, 3, 3, 2]
    }

    generateShips() {
        this.lengths.forEach((length) => {
            let x = Math.floor(Math.random() * this.board.size);
            let y = Math.floor(Math.random() * this.board.size);
            let isHorizontal = Math.random() < 0.5
            while (!this.board.canPlace(length, x, y, isHorizontal)) {
                x = Math.floor(Math.random() * this.board.size);
                y = Math.floor(Math.random() * this.board.size);
                isHorizontal = Math.random() < 0.5    
            }

            this.board.placeShip(length, x, y, isHorizontal)
        })
    }
}

export { Player }