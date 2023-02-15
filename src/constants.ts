import { AskQuestions } from "./types";

export const INSTRUCTIONS = ["L", "R", "M"];

export const DIRECTIONS = ["N", "E", "S", "W"];

export const DIRECTION_NAMES = {
  N: "North",
  S: "South",
  W: "West",
  E: "East",
};

export const DirectionSymbol = {
  N: "⬆", // uparrow
  S: "⬇", //downarrow
  E: "=>", //rightarrow
  W: "⬅", // leftarrow
};

export const userQuestions: AskQuestions = {
  initMaxXCoordinate: {
    question: "Enter maximum value for x co-ordinate : ",
    type: "number",
  },
  initMaxYCoordinate: {
    question: "Enter maximum value for y co-ordinate : ",
    type: "number",
  },
  initRoverXCoordinate: {
    question: "Enter initial x co-ordinate : ",
    type: "number",
  },
  initRoverYCoordinate: {
    question: "Enter initial y co-ordinate : ",
    type: "number",
  },
  initRoverDirection: {
    question: "Enter initial orientation N,S,E or W: ",
    type: "direction",
  },
  startRoverMovement: {
    question: "Enter rovers movement instruction: ",
    type: "movement",
  },
  startAnotherRover: {
    question: "Would you like to land another rover? Y or N: ",
    type: "boolean",
  },
  restartMission: {
    question: "Press ENTER to restart! ",
    type: "none",
  },
};
