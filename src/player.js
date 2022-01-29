import { Gameboard, app } from "./gameboard.js";
import { Ship } from "./ship.js";

const Player = function () {
  let boatDirection = "vertical";
  let numOfDeployments = 0;
  const addDeployment = function () {
    numOfDeployments++;
  };

  // START GAME button (will set up AI board and start turn 1)
  const startBtn = document.createElement("button");
  startBtn.id = "start-btn";
  startBtn.textContent = "START";
  app.appendChild(startBtn);

  // changing direction of boat deployment

  const changeDirection = function () {
    if (boatDirection == "vertical") boatDirection = "horizontal";
    else if (boatDirection == "horizontal") boatDirection = "vertical";
  };
  // buttons to deploy ships (set in array and for each the on click later)
  const deploymentButtons = function () {
    const buttons = document.createElement("div");
    buttons.id = "btns";
    const buttonWrapper = document.createElement("div");
    buttonWrapper.id = "btn-wrap";
    const directionBtn = document.createElement("button");
    directionBtn.id = "direction-btn";
    directionBtn.textContent = boatDirection;
    directionBtn.addEventListener("click", () => {
      changeDirection();
      directionBtn.textContent = boatDirection;
      console.log(boatDirection);
    });

    //boat making buttons
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
    buttonWrapper.append(
      deployCarrier,
      deployBattleship,
      deployDestroyer,
      deploySubmarine,
      deployPatrol
    );
    buttons.append(directionBtn, buttonWrapper);
    app.appendChild(buttons);
    return [
      deployCarrier,
      deployBattleship,
      deployDestroyer,
      deploySubmarine,
      deployPatrol,
    ];
  };
  // on click function to enable deployment from ship buttons ONLY ONCE
  const makeDeployable = function (shipBtn, fn) {
    shipBtn.addEventListener("click", fn, { once: true });
  };
  return {
    deploymentButtons,
    makeDeployable,
    boatDirection,
    addDeployment,
  };
};
export { Player };

//1 Deploy every boat (condition)
//2 Press start game --> set up AI board + AI boat deployments
//3 Player attacks, gets feedback from the shot
//4 AI attacks, takes feedback and saves data for next shot
