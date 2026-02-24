import "./style.css"
import { UserInterface } from "./ui.js"

const p1container = document.getElementById("player1");
const p2container = document.getElementById("player2");
const UI = new UserInterface();

UI.player1.board.placeShip(2, 7, 3, false);
UI.player1.board.placeShip(3, 0, 7, false);
UI.player1.board.placeShip(3, 1, 6, true);
UI.player1.board.placeShip(4, 4, 7, true);
UI.player1.board.placeShip(5, 2, 0, false);

UI.player2.board.placeShip(2, 7, 3, true);
UI.player2.board.placeShip(3, 0, 6, false);
UI.player2.board.placeShip(3, 1, 5, true);
UI.player2.board.placeShip(4, 4, 6, false);
UI.player2.board.placeShip(5, 1, 2, true);

UI.drawP1Board(p1container);
UI.drawP2Board(p2container);