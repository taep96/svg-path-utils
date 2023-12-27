import { describe, expect, it, beforeEach } from "bun:test";
import { Path } from "./index";

let path: Path;

describe("Path", () => {
  beforeEach(() => {
    path = new Path()
      .M([0, 0], [1, 1])
      .H(0, 1)
      .C(
        [
          [0, 0],
          [0, 0],
          [0, 0],
        ],
        [
          [1, 1],
          [1, 1],
          [1, 1],
        ],
      )
      .A([[0, 0], 0, 0, 0, [0, 0]], [[1, 1], 1, 1, 1, [1, 1]])
      .Z();
  });

  it("matches the expected output", () => {
    expect(path.toString()).toEqual("M 0 0 1 1 H 0 1 C 0 0 0 0 0 0 1 1 1 1 1 1 A 0 0 0 0 0 0 0 1 1 1 1 1 1 1 Z");
  });

  it("is flattened correctly", () => {
    expect(path.toString()).not.toContain(",");
  });
});
