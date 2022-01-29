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
    const patrolBoat = Ship("patrol boat", 2);
    const submarine = Ship("submarine", 3);
    const destroyer = Ship("destroyer", 3);
    const battleship = Ship("battleship", 4);
    const carrier = Ship("carrier", 5);
    return { patrolBoat, submarine, destroyer, battleship, carrier };
  };

  // giving on click listener to board squares to deploy the correct ship

  const enableDeployment = function (ship) {
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        let direction = document.getElementById("direction-btn");
        if (direction.textContent == "horizontal") {
          let firstIdNum = i;
          let secondIdNum = j.toString();
          const square = document.getElementById(firstIdNum + secondIdNum);
          if (square.classList.contains("ship")) {
            continue;
          }
          square.addEventListener("click", function () {
            ship.deployThisShip(firstIdNum, secondIdNum);
          });
        } else if (direction.textContent == "vertical") {
          let firstIdNum = i.toString();
          let secondIdNum = j;
          const square = document.getElementById(firstIdNum + secondIdNum);
          if (square.classList.contains("ship")) {
            continue;
          }
          square.addEventListener("click", function () {
            ship.deployThisShip(firstIdNum, secondIdNum);
          });
        }
      }
    }
  };
  // checking for sunk ships
  const checkSunk = function (arr) {
    arr.forEach((element) => {
      if (element.isSunk()) {
        return console.log(element.shipName + " is sunk!");
      }
    });
  };
  // Grouping attack-related functions together in baby module

  // findShip and determineHIt both need receiveAttack()'s return as ID param

  const attacks = function () {
    // determining which ship was hit
    const findShip = function (arr, id) {
      const attackedShip = arr.find((element) => element.size.includes(id));
      return attackedShip;
    };
    // determining index on the attacked ship's array
    const determineHit = function (arr, id) {
      for (let i = 0; i < arr.length; i++) {
        let ship = arr[i];
        let index = ship.size.findIndex((element) => element === id);
        if (index > 0) {
          return index;
        }
      }
    };
    // Change the given ship's square to "hit", using the index given
    const markHit = function (ship, index) {
      ship.hit(index);
    };
    // board receives an attack and checks if the attacked square has a ship
    const receiveAttack = function (coordX, coordY) {
      const attackedSquare = document.getElementById(
        coordX.toString() + coordY.toString()
      );
      return attackedSquare.id;
    };
    return { findShip, determineHit, markHit, receiveAttack };
  };

  return {
    makeShip,
    setBoard,
    enableDeployment,
    attacks,
    checkSunk,
  };
};

export { Gameboard, app };
