import { getFinalRoverPosition } from "../src/rover";
import { RoverCoordinates } from "../src/types";

describe("getFinalRoverPosition", () => {
  test("if initial coordinates are 1,1,N & input is R, returns 1,1,E", () => {
    const inputCoordinates: RoverCoordinates = { x: 1, y: 1, direction: "N" };
    const results = getFinalRoverPosition(inputCoordinates, "R");
    expect(results).toEqual({ x: 1, y: 1, direction: "E" });
  });
  test("if initial coordinates are 1,1,W & input is L, returns 1,1,S", () => {
    const inputCoordinates: RoverCoordinates = { x: 1, y: 1, direction: "W" };
    const results = getFinalRoverPosition(inputCoordinates, "L");
    expect(results).toEqual({ x: 1, y: 1, direction: "S" });
  });
  test("if initial coordinates are 1,1,N & input is M, returns 1,2,N", () => {
    const inputCoordinates: RoverCoordinates = { x: 1, y: 1, direction: "N" };
    const results = getFinalRoverPosition(inputCoordinates, "M");
    expect(results).toEqual({ x: 1, y: 2, direction: "N" });
  });
  test("if initial coordinates are 2,3,E & input is M, returns 3,3,E", () => {
    const inputCoordinates: RoverCoordinates = { x: 2, y: 3, direction: "E" };
    const results = getFinalRoverPosition(inputCoordinates, "M");
    expect(results).toEqual({ x: 3, y: 3, direction: "E" });
  });
  test("if initial coordinates are 1,2,N & input is LMLMLMLMM, returns 1,3,N", () => {
    const inputCoordinates: RoverCoordinates = { x: 1, y: 2, direction: "N" };
    const results = getFinalRoverPosition(inputCoordinates, "LMLMLMLMM");
    expect(results).toEqual({ x: 1, y: 3, direction: "N" });
  });
  test("if initial coordinates are 3,3,E & input is MMRMMRMRRM, returns 5,1,E", () => {
    const inputCoordinates: RoverCoordinates = { x: 3, y: 3, direction: "E" };
    const results = getFinalRoverPosition(inputCoordinates, "MMRMMRMRRM");
    expect(results).toEqual({ x: 5, y: 1, direction: "E" });
  });
});
