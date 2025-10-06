import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThemeToggle from "@/components/ThemeToggle";

describe("ThemeToggle", () => {
  it("toggles dark and light modes", async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);
    const btn = await screen.findByRole("switch");
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    await user.click(btn);
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    await user.click(btn);
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });
});


