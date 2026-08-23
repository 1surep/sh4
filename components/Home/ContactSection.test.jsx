import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { toast } from "react-toastify";
import ContactSection from "./ContactSection";

vi.mock("react-toastify", () => ({
  toast: {
    error: vi.fn(),
    success: vi.fn(),
  },
}));

function fillForm({ hashhandle = "", email = "", message = "" } = {}) {
  if (hashhandle) {
    fireEvent.change(screen.getByPlaceholderText("Your hash handle"), {
      target: { value: hashhandle },
    });
  }
  if (email) {
    fireEvent.change(screen.getByPlaceholderText("you@example.com"), {
      target: { value: email },
    });
  }
  if (message) {
    fireEvent.change(screen.getByPlaceholderText("Your message"), {
      target: { value: message },
    });
  }
}

describe("ContactSection", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  it("shows a validation error and does not call the API when required fields are missing", () => {
    render(<ContactSection />);

    fireEvent.click(screen.getByRole("button", { name: "Send message" }));

    expect(toast.error).toHaveBeenCalledWith("Hash handle, email and message are required.");
    expect(fetch).not.toHaveBeenCalled();
  });

  it("submits the form, shows a success toast, and resets fields on success", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: "Message sent successfully." }),
    });

    render(<ContactSection />);

    fillForm({ hashhandle: "Flash", email: "flash@example.com", message: "On on!" });
    fireEvent.click(screen.getByRole("button", { name: "Send message" }));

    await waitFor(() => expect(toast.success).toHaveBeenCalledWith("Message sent successfully."));

    expect(fetch).toHaveBeenCalledWith(
      "/api/contact",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          hashhandle: "Flash",
          email: "flash@example.com",
          subject: "",
          message: "On on!",
        }),
      })
    );

    expect(screen.getByPlaceholderText("Your hash handle")).toHaveValue("");
    expect(screen.getByPlaceholderText("you@example.com")).toHaveValue("");
    expect(screen.getByPlaceholderText("Your message")).toHaveValue("");
  });

  it("shows an error toast and preserves input when the API call fails", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ message: "Failed to send message" }),
    });

    render(<ContactSection />);

    fillForm({ hashhandle: "Flash", email: "flash@example.com", message: "On on!" });
    fireEvent.click(screen.getByRole("button", { name: "Send message" }));

    await waitFor(() => expect(toast.error).toHaveBeenCalledWith("Failed to send message"));

    expect(screen.getByPlaceholderText("Your hash handle")).toHaveValue("Flash");
  });

  it("disables the submit button and shows a sending state while the request is in flight", async () => {
    let resolveFetch;
    fetch.mockReturnValueOnce(
      new Promise((resolve) => {
        resolveFetch = resolve;
      })
    );

    render(<ContactSection />);

    fillForm({ hashhandle: "Flash", email: "flash@example.com", message: "On on!" });
    fireEvent.click(screen.getByRole("button", { name: "Send message" }));

    expect(await screen.findByRole("button", { name: "Sending..." })).toBeDisabled();

    resolveFetch({ ok: true, json: async () => ({ message: "Message sent successfully." }) });

    await waitFor(() => expect(toast.success).toHaveBeenCalled());
  });
});
