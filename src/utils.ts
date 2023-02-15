import { DIRECTIONS, DIRECTION_NAMES, INSTRUCTIONS } from "./constants";
import { Coordinates, RoverCoordinates, RoverFinalResponse } from "./types";
import { print } from "./ui/console";

export const isValidInstruction = (inputValue: string): boolean => {
  return !inputValue
    .split("")
    .some((inputVal: string) => !INSTRUCTIONS.includes(inputVal));
};

export const isValidDirection = (inputValue: string): boolean => {
  return Object.keys(DIRECTION_NAMES).includes(inputValue);
};

export const changeRoverDirection = (
  initialPosition: RoverCoordinates,
  movement: string
): RoverCoordinates => {
  const currentDirIndex = DIRECTIONS.indexOf(initialPosition.direction);
  if (movement === "L") {
    const newDirection =
      currentDirIndex === 0 ? DIRECTIONS[3] : DIRECTIONS[currentDirIndex - 1];
    return { ...initialPosition, direction: newDirection };
  }
  const newDirection =
    currentDirIndex === 3 ? DIRECTIONS[0] : DIRECTIONS[currentDirIndex + 1];

  return { ...initialPosition, direction: newDirection };
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
