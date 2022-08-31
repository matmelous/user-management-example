import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../state/store";
import LoginForm from "..";
import { act } from "react-dom/test-utils";

it("Renders login form", () => {
  render(
    <Provider store={store}>
      <LoginForm />
    </Provider>
  );

  expect(screen.getByText(/Preencha suas credenciais para prosseguir!/i)).toBeInTheDocument();
});

it("Should sign in", () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
    const input:HTMLInputElement = screen.getByLabelText('Nome')
    input.value = 'matheus'
    const input2:HTMLInputElement = screen.getByLabelText('Senha')
    input2.value = '123456'
    act(()=> {
        screen.getByText('Cadastrar Usuário').click()
    });

    expect(screen.getByText('Bem vindo matheus!!')).toBeInTheDocument();
  });

  it("Should request to fill the form", () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
    act(()=> {
        screen.getByText('Cadastrar Usuário').click()
    });

    expect(screen.getByText('Por favor preencha todos os campos!')).toBeInTheDocument();
  });

it("Should not sign in", () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
    const input:HTMLInputElement = screen.getByLabelText('Nome')
    input.value = 'test'
    const input2:HTMLInputElement = screen.getByLabelText('Senha')
    input2.value = 'test'
    act(()=> {
        screen.getByText('Cadastrar Usuário').click()
    });

    expect(screen.getByText('Usuario não encontrado!')).toBeInTheDocument();
  });