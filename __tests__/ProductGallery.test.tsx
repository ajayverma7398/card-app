import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductGallery from "@/components/ProductGallery";

describe("ProductGallery", () => {
  const images = [
    "/products/watch.jpg",
    "/products/watch-2.jpg",
    "/products/watch-3.jpg",
  ];

  it("renders main image and thumbnails", () => {
    render(<ProductGallery images={images} alt="Watch" />);
    expect(screen.getByAltText("Watch")).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /show image/i })).toHaveLength(3);
  });

  it("changes active image on thumbnail click", async () => {
    const user = userEvent.setup();
    render(<ProductGallery images={images} alt="Watch" />);
    const buttons = screen.getAllByRole("button", { name: /show image/i });
    await user.click(buttons[2]);
    expect(screen.getByAltText("Watch")).toBeInTheDocument();
  });
});


