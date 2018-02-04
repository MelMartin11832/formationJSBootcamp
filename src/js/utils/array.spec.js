import { isEmptyArray } from "./array";

const array = ["P", "S", "G"];

it("check if array is empty", () => {
  expect(isEmptyArray([])).toEqual(true);
  expect(isEmptyArray(array)).toEqual(false);
});
