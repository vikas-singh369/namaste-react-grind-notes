import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import { isVegReastaurant } from "../RestaurantCard";
import MOCK_DATA from "./mock/mockData.json";
import "@testing-library/jest-dom";

const VegReastaurantCard = isVegReastaurant(RestaurantCard);

it("shoud render restaurant card", () => {
  render(<RestaurantCard resData={MOCK_DATA.info} />);
  const name = screen.getByText("Theobroma");
  expect(name).toBeInTheDocument();
});

it("shoud render restaurant card with veg label or not", () => {
  render(<VegReastaurantCard resData={MOCK_DATA.info} />);
  const name = screen.getByText("Theobroma");
  expect(name).toBeInTheDocument();
});
