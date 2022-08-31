import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./state/store";
import App from "./App";
import { act } from "react-dom/test-utils";

test("Renders home screen", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(
    screen.getByText(/Preencha suas credenciais para prosseguir!/i)
  ).toBeInTheDocument();
});

test("Renders create user screen", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const input: HTMLInputElement = screen.getByLabelText("Nome");
  input.value = "matheus";
  const input2: HTMLInputElement = screen.getByLabelText("Senha");
  input2.value = "123456";
  act(() => {
    screen.getByText("Cadastrar Usuário").click();
  });

  expect(screen.getByText(/matheus/i)).toBeInTheDocument();
});
