import { Ship, destroyer } from "./ship.js";

test("building ship as array", () => {
  expect(destroyer.setSize()).toStrictEqual([0, 1, 2]);
});
