import { Gameboard } from "./gameboard";
import { app } from "./index.js";
const aiBoard = Gameboard();
const Ai = function () {
  const showBoard = function () {
    aiBoard.setBoard();
  };
  const aiShips = function () {
    const carrier = aiBoard.makeShip().carrier;
    const battleship = aiBoard.makeShip().battleship;
    const destroyer = aiBoard.makeShip().destroyer;
    const submarine = aiBoard.makeShip().submarine;
    const patrolBoat = aiBoard.makeShip().patrolBoat;
  };
  return { showBoard, aiShips, aiBoard };
};

export { Ai, aiBoard };
