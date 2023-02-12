import { clear, print, askQuestion } from "./ui/console";

import { getFinalRoverPosition } from "./rover";
import { Coordinates, Directions, RoverCoordinates } from "./types";
import { isValidDirection, isValidNumber } from "./utils";
import { DIRECTION_NAMES } from "./constants";
let maxPlateau: Coordinates;
let initialPosition: RoverCoordinates;

// get initial pluto limit
export const landMarsRover = ({ x, y }: Coordinates) => {
  print("--------------------------");
  print(`| Your plateau is set to max of x = ${x} and y = ${y}`);
  print("--------------------------");
  print("--------------------------");
  maxPlateau = { x, y };
  askQuestion(`Enter rovers initial position x`, (initRoverX) => {
    const isValidInitialXPosition =
      isValidNumber(initRoverX) && +initRoverX < maxPlateau.x;

    if (isValidInitialXPosition) {
      askQuestion(`Enter rovers initial position y`, (initRoverY) => {
        const isValidInitialYPosition =
          isValidNumber(initRoverY) && +initRoverY < maxPlateau.y;
        if (isValidInitialYPosition) {
          askQuestion(
            `Enter rovers initial position direction like N,S,E or W`,
            (initRoverDirection) => {
              if (isValidDirection(initRoverDirection.toUpperCase())) {
                handleInitialPosition({
                  x: +initRoverX,
                  y: +initRoverY,
                  direction: initRoverDirection.toUpperCase() as Directions,
                });
              } else {
                handleError(initRoverDirection);
              }
            }
          );
        } else {
          handleError(initRoverY);
        }
      });
    } else {
      handleError(initRoverX);
    }
  });
};

export const handleInitialPosition = (roverPos: RoverCoordinates) => {
  initialPosition = roverPos;
  print("--------------------------");
  print(
    `| Great your rover is initialize with x=${roverPos.x}, y=${
      roverPos.y
    } facing ${DIRECTION_NAMES[roverPos.direction.toUpperCase() as Directions]}`
  );
  print("--------------------------");
  print("--------------------------");
  askQuestion(`Enter rovers movement`, handleRoverMovement);
};

export const handleRoverMovement = (movement: string) => {
  print("--------------------------");
  print("--------WELDONE------------------");
  print("--------------------------");
  print("--------------------------");
  const { x, y, direction } = getFinalRoverPosition(initialPosition, movement);
  print(
    `-----------------------your final position---x=${x}, y=${y}, facing= ${
      DIRECTION_NAMES[direction.toUpperCase() as Directions]
    }

    `
  );
  askQuestion("Would you like to land another rover? say Y or N", (input) => {
    if (input.toUpperCase() === "Y") {
      landMarsRover(maxPlateau);
    } else {
      askQuestion("Press ENTER to restart! ", startMission);
    }
  });
};

export function startMission(): void {
  clear(false);
  print("--------------------------");
  print("| Welcome to Mars Rover! |");
  print("--------------------------");

  askQuestion(`Enter plateau's co-ordinates like x`, (xValue) => {
    if (isValidNumber(xValue)) {
      askQuestion(`Enter plateau's co-ordinates like y`, (yValue) => {
        if (isValidNumber(yValue)) {
          maxPlateau = { x: +xValue, y: +yValue };
          landMarsRover(maxPlateau);
        } else {
          handleError(yValue);
        }
      });
    } else {
      handleError(xValue);
    }
  });
}

export function endMission(): void {
  print("***************************************");
  print("You did not make it through mission. 😭");
  askQuestion("Press ENTER to restart! ", startMission);
}
export function handleError(value: any): void {
  print(`😮`);
  print(`${value} is an invalid input 😭`);
  endMission();
}

startMission();
