import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders the brand and tagline", () => {
    render(<Footer />);

    expect(screen.getByText("SIERRA H4")).toBeInTheDocument();
    expect(screen.getByText(/drinking club with a running problem/i)).toBeInTheDocument();
  });

  it("renders all quick links with correct destinations", () => {
    render(<Footer />);

    const expectedLinks = [
      ["About us", "/about"],
      ["Events", "/even"],
      ["PAH 2027", "/pan-africa-2027"],
      ["Hotels & bookings", "/pan-africa-2027/hotels"],
      ["Who is coming", "/whoiscoming"],
      ["Gallery", "/gallery"],
      ["Reports", "/reports"],
      ["Contact us", "/contact"],
    ];

    for (const [label, href] of expectedLinks) {
      expect(screen.getByRole("link", { name: label })).toHaveAttribute("href", href);
    }
  });

  it("renders the current year in the copyright notice", () => {
    render(<Footer />);

    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`${year} Sierra H4. All rights reserved.`))).toBeInTheDocument();
  });

  it("renders social links pointing to the correct external profiles", () => {
    render(<Footer />);

    expect(screen.getByRole("link", { name: "X" })).toHaveAttribute("href", "https://x.com/sierra_h4");
    expect(screen.getByRole("link", { name: "Instagram" })).toHaveAttribute(
      "href",
      "https://www.instagram.com/sierra_h4"
    );
    expect(screen.getByRole("link", { name: "Facebook" })).toHaveAttribute(
      "href",
      "https://facebook.com/sierrah4"
    );
  });
});
