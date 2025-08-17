import { screen, render, fireEvent } from "@testing-library/react";
import Body from "../Body";
import MOCK_List_DATA from "./mock/mockListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

// console.log(MOCK_List_DATA)

// simulate the fetch function
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_List_DATA);
    },
  });
});

it("should render the serch btn features", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "search" });

  const serachInput = screen.getByTestId("serach-btn");

  fireEvent.change(serachInput, { target: { value: "burger" } });

  fireEvent.click(searchBtn);

  const cardItemsAfterSearch = screen.getAllByTestId("card-items");

  expect(cardItemsAfterSearch.length).toBe(1);
});

// top rated cards
it("should render the top rated restaurant", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeApplyFiletes = screen.getAllByTestId("card-items");

  // assersation
  const topRatedBtn = screen.getByRole("button", {
    name: "top rated restaurant",
  });

  fireEvent.click(topRatedBtn);

  const cartAfterApplyFilters = screen.getAllByTestId("card-items");

  expect(cartAfterApplyFilters.length).toBe(14);
});
