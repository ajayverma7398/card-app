import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCard, { Product } from "@/components/ProductCard";

describe("ProductCard branches", () => {
  it("shows Sale tag, discount price, and disabled Add to Cart when out of stock", async () => {
    const product: Product = {
      id: "2",
      title: "Sale Item",
      description: "desc",
      price: 80,
      originalPrice: 100,
      imageUrl: "/products/sneakers.jpg",
      inStock: false,
      tag: "sale",
    };
    render(<ProductCard product={product} />);
    expect(screen.getByLabelText(/on sale/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/original price/i)).toBeInTheDocument();
    const addBtn = screen.getByRole("button", { name: /unavailable/i });
    expect(addBtn).toBeDisabled();
  });

});


