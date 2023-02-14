import { Coordinates, RoverCoordinates } from "../src/types";
import {
  isValidDirection,
  isValidInstruction,
  changeRoverDirection,
  moveRover,
  isValidNumber,
} from "../src/utils";

describe("isValidInstructionisValidInstruction", () => {
  test("if instructions are invalid return false", () => {
    // @ts-ignore
    const results = isValidInstruction("X");
    expect(results).toBe(false);
  });
  test("if instructions are valid of any value from L,M,R return true", () => {
    const results = isValidInstruction("L");
    expect(results).toBe(true);
  });
  test("if any character in instructions is not valid value from L,M,R return false", () => {
    const results = isValidInstruction("QTTMR");
    expect(results).toBe(false);
  });
  test("if all characters in instructions are valid value from L,M,R return true", () => {
    const results = isValidInstruction("LRMRM");
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
  const initialPos: RoverCoordinates = { x: 2, y: 3, direction: "N" };
  test("if movement is L & current direction is N then return W", () => {
    const results = changeRoverDirection(initialPos, "L");
    expect(results).toEqual({ ...initialPos, direction: "W" });
  });
  test("if if movement is L & current direction is W then return S", () => {
    const results = changeRoverDirection(
      { ...initialPos, direction: "W" },
      "L"
    );
    expect(results).toEqual({ ...initialPos, direction: "S" });
  });
  test("if if movement is R & current direction is N then return E", () => {
    const results = changeRoverDirection(
      { ...initialPos, direction: "N" },
      "R"
    );
    expect(results).toEqual({ ...initialPos, direction: "E" });
  });
  test("if if movement is R & current direction is W then return N", () => {
    const results = changeRoverDirection(
      { ...initialPos, direction: "W" },
      "R"
    );
    expect(results).toEqual({ ...initialPos, direction: "N" });
  });
});
describe("moveRover", () => {
  const inputCoordinates: RoverCoordinates = { x: 2, y: 2, direction: "N" };
  const maxCoordinates: Coordinates = { x: 5, y: 5 };
  test("if current direction is N, increase y coordinate by 1", () => {
    const results = moveRover(
      { ...inputCoordinates, direction: "N" },
      maxCoordinates
    );
    expect(results).toEqual({ x: 2, y: 3, direction: "N" });
  });
  test("if current direction is E, increase x coordinate by 1", () => {
    const results = moveRover(
      { ...inputCoordinates, direction: "E" },
      maxCoordinates
    );
    expect(results).toEqual({ x: 3, y: 2, direction: "E" });
  });
  test("if current direction is S, decrease y coordinate by 1", () => {
    const results = moveRover(
      { ...inputCoordinates, direction: "S" },
      maxCoordinates
    );
    expect(results).toEqual({ x: 2, y: 1, direction: "S" });
  });
  test("if current direction is W, decrease x coordinate by 1", () => {
    const results = moveRover(
      { ...inputCoordinates, direction: "W" },
      maxCoordinates
    );
    expect(results).toEqual({ x: 1, y: 2, direction: "W" });
  });
  test("if current direction is E, and current x value is equal to max x value return original co-ordinates", () => {
    const results = moveRover({ x: 5, y: 4, direction: "E" }, maxCoordinates);
    expect(results).toEqual({ x: 5, y: 4, direction: "E" });
  });
  test("if current direction is W, and current x value is equal to 0 return original co-ordinates", () => {
    const results = moveRover({ x: 0, y: 3, direction: "W" }, maxCoordinates);
    expect(results).toEqual({ x: 0, y: 3, direction: "W" });
  });
  test("if current direction is N, and current y value is equal to max y value return original co-ordinates", () => {
    const results = moveRover({ x: 4, y: 5, direction: "N" }, maxCoordinates);
    expect(results).toEqual({ x: 4, y: 5, direction: "N" });
  });
  test("if current direction is S, and current y value is equal to 0 return original co-ordinates", () => {
    const results = moveRover({ x: 5, y: 0, direction: "S" }, maxCoordinates);
    expect(results).toEqual({ x: 5, y: 0, direction: "S" });
  });
});

describe("isValidNumber", () => {
  test("return false if input is not valid number", () => {
    expect(isValidNumber("N")).toBe(false);
  });
  test("return true if input is valid number", () => {
    expect(isValidNumber("2")).toBe(true);
  });
});
