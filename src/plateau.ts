import { Coordinates } from "./types";

export const generatePlateau = (x: number, y: number): Coordinates | void => {
  if (!x || !y || isNaN(x) || isNaN(y)) throw new Error("Invalid Input");
  return { x, y };
};
