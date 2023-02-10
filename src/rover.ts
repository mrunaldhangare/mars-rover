import { Coordinates, InitialRoverPoints } from "./types";
import { isValidDirection } from "./utils";

export const initialRoverPosition = (
  { x, y, direction }: InitialRoverPoints,
  { x: xPos, y: yPos }: Coordinates
): InitialRoverPoints | void => {
  if (!x || !y || isNaN(x) || isNaN(y)) throw new Error("Invalid Input");
  const validDirection = isValidDirection(direction);
  const isInvalidPosition = x > xPos || y > yPos;
  if (!validDirection || isInvalidPosition)
    throw new Error("Invalid rover position");
  return { x, y, direction };
};
