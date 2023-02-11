import { DIRECTIONS, INSTRUCTIONS } from "./constants";
import { Directions, RoverCoordinates, RoverInstruction } from "./types";

export const isValidInstruction = (inputValue: string): boolean => {
  return INSTRUCTIONS.includes(inputValue);
};

export const isValidDirection = (inputValue: string): boolean => {
  return DIRECTIONS.includes(inputValue);
};

export const changeRoverDirection = (
  currentDirection: Directions,
  movement: RoverInstruction
): Directions => {
  let changedDirection = "";

  const currentDirIndex = DIRECTIONS.indexOf(currentDirection);
  if (movement === "L") {
    changedDirection =
      currentDirIndex === 0 ? DIRECTIONS[3] : DIRECTIONS[currentDirIndex - 1];
  } else {
    changedDirection =
      currentDirIndex === 3 ? DIRECTIONS[0] : DIRECTIONS[currentDirIndex + 1];
  }

  return changedDirection as Directions;
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
