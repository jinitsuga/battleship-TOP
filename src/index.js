import { Ship } from "./ship.js";
import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import "./style.css";
import { Ai, aiBoard } from "./AI.js";
export { app };

const app = document.querySelector("#app");
const board = Gameboard();
const player = Player();
board.setBoard();
const dockBtns = player.deploymentButtons();
dockBtns.forEach((btn) =>
  btn.addEventListener(
    "click",
    function () {
      player.addDeployment();
    },
    { once: true }
  )
);
// Making ships (docked) available for deployment

const carrier = board.makeShip().carrier;
const battleship = board.makeShip().battleship;
const destroyer = board.makeShip().destroyer;
const submarine = board.makeShip().submarine;
const patrolBoat = board.makeShip().patrolBoat;
const docks = [carrier, battleship, destroyer, submarine, patrolBoat];

// assigning each btn the proper ship to deploy

for (let i = 0; i < docks.length; i++) {
  let btn = dockBtns[i];
  let boat = docks[i];
  player.makeDeployable(btn, function () {
    //console.log(direction.textContent);
    board.enableDeployment(boat);
  });
}

destroyer.deployThisShip("2", 3);
battleship.deployThisShip("4", 7);

// obtaining the attacked ship, and the index of the element inside
// the ship's size that is being attacked
let shipIndex = board
  .attacks()
  .determineHit(docks, board.attacks().receiveAttack(2, 4));
let ship = board.attacks().findShip(docks, board.attacks().receiveAttack(2, 4));

board.attacks().markHit(ship, shipIndex);
board.attacks().markHit(destroyer, 2);
board.attacks().markHit(destroyer, 0);
board.checkSunk(docks);

// 1. Player board setup
// 2. Ships deployment, using buttons, horizontal and vertical
// 3. Player board is able to receive attacks
// 4. Ability to tell what ship is hit, and if ship is sunk
// 5. Set up AI board and AI ships.
// 6. Polish UI on both boards for visual representation of attacks
