import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../state/store";
import UserList from "..";

it("Renders user list", () => {
  render(
    <Provider store={store}>
      <UserList />
    </Provider>
  );

  expect(
    screen.getByText(/Usuarios cadastrados atualmente/i)
  ).toBeInTheDocument();
  expect(screen.getByText(/matheus/i)).toBeInTheDocument();
});
