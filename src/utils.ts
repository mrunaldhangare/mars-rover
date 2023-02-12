import { DIRECTIONS, INSTRUCTIONS } from "./constants";
import { Directions, RoverCoordinates } from "./types";

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

export const moveRover = ({
  x,
  y,
  direction,
}: RoverCoordinates): RoverCoordinates => {
  switch (direction) {
    case "N":
      y += 1;
      break;
    case "E":
      x += 1;
      break;
    case "S":
      y -= 1;
      break;
    case "W":
      x -= 1;
      break;
  }

  return { x, y, direction };
};

export const isValidNumber = (value: any): Boolean => {
  return value !== "" && !isNaN(value);
};
