# Mars Rover Project Using Console App

This is a TypeScript implementation of the Mars Rover project, which consists of a plateau and multiple rovers that can move around on it.

## Prerequisites

To run this project, you will need to have Node.js installed on your system. You can download and install it from the official [Node.js website.](https://nodejs.org/en/).

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine.

2. Install the project dependencies by running the following command in the project directory:
   `npm install`
3. Run the project by running the following command in the project directory:
   `npm start`

   This will start the program as a console application. The program will prompt you to enter the size of the plateau and the starting coordinates and direction of each rover.

4. Follow the prompts to enter the necessary information. The program will then move each rover according to the provided instructions and output the final position and direction of each rover at a time.

5. (Optional) Run the tests by running the following command in the project directory:
   `npm test`
   This will run the automated tests to ensure that the implementation is correct.

## Usage

To use this project, you have to call `startMission()` and pass plateau max x and y coordinates. Once plateau is created call `initiateRover()` and collect initial rovers (x, y) position and direction and then call `initiateInstructions()` to collect rover instructions. Now its time to move it around on the plateau by calling `handleRoverInstructions()` and you will get final position of rover.

## Data Model

The data model for this project consists of the following interfaces:

Coordinates: Defines a two-dimensional max position on the plateau.
Directions: Defines the four directions that a rover can face.
RoverCoordinates: Defines a rover's current position and direction.
RoverInstruction: Defines a rover's movement around the Plateau.
AskQuestions: Defines an object that contains data about question and type of input.

## UML Diagram

 ```mermaid
graph TD;
  Start --> ReadMaxPlateauSize;
  ReadMaxPlateauSize --> CreatePlateau;
  CreatePlateau --> ReadInitialRoverPosition;
  ReadInitialRoverPosition --> ExceedPlateauLimits;
  ExceedPlateauLimits --> |Yes| ReadInitialRoverPosition;
  ExceedPlateauLimits --> |No| AddRover;
  AddRover --> ReadRoverInstructions;
  ReadRoverInstructions --> MoveRover;
  MoveRover --> ValidatePlateuLimits;
  ValidatePlateuLimits --> |Out of Limit| DisplayError-RoverCrashed;
  ValidatePlateuLimits --> |OK| DisplayPosition;
  DisplayError-RoverCrashed --> LandAnotherRover;
  DisplayPosition --> LandAnotherRover;
  LandAnotherRover --> |Yes| ReadInitialRoverPosition;
  LandAnotherRover --> |No| AskToRunAgain;
  AskToRunAgain --> |Yes| Start;
  AskToRunAgain --> |No| End;
  End((End));

 ```

## Roadmap

- [x] Basic movement of single rover
- [x] Handling multiple rover movement
- [ ] Handle obstructions
- [ ] Support a different shaped Plateau.
- [ ] Support vehicles other than Rovers
