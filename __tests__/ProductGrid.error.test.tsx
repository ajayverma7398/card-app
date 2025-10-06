import { render, screen } from "@testing-library/react";
import ProductGrid from "@/components/ProductGrid";

jest.mock("next/headers", () => ({ headers: async () => new Map([ ["host", "localhost:3000"] ]) }));

describe("ProductGrid error", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({ ok: false });
  });
  afterEach(() => jest.resetAllMocks());

  it("renders no products when API fails (graceful empty)", async () => {
    const ui = await ProductGrid();
    render(ui);
    expect(screen.queryByRole("heading")).toBeNull();
  });
});


