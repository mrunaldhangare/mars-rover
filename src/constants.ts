import { AskQuestions, Directions, DirectionType } from "./types";

export const INSTRUCTIONS = ["L", "R", "M"];

export const DIRECTIONS: Array<Directions> = ["N", "E", "S", "W"];

export const DIRECTION_NAMES: DirectionType = {
  N: "North",
  S: "South",
  W: "West",
  E: "East",
};

export const USER_QUESTIONS: AskQuestions = {
  askMaxValueX: {
    question: "Enter maximum value for x co-ordinate : ",
    type: "number",
  },
  askMaxValueY: {
    question: "Enter maximum value for y co-ordinate : ",
    type: "number",
  },
  askRoverValueX: {
    question: "Enter initial x co-ordinate : ",
    type: "number",
  },
  askRoverValueY: {
    question: "Enter initial y co-ordinate : ",
    type: "number",
  },
  askRoverDirection: {
    question: "Enter initial orientation N,S,E or W: ",
    type: "direction",
  },
  askRoverMovement: {
    question: "Enter rovers movement instruction: ",
    type: "movement",
  },
  startAnotherRover: {
    question: "Would you like to land another rover? Y or N: ",
    type: "boolean",
  },
  restartMission: {
    question: "Press enter key to restart! ",
    type: "enterKey",
  },
};
