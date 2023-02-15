import { clear, print, askQuestion } from "./ui/console";

import { getFinalRoverPosition } from "./rover";
import {
  AskUserInput,
  Coordinates,
  Directions,
  RoverCoordinates,
  RoverFinalResponse,
} from "./types";
import {
  hasValidInputType,
  isValidDirection,
  isValidInstruction,
  isValidNumber,
} from "./utils";
import { DIRECTION_NAMES, USER_QUESTIONS } from "./constants";

export const landMarsRover = async (plateauMaxCoordinates: Coordinates) => {
  print("--------------------------------------------------");
  print(
    `Plateau has maximum (x, y) co-ordinates of (${plateauMaxCoordinates.x}, ${plateauMaxCoordinates.y})`
  );
  print("Provide values for initial position of rover on the plateau:");

  let initRoverXCoordinate = await validateUserInput({
    userQuestion: USER_QUESTIONS.askRoverValueX,
    maxData: plateauMaxCoordinates.x,
  });

  let initRoverYCoordinate = await validateUserInput({
    userQuestion: USER_QUESTIONS.askRoverValueY,
    maxData: plateauMaxCoordinates.y,
  });

  let initRoverDirection = await validateUserInput({
    userQuestion: USER_QUESTIONS.askRoverDirection,
    maxData: plateauMaxCoordinates.y,
  });

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
  const inputRoverMovement = await validateUserInput({
    userQuestion: USER_QUESTIONS.askRoverMovement,
  });

  handleRoverInstructions(
    initialPosition,
    inputRoverMovement,
    plateauMaxCoordinates
  );
};

export const handleRoverInstructions = async (
  initialPosition: RoverCoordinates,
  movement: string,
  plateauMaxCoordinates: Coordinates
) => {
  print("-----------------------------------------------");
  const { x, y, direction, hasCrashed }: RoverFinalResponse =
    getFinalRoverPosition(initialPosition, movement, plateauMaxCoordinates);
  if (hasCrashed) {
    print("---😔😔😔-Oops!!!!-😛😛😛---");

    print(
      `Rover crashed!!!! and position of rover was x: ${x}, y: ${y}, facing: ${DIRECTION_NAMES[direction]}`
    );
  } else {
    print(
      `Final position of rover is x: ${x}, y: ${y}, facing: ${DIRECTION_NAMES[direction]}`
    );
  }

  const startAnotherRover = await validateUserInput({
    userQuestion: USER_QUESTIONS.startAnotherRover,
  });
  if (startAnotherRover === "Y") {
    landMarsRover(plateauMaxCoordinates);
  } else {
    await validateUserInput({
      userQuestion: USER_QUESTIONS.restartMission,
    });
    startMission();
  }
};

const validateUserInput = async ({
  userQuestion,
  userInput,
  maxData,
}: AskUserInput): Promise<any> => {
  const { question, type } = userQuestion;
  const userValue: any = !userInput ? await askQuestion(question) : userInput;

  if (type !== "enterKey") {
    const isValidInput = hasValidInputType(userValue, type);
    const notWithinLimit = maxData && maxData < userValue ? true : false;
    if (!isValidInput || notWithinLimit) {
      console.log("Your input is invalid, please try again !!");
      const inputUserValue: any = await askQuestion(question);
      return await validateUserInput({
        userQuestion,
        userInput: inputUserValue,
        maxData,
      });
    }
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

  const plateauMaxXValue = await validateUserInput({
    userQuestion: USER_QUESTIONS.askMaxValueX,
  });
  const plateauMaxYValue = await validateUserInput({
    userQuestion: USER_QUESTIONS.askMaxValueY,
  });

  const maxPlateauCoordinates = { x: plateauMaxXValue, y: plateauMaxYValue };
  landMarsRover(maxPlateauCoordinates);
}

startMission();
