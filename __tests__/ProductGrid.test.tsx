import { render, screen, waitFor } from "@testing-library/react";
import ProductGrid from "@/components/ProductGrid";

jest.mock("next/headers", () => ({ headers: async () => new Map([ ["host", "localhost:3000"] ]) }));

describe("ProductGrid", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({ ok: true, json: async () => ([{
      id: "p1",
      title: "Mock Product",
      description: "desc",
      price: 99,
      rating: 4,
      imageUrl: "/products/watch.jpg",
      inStock: true,
    }]) });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders products from API", async () => {
    render(await ProductGrid());
    await waitFor(() => {
      expect(screen.getByRole("heading", { name: /mock product/i })).toBeInTheDocument();
    });
  });
});


