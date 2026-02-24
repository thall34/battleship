import "./style.css"
import { UserInterface } from "./ui.js"

const p1container = document.getElementById("player1");
const p2container = document.getElementById("player2");
const resetButton = document.getElementById("reset")
const UI = new UserInterface();

UI.gameStart(p1container, p2container)

resetButton.addEventListener("click", () => {
    UI.restartGame(p1container, p2container)
}) 