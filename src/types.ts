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

export type UserQuestionsType =
  | "askMaxValueX"
  | "askMaxValueY"
  | "askRoverValueX"
  | "askRoverValueY"
  | "askRoverDirection"
  | "askRoverMovement"
  | "startAnotherRover"
  | "restartMission";

export type QuestionsData = {
  question: string;
  type: string;
};
export type AskQuestions = {
  [key in UserQuestionsType]: QuestionsData;
};

export type DirectionType = {
  [key in Directions]: string;
};

export type AskUserInput = {
  userQuestion: QuestionsData;
  userInput?: string;
  maxData?: number;
};
