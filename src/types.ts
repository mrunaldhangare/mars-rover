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

export enum UserQuestions {
  "initMaxXCoordinate" = "initMaxXCoordinate",
  "initMaxYCoordinate" = "initMaxYCoordinate",
  "initRoverXCoordinate" = "initRoverXCoordinate",
  "initRoverYCoordinate" = "initRoverYCoordinate",
  "initRoverDirection" = "initRoverDirection",
  "startRoverMovement" = "startRoverMovement",
  "startAnotherRover" = "startAnotherRover",
  "restartMission" = "restartMission",
}

export type AskQuestions = {
  [key in UserQuestions]: any;
};
