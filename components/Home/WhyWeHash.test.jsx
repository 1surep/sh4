import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import WhyWeHash from "./WhyWeHash";

describe("WhyWeHash", () => {
  it("renders the section heading", () => {
    render(<WhyWeHash />);

    expect(screen.getByRole("heading", { name: "Why do we hash?" })).toBeInTheDocument();
  });

  it("renders all four reasons with titles and descriptions", () => {
    render(<WhyWeHash />);

    const reasons = [
      ["Be healthy", "To promote physical fitness amongst its members."],
      ["Be strong", "To get rid of weekend hangovers."],
      ["Beer it", "To acquire a good thirst and to satisfy it with beer."],
      ["Be fast", "To persuade the older members that they are not as old as they feel."],
    ];

    for (const [title, desc] of reasons) {
      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(desc)).toBeInTheDocument();
    }
  });
});
