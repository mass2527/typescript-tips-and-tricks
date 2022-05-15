function assertIsNumber(value: any): asserts value is number {
  if (typeof value !== "number") {
    throw new Error("Not a number!");
  }
}

export function double(value: any) {
  assertIsNumber(value);

  return value * 2;
}
