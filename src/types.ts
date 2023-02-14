export interface Coordinates {
  x: number;
  y: number;
}
export interface RoverCoordinates extends Coordinates {
  direction: Directions;
}
export interface RoverFinalResponse extends RoverCoordinates {
  hasCrashed?: boolean;
}

export type RoverInstruction = "L" | "R" | "M";

export type Directions = "S" | "W" | "N" | "E";
