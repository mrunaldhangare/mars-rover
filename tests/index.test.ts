import { sum } from "../src/index";

describe("Sum", () => {
  test("sum of 2+2", () => {
    const results = sum();
    expect(results).toBe(5);
  });
});
