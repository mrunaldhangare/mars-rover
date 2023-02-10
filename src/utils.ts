export const isValidInstruction = (inputValue: string): boolean => {
  return ["L", "R", "M"].includes(inputValue);
};

const results = isValidInstruction("L");
