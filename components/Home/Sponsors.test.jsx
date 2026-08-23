import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Sponsors from "./Sponsors";

describe("Sponsors", () => {
  it("renders the section heading and become-a-sponsor link", () => {
    render(<Sponsors />);

    expect(screen.getByRole("heading", { name: "Our sponsors" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Become a sponsor" })).toHaveAttribute("href", "/contact");
  });

  it("renders every sponsor as an external link", () => {
    render(<Sponsors />);

    const sponsors = [
      ["Amstel Lager", "https://www.facebook.com/share/1LcvFmZSD7/?mibextid=wwXIfr"],
      ["National Petroleum", "https://npgroup-ltd.com/sierraleone/"],
      ["Orange Money", "https://www.orange.sl/en/orange-money.html"],
      ["Ministry of Tourism", "https://tourism.gov.sl/"],
      ["Rokel Commercial Bank", "https://www.rokelbank.sl/"],
      ["Monime", "https://monime.io/"],
    ];

    for (const [name, href] of sponsors) {
      // The link's accessible name concatenates the logo's alt text with the
      // visible label, so match on a substring rather than an exact string.
      const link = screen.getByRole("link", { name: new RegExp(name) });
      expect(link).toHaveAttribute("href", href);
      expect(link).toHaveAttribute("target", "_blank");
    }
  });
});
