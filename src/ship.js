export { Ship };
const Ship = (length) => {
  let size = [];
  // set the ship's size as array to enable checking if hit or sunk
  const setSize = function () {
    for (let i = 0; i < length; i++) {
      size.push(i);
    }
    return size;
  };

  const hit = (number) => {
    size[number] = "hit";
    return size[number];
  };
  // if every ele in the array is "hit" : ship is sunk
  const isSunk = () => {
    if (
      size.every((tile) => {
        tile == "hit";
      })
    ) {
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
  const deployThisShip = function (x, y) {
    console.log("DEPLOYED");
    for (let i = 0; i < length; i++) {
      let xCoord = x + i;
      let yCoord = y;
      let shipSquare = document.getElementById(xCoord + yCoord);
      shipSquare.classList.add("ship");
      removeDeployments();
    }
  };

  return { size, setSize, isSunk, hit, deployShip, deployThisShip };
};
