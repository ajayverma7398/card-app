import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCard, { Product } from "@/components/ProductCard";

describe("ProductCard", () => {
  const product: Product = {
    id: "1",
    title: "Test Product",
    description: "A short description",
    price: 10,
    rating: 4.2,
    imageUrl: "https://images.unsplash.com/photo-1520975922284-7b68310d2aeb?q=80&w=1200&auto=format&fit=crop",
    inStock: true,
    tag: "new",
  };

  it("renders title, description and button", () => {
    render(<ProductCard product={product} />);
    expect(screen.getByRole("heading", { name: /test product/i })).toBeInTheDocument();
    expect(screen.getByText(/a short description/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /view more/i })).toBeInTheDocument();
  });

  it("invokes onView when button clicked", async () => {
    const user = userEvent.setup();
    const onView = jest.fn();
    render(<ProductCard product={product} onView={onView} />);
    await user.click(screen.getByRole("button", { name: /view more/i }));
    expect(onView).toHaveBeenCalledWith("1");
  });
});


