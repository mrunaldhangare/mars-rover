export const isValidInstruction = (inputValue: string): boolean => {
  return ["L", "R", "M"].includes(inputValue);
};

export const isValidDirection = (inputValue: string): boolean => {
  return ["S", "W", "E", "N"].includes(inputValue);
};
