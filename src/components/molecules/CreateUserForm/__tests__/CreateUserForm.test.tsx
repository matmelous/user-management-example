import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../state/store";
import CreateUserForm from "..";
import { act } from "react-dom/test-utils";

it("Renders create user form", () => {
  render(
    <Provider store={store}>
      <CreateUserForm />
    </Provider>
  );

  expect(screen.getByText(/Criar um novo usuário./i)).toBeInTheDocument();
});

it("Should create a user", () => {
  render(
    <Provider store={store}>
      <CreateUserForm />
    </Provider>
  );
  const input: HTMLInputElement = screen.getByLabelText("Nome");
  input.value = "test";
  const input2: HTMLInputElement = screen.getByLabelText("Senha");
  input2.value = "123456";
  const input3: HTMLInputElement = screen.getByLabelText("Confirmar senha");
  input3.value = "123456";
  act(() => {
    screen.getByText("Adicionar").click();
  });

  expect(
    screen.getByText("Usuário adicionado com sucesso!!")
  ).toBeInTheDocument();
});

it("Should request to fill the form", () => {
  render(
    <Provider store={store}>
      <CreateUserForm />
    </Provider>
  );
  act(() => {
    screen.getByText("Adicionar").click();
  });

  expect(
    screen.getByText("Por favor preencha todos os campos corretamente!")
  ).toBeInTheDocument();
});

it("Should not create a duplicated user", () => {
  render(
    <Provider store={store}>
      <CreateUserForm />
    </Provider>
  );
  const input: HTMLInputElement = screen.getByLabelText("Nome");
  input.value = "test";
  const input2: HTMLInputElement = screen.getByLabelText("Senha");
  input2.value = "123456";
  const input3: HTMLInputElement = screen.getByLabelText("Confirmar senha");
  input3.value = "123456";
  act(() => {
    screen.getByText("Adicionar").click();
  });

  expect(
    screen.getByText("Ja existe um usuario com esse nome!")
  ).toBeInTheDocument();
});
