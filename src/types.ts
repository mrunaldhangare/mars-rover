export interface Coordinates {
  x: number;
  y: number;
}
export interface InitialRoverPoints extends Coordinates {
  direction: Directions;
}
export type RoverInstruction = "L" | "R" | "M";

export type Directions = "S" | "W" | "N" | "E";
