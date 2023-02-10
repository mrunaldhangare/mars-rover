import { isValidInstruction } from "../src/utils";

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
