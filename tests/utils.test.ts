import { RoverCoordinates } from "../src/types";
import {
  isValidDirection,
  isValidInstruction,
  changeRoverDirection,
  moveRover,
} from "../src/utils";

describe("isValidInstruction", () => {
  test("if instructions are invalid return false", () => {
    // @ts-ignore
    const results = isValidInstruction("X");
    expect(results).toBe(false);
  });
  test("if instructions are valid of any value from L,M,R return true", () => {
    const results = isValidInstruction("L");
    expect(results).toBe(true);
  });
});
describe("isValidDirection", () => {
  test("if direction are invalid return false", () => {
    // @ts-ignore
    const results = isValidDirection("X");
    expect(results).toBe(false);
  });
  test("if direction are valid of any value from S,W,E,N return true", () => {
    const results = isValidDirection("S");
    expect(results).toBe(true);
  });
});
describe("changeRoverDirection", () => {
  test("if movement is L & current direction is N then return W", () => {
    const results = changeRoverDirection("N", "L");
    expect(results).toBe("W");
  });
  test("if if movement is L & current direction is W then return S", () => {
    const results = changeRoverDirection("W", "L");
    expect(results).toBe("S");
  });
  test("if if movement is R & current direction is N then return E", () => {
    const results = changeRoverDirection("N", "R");
    expect(results).toBe("E");
  });
  test("if if movement is R & current direction is W then return N", () => {
    const results = changeRoverDirection("W", "R");
    expect(results).toBe("N");
  });
});
describe("moveRover", () => {
  const inputCoordinates: RoverCoordinates = { x: 2, y: 2, direction: "N" };

  test("if current direction is N, increase y coordinate by 1", () => {
    const results = moveRover({ ...inputCoordinates, direction: "N" });
    expect(results).toEqual({ x: 2, y: 3, direction: "N" });
  });
  test("if current direction is E, increase x coordinate by 1", () => {
    const results = moveRover({ ...inputCoordinates, direction: "E" });
    expect(results).toEqual({ x: 3, y: 2, direction: "E" });
  });
  test("if current direction is S, decrease y coordinate by 1", () => {
    const results = moveRover({ ...inputCoordinates, direction: "S" });
    expect(results).toEqual({ x: 2, y: 1, direction: "S" });
  });
  test("if current direction is W, decrease x coordinate by 1", () => {
    const results = moveRover({ ...inputCoordinates, direction: "W" });
    expect(results).toEqual({ x: 1, y: 2, direction: "W" });
  });
});
