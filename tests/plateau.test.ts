import { generatePlateau } from "../src/plateau";

describe("generatePlateau", () => {
  // if any of the x/y is not valid number return error
  // if both x and y not a number return error invalid input
  // if valid x,y return matrix of input values
  test("if x is empty and y is 0 return error", () => {
    // @ts-ignore
    const results = () => generatePlateau("", 0);
    expect(results).toThrow(new Error("Invalid Input"));
  });

  test("if any of the x/y is not valid number return error", () => {
    // @ts-ignore
    const results = () => generatePlateau("X", 2);
    expect(results).toThrow(new Error("Invalid Input"));
  });
  test("if any of the x/y is not valid number return error", () => {
    // @ts-ignore
    const results = () => generatePlateau("X", "Y");
    expect(results).toThrow(new Error("Invalid Input"));
  });
  test("if x= 5 and y =5 return {x: 5, y: 5}", () => {
    const results = generatePlateau(5, 5);
    expect(results).toEqual({ x: 5, y: 5 });
  });
});
