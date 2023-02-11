import { initialRoverPosition } from "../src/rover";
import { Coordinates, RoverCoordinates } from "../src/types";

describe.only("initialRoverPosition", () => {
  const plateauGrid: Coordinates = {
    x: 4,
    y: 4,
  };
  test("if x is empty and y is 0 return error", () => {
    const input = {
      x: "",
      y: 0,
      direction: "N",
    };
    // @ts-ignore
    const results = () => initialRoverPosition(input, plateauGrid);
    expect(results).toThrow(new Error("Invalid Input"));
  });
  test("if direction is not valid input return error", () => {
    const input = {
      x: 1,
      y: 2,
      direction: "X",
    };
    // @ts-ignore
    const results = () => initialRoverPosition(input, plateauGrid);
    expect(results).toThrow(new Error("Invalid rover position"));
  });
  test("if input x/y are greater than max plateau grid value", () => {
    const input: RoverCoordinates = {
      x: 5,
      y: 4,
      direction: "N",
    };
    const results = () => initialRoverPosition(input, plateauGrid);
    expect(results).toThrow(new Error("Invalid rover position"));
  });
  test("if valid x,y and direction return initial rover position", () => {
    const input: RoverCoordinates = {
      x: 2,
      y: 3,
      direction: "N",
    };
    const results = initialRoverPosition(input, plateauGrid);
    expect(results).toEqual({ x: 2, y: 3, direction: "N" });
  });
});
