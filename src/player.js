import { Gameboard, app } from "./gameboard.js";
import { Ship } from "./ship.js";

const Player = function () {
  // buttons to deploy ships (set in array and for each the on click later)
  const deploymentButtons = function () {
    const deployCarrier = document.createElement("button");
    deployCarrier.textContent = "Deploy carrier";
    const deployBattleship = document.createElement("button");
    deployBattleship.textContent = "Deploy battleship";
    const deployDestroyer = document.createElement("button");
    deployDestroyer.textContent = "Deploy destroyer";
    const deploySubmarine = document.createElement("button");
    deploySubmarine.textContent = "Deploy submarine";
    const deployPatrol = document.createElement("button");
    deployPatrol.textContent = "Deploy patrol boat";
    app.append(
      deployCarrier,
      deployBattleship,
      deployDestroyer,
      deploySubmarine,
      deployPatrol
    );
    return [
      deployCarrier,
      deployBattleship,
      deployDestroyer,
      deploySubmarine,
      deployPatrol,
    ];
  };
  // on click function to enable deployment from ship buttons
  const makeDeployable = function (shipBtn, fn) {
    shipBtn.addEventListener("click", fn);
  };
  return { deploymentButtons, makeDeployable };
};
export { Player };
