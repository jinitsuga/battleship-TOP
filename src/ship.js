export { Ship };
const Ship = (name, length) => {
  const shipName = name;
  let isDeployed = "no";
  let size = [];
  // set the ship's size as array to enable checking if hit or sunk

  const hit = (number) => {
    size[number] = "hit";
    return size[number];
  };
  // if every ele in the array is "hit" : ship is sunk
  const checkHits = (element) => element == "hit";
  const checkUndef = (element) => element == undefined;

  const isSunk = () => {
    if (size.every(checkUndef) == true) {
      return false;
    }
    if (size.every(checkHits) == true) {
      return true;
    } else {
      return false;
    }
  };
  // deploying ship on the water (change class name later from Ship to specific ship names)
  const deployShip = function (x, y) {
    for (let i = 0; i < length; i++) {
      let xCoord = x + i;
      let yCoord = y.toString();
      let shipSquare = document.getElementById(xCoord + yCoord);
      shipSquare.classList.add("ship");
    }
  };
  // removing on click deploy option on every square
  // (by replacing w clone)
  const removeDeployments = function () {
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        let firstIdNum = i.toString();
        let secondIdNum = j;
        const square = document.getElementById(firstIdNum + secondIdNum);
        square.replaceWith(square.cloneNode(true));
      }
    }
  };
  // Make the ship into JS Data by setting its size
  const setShipSize = function (elem) {
    size.push(elem);
  };

  const deployThisShip = function (x, y) {
    for (let i = 0; i < length; i++) {
      let direction = document.getElementById("direction-btn");
      if (direction.textContent == "horizontal") {
        let xCoord = x + i;
        let yCoord = y;
        let shipSquare = document.getElementById(xCoord + yCoord);
        shipSquare.classList.add("ship");
        setShipSize(shipSquare.id);
        isDeployed = "yes";
      } else if (direction.textContent == "vertical") {
        let xCoord = x;
        let yCoord = y + i;
        let shipSquare = document.getElementById(xCoord + yCoord);
        shipSquare.classList.add("ship");
        setShipSize(shipSquare.id);
        isDeployed = "yes";
      }
      console.log(size);
    }
    removeDeployments();
  };

  return {
    size,
    isSunk,
    hit,
    deployShip,
    deployThisShip,
    isDeployed,
    shipName,
    checkHits,
  };
};
