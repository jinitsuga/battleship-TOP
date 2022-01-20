import { Ship } from "./ship.js";
import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
export { app };
const app = document.querySelector("#app");
const board = Gameboard();
const player = Player();
board.setBoard();
const dockBtns = player.deploymentButtons();

// Making ships (docked) available for deployment

const carrier = board.makeShip().carrier;
const battleship = board.makeShip().battleship;
const destroyer = board.makeShip().destroyer;
const submarine = board.makeShip().submarine;
const patrolBoat = board.makeShip().patrolBoat;
const docks = [carrier, battleship, destroyer, submarine, patrolBoat];

// assigning each btn the proper ship to deploy
console.log(dockBtns);

for (let i = 0; i < docks.length; i++) {
  let btn = dockBtns[i];
  let boat = docks[i];
  player.makeDeployable(btn, function () {
    board.enableDeployment(boat);
  });
}
