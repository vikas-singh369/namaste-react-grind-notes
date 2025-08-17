import { screen, render } from "@testing-library/react";
import Body from "../Body";
import MOCK_List_DATA from "./mock/mockListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom"


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

  const searchBtn = screen.getByRole("button", {name: "search"})

  expect(searchBtn).toBeInTheDocument();
});
