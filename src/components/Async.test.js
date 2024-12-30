import { render, screen } from "@testing-library/react";
import Async from "./Async";
//testing async-components/code
describe("Async Component", () => {
  test("renders post", async () => {
    window.fetch = jest.fn(); //mocking
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);

    const listItemsElements = await screen.findAllByRole("listitem");
    expect(listItemsElements).not.toHaveLength(0);
  });
});
