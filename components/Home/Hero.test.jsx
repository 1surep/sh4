import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Home Hero", () => {
  it("renders the main heading", () => {
    render(<Hero />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("We drink beer");
    expect(heading).toHaveTextContent("to save water");
  });

  it("renders the registration call-to-action", () => {
    render(<Hero />);

    const link = screen.getByRole("link", { name: "Rego PAH 2027" });
    expect(link).toHaveAttribute("href", "https://pay.monime.io/069165304?amount=20600&checkout=true");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("renders a link to this week's run", () => {
    render(<Hero />);

    expect(screen.getByRole("link", { name: /this week's run/i })).toHaveAttribute("href", "/even");
  });

  it("renders all quick stats", () => {
    render(<Hero />);

    expect(screen.getByText("Runs")).toBeInTheDocument();
    expect(screen.getByText("Every Wednesday & 1st Saturday")).toBeInTheDocument();
    expect(screen.getByText("Time")).toBeInTheDocument();
    expect(screen.getByText("6:00 PM, on on")).toBeInTheDocument();
    expect(screen.getByText("Run rego")).toBeInTheDocument();
    expect(screen.getByText("NLe 30 · NLe 250")).toBeInTheDocument();
    expect(screen.getByText("Next big one")).toBeInTheDocument();
    expect(screen.getByText("Pan Africa Hash · October 2027")).toBeInTheDocument();
  });
});
