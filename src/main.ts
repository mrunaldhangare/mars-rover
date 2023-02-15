import { clear, print, askQuestion } from "./ui/console";

import { getFinalRoverPosition } from "./rover";
import {
  Coordinates,
  Directions,
  RoverCoordinates,
  RoverFinalResponse,
  UserQuestions,
} from "./types";
import {
  hasValidInputType,
  isValidDirection,
  isValidInstruction,
  isValidNumber,
} from "./utils";
import { DIRECTION_NAMES, userQuestions } from "./constants";

export const landMarsRover = async (plateauMaxCoordinates: Coordinates) => {
  print("--------------------------------------------------");
  print(
    `Plateau has maximum (x, y) co-ordinates of (${plateauMaxCoordinates.x}, ${plateauMaxCoordinates.y})`
  );
  print("Provide values for initial position of rover on the plateau:");

  let initRoverXCoordinate = await validateUserInput(
    UserQuestions.initRoverXCoordinate
  );

  //TODO -check max value
  // const isValidInitialXPosition = initRoverXCoordinate <= maxPlateau.x;
  let initRoverYCoordinate = await validateUserInput(
    UserQuestions.initRoverYCoordinate
  );

  //TODO -check max value
  //const isValidInitialYPosition = isValidNumber(initRoverY) && +initRoverY <= maxPlateau.y;
  let initRoverDirection = await validateUserInput(
    UserQuestions.initRoverDirection
  );

  const initialPosition: RoverCoordinates = {
    x: initRoverXCoordinate,
    y: initRoverYCoordinate,
    direction: initRoverDirection,
  };
  handleInitialPosition(initialPosition, plateauMaxCoordinates);
};

export const handleInitialPosition = async (
  initialPosition: RoverCoordinates,
  plateauMaxCoordinates: Coordinates
) => {
  const { x, y, direction } = initialPosition;
  print("----------------------------------------------");
  print(
    `Rover's initial position is x: ${x}, y: ${y}, facing: ${
      DIRECTION_NAMES[direction.toUpperCase() as Directions]
    }`
  );
  const inputRoverMovement = await validateUserInput(
    UserQuestions.startRoverMovement
  );
  handleRoverMovement(
    initialPosition,
    inputRoverMovement,
    plateauMaxCoordinates
  );
};

export const handleRoverMovement = async (
  initialPosition: RoverCoordinates,
  movement: string,
  plateauMaxCoordinates: Coordinates
) => {
  print("-----------------------------------------------");
  const { x, y, direction, hasCrashed }: RoverFinalResponse =
    getFinalRoverPosition(initialPosition, movement, plateauMaxCoordinates);
  // generatePlateau(maxPlateau, { x, y, direction });
  if (hasCrashed) {
    print("---😔😔😔-Oops!!!!-😛😛😛---");

    print(
      `Your rover crashed!!!! and position of rover was x: ${x}, y: ${y}, facing: ${
        DIRECTION_NAMES[direction.toUpperCase() as Directions]
      }`
    );
  } else {
    print(
      `Final position of rover is x: ${x}, y: ${y}, facing: ${
        DIRECTION_NAMES[direction.toUpperCase() as Directions]
      }`
    );
  }

  const startAnotherRover = await validateUserInput(
    UserQuestions.startAnotherRover
  );
  if (startAnotherRover === "Y") {
    landMarsRover(plateauMaxCoordinates);
  } else {
    await validateUserInput(UserQuestions.restartMission);
    startMission();
  }
};

const validateUserInput = async (
  userQuestionType: UserQuestions,
  userInput?: string
): Promise<any> => {
  const { question, type } = userQuestions[userQuestionType];
  const userValue: any = !userInput ? await askQuestion(question) : userInput;

  // TODO needs seperat function for validation which return true false based on type
  const isValidInput = hasValidInputType(userValue, type);
  if (!isValidInput) {
    console.log("Your input is not valid, Please try again !!");
    const inputUserValue: any = await askQuestion(question);
    return await validateUserInput(userQuestionType, inputUserValue);
  }
  return type === "number" ? parseInt(userValue) : userValue.toUpperCase();
};

export async function startMission(): Promise<void> {
  clear(false);
  print("------------------------------------");
  print("| Welcome to Mars Rover Mission! 🚀 |");
  print("------------------------------------");

  print("Create a plateau grid to land your rover!");
  print("Provide maximum co-ordinates for plateau:");

  const plateauMaxXValue = await validateUserInput(
    UserQuestions.initMaxXCoordinate
  );
  const plateauMaxYValue = await validateUserInput(
    UserQuestions.initMaxYCoordinate
  );

  const maxPlateau = { x: plateauMaxXValue, y: plateauMaxYValue };
  landMarsRover(maxPlateau);
}

startMission();
