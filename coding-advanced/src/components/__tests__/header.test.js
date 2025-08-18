import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import "@testing-library/jest-dom";

it("should render header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: /login/i });
  expect(loginButton).toBeInTheDocument();
});

// testing the logo
it("should logo properly render it or not", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Quering / assersation

  const logo = screen.getByTestId("logo");

  expect(logo).toBeInTheDocument();
});

// testing online status
it("should online status showing or not", ()=>{

  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
  )

  const onlineStatus = screen.getByText("Online");

  expect(onlineStatus).toBeInTheDocument();
})

// check if click so logout show or not
it("should render header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: /login/i });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: /logout/i });
  expect(logoutButton).toBeInTheDocument();
});

it("should render header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItemText = screen.getByText(/Cart/i);

  expect(cartItemText).toBeInTheDocument();
});
