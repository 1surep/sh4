import { describe, expect, it } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("renders the brand and primary navigation links", () => {
    render(<Navbar />);

    expect(screen.getAllByText("SIERRA H4").length).toBeGreaterThan(0);

    const expectedLinks = [
      ["About", "/about"],
      ["Events", "/even"],
      ["PAH 2027", "/pan-africa-2027"],
      ["Gallery", "/gallery"],
      ["Reports", "/reports"],
      ["Contact", "/contact"],
    ];

    for (const [label, href] of expectedLinks) {
      expect(screen.getByRole("link", { name: label })).toHaveAttribute("href", href);
    }
  });

  it("renders the registration call-to-action pointing to the payment link", () => {
    render(<Navbar />);

    const regoLinks = screen.getAllByRole("link", { name: "Rego PAH 2027" });
    expect(regoLinks.length).toBeGreaterThan(0);
    regoLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", "https://pay.monime.io/069165304?amount=20600&checkout=true");
      expect(link).toHaveAttribute("target", "_blank");
    });
  });

  it("opens the mobile menu overlay when the toggle button is clicked", () => {
    render(<Navbar />);

    // Only one link per menu item before the mobile overlay is open.
    expect(screen.getAllByRole("link", { name: "About" })).toHaveLength(1);

    const toggleButton = screen.getByRole("button");
    fireEvent.click(toggleButton);

    // The mobile overlay duplicates the menu items, so there should now be two.
    expect(screen.getAllByRole("link", { name: "About" })).toHaveLength(2);
  });

  it("closes the mobile menu overlay when toggled again", async () => {
    render(<Navbar />);

    const toggleButton = screen.getByRole("button");
    fireEvent.click(toggleButton);
    expect(screen.getAllByRole("link", { name: "About" })).toHaveLength(2);

    fireEvent.click(toggleButton);
    // AnimatePresence keeps the overlay mounted until its exit transition
    // finishes, so the duplicate links only disappear asynchronously.
    await waitFor(() => expect(screen.getAllByRole("link", { name: "About" })).toHaveLength(1));
  });
});
