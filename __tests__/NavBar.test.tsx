import { render, screen } from "@testing-library/react";
import NavBar from "@/components/NavBar";

describe("NavBar", () => {
  it("renders brand and links", () => {
    render(<NavBar />);
    expect(screen.getByRole("link", { name: /neoshop/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /products/i })).toBeInTheDocument();
  });
});


