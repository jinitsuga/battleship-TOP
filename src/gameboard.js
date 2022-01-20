import { Ship } from "./ship.js";
import { app } from "./index.js";

const Gameboard = function () {
  const setBoard = () => {
    const playerBoard = document.createElement("div");
    app.appendChild(playerBoard);
    playerBoard.classList.add("player-board");
    // Setting up board with X and Y dataset attributes to use as coordinates
    for (let j = 0; j <= 9; j++) {
      for (let i = 0; i <= 9; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.dataset.x = i + 1;
        square.dataset.y = j + 1;
        square.id = square.dataset.x + square.dataset.y;
        playerBoard.appendChild(square);
      }
    }
  };

  // ship maker function, potentially changing how ships are set up
  const makeShip = function () {
    const patrolBoat = Ship(2);
    const submarine = Ship(3);
    const destroyer = Ship(3);
    const battleship = Ship(4);
    const carrier = Ship(5);
    return { patrolBoat, submarine, destroyer, battleship, carrier };
  };
  // removing on click deployments ( to stop after 1 ship)

  const removeDeployments = function (eventTarget) {};

  // giving on click listener to board squares to deploy the correct ship

  const enableDeployment = function (ship) {
    console.log("omegalul");
    console.log("kekbur");
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        let firstIdNum = i.toString();
        let secondIdNum = j;
        const square = document.getElementById(firstIdNum + secondIdNum);
        square.removeEventListener("click", function () {
          ship.deployThisShip(firstIdNum, secondIdNum);
        });
        square.addEventListener("click", function () {
          ship.deployThisShip(firstIdNum, secondIdNum);
        });
      }
    }
  };
  // board receives an attack and checks if the attacked square has a ship
  const receiveAttack = function (coordX, coordY) {
    const attackedSquare = document.getElementById(
      coordX.toString() + coordY.toString()
    );
    attackedSquare.style.backgroundColor = "green";
    // if (attack.classList.contains("ship")) {
    // }
    return attackedSquare;
  };
  return { makeShip, setBoard, receiveAttack, enableDeployment };
};

export { Gameboard, app };
