import { DIRECTIONS, DirectionSymbol, INSTRUCTIONS } from "./constants";
import { Coordinates, Directions, RoverCoordinates } from "./types";
import { print } from "./ui/console";

export const isValidInstruction = (inputValue: string): boolean => {
  return !inputValue
    .split("")
    .some((inputVal: string) => !INSTRUCTIONS.includes(inputVal));
};

export const isValidDirection = (inputValue: string): boolean => {
  return DIRECTIONS.includes(inputValue);
};

export const changeRoverDirection = (
  initialPosition: RoverCoordinates,
  movement: string
): RoverCoordinates => {
  let direction = "";

  const currentDirIndex = DIRECTIONS.indexOf(initialPosition.direction);
  if (movement === "L") {
    direction =
      currentDirIndex === 0 ? DIRECTIONS[3] : DIRECTIONS[currentDirIndex - 1];
  } else {
    direction =
      currentDirIndex === 3 ? DIRECTIONS[0] : DIRECTIONS[currentDirIndex + 1];
  }

  return { ...initialPosition, direction: direction as Directions };
};

export const moveRover = (
  { x, y, direction }: RoverCoordinates,
  { x: maxX, y: maxY }: Coordinates
): RoverCoordinates => {
  switch (direction) {
    case "N":
      y = y === maxY ? y : y + 1;
      break;
    case "E":
      x = x === maxX ? x : x + 1;
      break;
    case "S":
      y = y === 0 ? y : y - 1;
      break;
    case "W":
      x = x === 0 ? x : x - 1;
      break;
  }

  return { x, y, direction };
};

export const isValidNumber = (value: any): Boolean => {
  return value !== "" && !isNaN(value);
};

// export const generatePlateau = (
//   { x, y }: Coordinates,
//   { direction, x: initX, y: initY }: RoverCoordinates
// ): void => {
//   let abc: Array<any> = [];
//   for (let i = y; i > 0; i--) {
//     let hTable: Array<string> = [];
//     for (let j = 0; j < x; j++) {
//       if (i == initY + 1 && j == initX) {
//         hTable.push(
//           `|   ${DirectionSymbol[direction]}   ${j === x - 1 ? "|" : ""}`
//         );
//       } else {
//         hTable.push(`|   -   ${j === x - 1 ? "|" : ""}`);
//       }
//     }
//     print(hTable.join(""));
//     // abc.push(hTable);
//   }
// };
