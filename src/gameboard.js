import { Ship } from "./ship.js"

class Gameboard {
    constructor(size) {
        let grid = [];

        for (let i = 0; i < size; i++) {
            grid[i] = [];
            for (let j = 0; j < size; j++) {
                grid[i][j] = 0;
            }
        }

        this.grid = grid
        this.size = size
        this.ships = []
        this.shots = new Set()
    }

    canPlace(length, x, y, isHorizontal) {
        if (x < 0 || y < 0 || x > this.size || y > this.size) {
            return false;
        } else {
            if (isHorizontal) {
                if (x + length > this.size) {
                    return false;
                } else {
                    for (let i = 0; i < length; i++) {
                        if (typeof this.grid[y][x + i] !== "number") {
                            return false;
                        }
                    }
                }
            } else {
                if (y + length > this.size) {
                    return false;
                } else {
                    for (let i = 0; i < length; i++) {
                        if (typeof this.grid[y + i][x] !== "number") {
                            return false;
                        }
                    }
                }
            }

            return true;
        }
    }

    placeShip(length, x, y, isHorizontal) {
        if (this.canPlace(length, x, y, isHorizontal)) {
            const ship = new Ship(length);
            this.ships.push(ship);
            
            if (isHorizontal) {
                for (let i = 0; i < length; i++) {
                    this.grid[y][x + i] = ship;
                }
            } else {
                for (let i = 0; i < length; i++) {
                    this.grid[y + i][x] = ship;
                }
            }
        }
    }

    receiveAttack(x, y) {
        if (x < 0 || y < 0 || x > this.size || y > this.size) {
            return false;
        }
        if (this.grid[y][x] === 0) {
            this.grid[y][x] = 1;
            return true;
        } else if (this.grid[y][x] === 1 || this.grid[y][x] === 2) {
            return false;
        } else {
            this.grid[y][x].hit();
            this.grid[y][x] = 2;
            return true;
        }
    }

    receiveRandomAttack() {
        let legalMove = false;

        while (!legalMove) {
            let x = Math.floor(Math.random() * 10);
            let y = Math.floor(Math.random() * 10);

            if (this.grid[y][x] === 0) {
                this.grid[y][x] = 1;
                legalMove = true;
            } else if (this.grid[y][x] === 1 || this.grid[y][x] === 2) {
                legalMove = false;
            } else {
                this.grid[y][x].hit()
                this.grid[y][x] = 2;
                legalMove = true;
            }
        }
    }

    allShipsSunk() {
        let count = 0;

        this.ships.forEach((ship) => {
            if (ship.isSunk()) {
                count++;
            }
        })

        if (count >= this.ships.length) {
            return true;
        } else {
            return false;
        }
    }
}

export { Gameboard }