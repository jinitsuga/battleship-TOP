import { Gameboard } from "./gameboard";
import { app } from "./index.js";

const ArtificialInt = function () {
  const aiBoard = Gameboard();
  const setupBoard = () => {
    aiBoard.setBoard("ai-board", "ai");
  };
  const enableAiShips = function () {
    const carrier = aiBoard.makeShip().carrier;
    const battleship = aiBoard.makeShip().battleship;
    const destroyer = aiBoard.makeShip().destroyer;
    const submarine = aiBoard.makeShip().submarine;
    const patrolBoat = aiBoard.makeShip().patrolBoat;
    return [carrier, battleship, destroyer, submarine, patrolBoat];
  };
  return { setupBoard, enableAiShips };
};
export { ArtificialInt };
