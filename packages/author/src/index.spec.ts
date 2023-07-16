import { describe, expect, it } from "vitest";
import { hello } from ".";

describe("author", () => {
  it("should be ok", () => {
    expect(hello("hi")).toBe("hi");
  });
});
