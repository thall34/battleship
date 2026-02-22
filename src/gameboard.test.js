import expect from "expect";
import { Gameboard } from "./gameboard.js"

const board = new Gameboard(10);

test("default gameboard", () => {
    expect(board.grid).toEqual(
        [[0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]]
    )
})

test("placement function returns false if x is less than 0", () => {
    expect(board.canPlace(1, -1, 0, true)).toBe(false)
})

test("placement function returns false if y is less than 0", () => {
    expect(board.canPlace(1, 0, -1, true)).toBe(false)
})

test("placement function returns false if x is more than 10 on a horizontal move", () => {
    expect(board.canPlace(1, 15, 0, true)).toBe(false)
})

test("placement function returns true for a legal horizontal move", () => {
    expect(board.canPlace(1, 0, 0, true)).toBe(true)
})

test("placement function returns false if x is more than 10 on a vertical move", () => {
    expect(board.canPlace(1, 15, 0, false)).toBe(false)
})

test("placement function returns true for a legal vertical move", () => {
    expect(board.canPlace(1, 0, 0, false)).toBe(true)
})

test("if gridpoint is already occupied by a ship, canPlace returns false", () => {
    board.placeShip(1, 2, 2, true)
    expect(board.canPlace(3, 2, 1, false)).toBe(false)
})

test("creating a ship stores properly in the ships array", () => {
    expect(board.ships.length).toBe(1)
})

test("receive attack outside of the board returns false", () => {
    expect(board.receiveAttack(15, 15)).toBe(false)
})

test("receive attack on empty space returns true", () => {
    expect(board.receiveAttack(5, 5)).toBe(true)
})

test("receive attack on ship space returns true", () => {
    expect(board.receiveAttack(2, 2)).toBe(true)
})

test("receive attack on an already shot space returns false", () => {
    expect(board.receiveAttack(2, 2)).toBe(false)
})

test("first ship in array should have 1 hit", () => {
    expect(board.ships[0].hits).toBe(1)
})

test("returns false if all ships aren't sunk", () => {
    board.placeShip(1, 8, 8, true)
    expect(board.allShipsSunk()).toBe(false)
})

test("returns true if all ships are sunk", () => {
    board.receiveAttack(8, 8)
    expect(board.allShipsSunk()).toBe(true)
})