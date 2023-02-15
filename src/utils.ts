import { DIRECTIONS, DirectionSymbol, INSTRUCTIONS } from "./constants";
import {
  Coordinates,
  Directions,
  RoverCoordinates,
  RoverFinalResponse,
} from "./types";
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
  roverPosition: RoverFinalResponse,
  { x: maxX, y: maxY }: Coordinates
): RoverFinalResponse => {
  switch (roverPosition.direction) {
    case "N":
      roverPosition =
        roverPosition.y === maxY
          ? { ...roverPosition, hasCrashed: true }
          : { ...roverPosition, y: roverPosition.y + 1 };
      break;
    case "E":
      roverPosition =
        roverPosition.x === maxX
          ? { ...roverPosition, hasCrashed: true }
          : { ...roverPosition, x: roverPosition.x + 1 };
      break;
    case "S":
      roverPosition =
        roverPosition.y === 0
          ? { ...roverPosition, hasCrashed: true }
          : { ...roverPosition, y: roverPosition.y - 1 };
      break;
    case "W":
      roverPosition =
        roverPosition.x === 0
          ? { ...roverPosition, hasCrashed: true }
          : { ...roverPosition, x: roverPosition.x - 1 };
      break;
  }

  return roverPosition;
};

export const isValidNumber = (value: any): Boolean => {
  return value !== "" && !isNaN(value) && value >= 0;
};
export const hasValidInputType = (userValue: string, type: string): Boolean => {
  let isValidInputType: Boolean;

  switch (type) {
    case "number":
      isValidInputType = isValidNumber(userValue);
      break;
    case "direction":
      isValidInputType = isValidDirection(userValue.toUpperCase());
      break;
    case "movement":
      isValidInputType = isValidInstruction(userValue.toUpperCase());
      break;
    case "boolean":
      isValidInputType =
        userValue.toUpperCase() === "Y" || userValue.toUpperCase() === "N";
      break;
    default:
      isValidInputType = true;
  }
  return isValidInputType;
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
