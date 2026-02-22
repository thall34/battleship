import { Ship } from "./ship.js"

const patrol = new Ship(2)
const submarine = new Ship(3)
const destroyer = new Ship(3)
const battleship = new Ship(4)
const carrier = new Ship(5)

test("Ship length of 2", () => {
    expect(patrol.length).toBe(2)
})

test("Ship length of 5", () => {
    expect(carrier.length).toBe(5)
})

test("counts 1 hit on a ship", () => {
    patrol.hit()
    expect(patrol.hits).toBe(1)
})

test("counts 2 hits on a ship", () => {
    patrol.hit()
    expect(patrol.hits).toBe(2)
})

test("counts the patrol boat as sunk", () => {
    expect(patrol.isSunk()).toBe(true)
})

test("counts carrier as not sunk", () => {
    carrier.hit()
    expect(carrier.isSunk()).toBe(false)
})