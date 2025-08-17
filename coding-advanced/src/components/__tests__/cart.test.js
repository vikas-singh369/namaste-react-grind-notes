import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import { act } from "react";
import MENU_MOCK_DATA from "./mock/mockMenuDataForRestaurant.json";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MENU_MOCK_DATA),
  })
);

// Restaurant menu render or not
it("should render Restaurant menu:", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );
});

// Restaurarnt name coming or not
it("should render Restaurant menu:", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );

  const name = screen.getByText("Baskin Robbins - Ice Cream Desserts");
  expect(name).toBeInTheDocument();
});

// Restaurant menu in Category items how many items
it("should render Restaurant menu:", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );

  const name = screen.getByText("Newly Launched Italian Gelatos - 10");
  expect(name).toBeInTheDocument();

  const CategororyItemTitleList = screen.getAllByTestId("Category-title-list");

  expect(CategororyItemTitleList.length).toBe(13);
});

// Restaurant menu items
it("should render Restaurant menu:", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );

  const menuItemesInOneCategory = screen.getAllByTestId("menu-items");

  expect(menuItemesInOneCategory.length).toBe(10);
});

// testing add button
it("should render Restaurant menu:", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const addBtnsOnMenuItems = screen.getAllByRole("button", { name: "Add" });

  expect(addBtnsOnMenuItems.length).toBe(10);

  const headerCartTextBeforeAddItem = screen.getByText("Cart - 0");

  expect(headerCartTextBeforeAddItem).toBeInTheDocument();

  fireEvent.click(addBtnsOnMenuItems[0]);

  const headerCartTextAfterAddItem = screen.getByText("Cart - 1");

  expect(headerCartTextAfterAddItem).toBeInTheDocument();
});
