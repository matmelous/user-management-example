# Projeto React Redux TypeScript com Atomic Design

Este é um projeto de exemplo que demonstra minhas habilidades como desenvolvedor React. O projeto foi criado com Create React App, incorporando Redux e TypeScript, e segue a arquitetura Atomic Design. O objetivo principal deste projeto é fornecer uma tela de login e um dashboard onde os usuários podem ser listados e novos usuários podem ser cadastrados.

## Tabela de Conteúdos

1. [Visão Geral](#visão-geral)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Instalação](#instalação)
5. [Uso](#uso)
6. [Capturas de Tela](#capturas-de-tela)
7. [Licença](#licença)

## Visão Geral

Este projeto é uma aplicação web simples que demonstra a autenticação de usuários e a exibição de um painel de controle. Ele inclui as seguintes funcionalidades:

- Uma tela de login onde os usuários podem autenticar-se.
- Um dashboard que exibe uma lista de usuários.
- Um formulário no dashboard para cadastrar novos usuários.
- Gerenciamento de estado usando Redux para manter os dados da aplicação.
- Tipagem estática usando TypeScript para melhorar a segurança e a manutenção do código.
- Uma arquitetura Atomic Design que promove a reutilização de componentes e uma estrutura organizada do projeto.

## Tecnologias Utilizadas

- React
- Redux
- TypeScript
- Create React App
- Atomic Design

## Estrutura do Projeto

O projeto segue uma estrutura organizada inspirada no Atomic Design:

- **atoms**: Componentes de nível mais baixo, como botões, campos de formulário, etc.
- **molecules**: Componentes que combinam vários átomos, como um formulário de login.
- **organisms**: Componentes compostos por várias moléculas, como a tela de login e o painel de controle.
- **templates**: Layouts gerais para páginas, como a estrutura do painel de controle.
- **pages**: Páginas específicas da aplicação, como a página de login e o painel de controle.

## Instalação

Siga as etapas abaixo para executar o projeto em sua máquina:

1. Clone este repositório:


### `git clone https://github.com/matmelous/user-management-example.git`

2. Navegue até o diretório do projeto:
### `cd user-management-example`

3. Instale as dependências:

### `yarn`

3. Após a instalação, você pode iniciar o aplicativo usando o seguinte comando:

### `yarn start`

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000) .

## Capturas de Tela

![image](https://github.com/matmelous/user-management-example/assets/51704551/26fcc9fc-926c-4fec-9d84-1550242ddc83)
![image](https://github.com/matmelous/user-management-example/assets/51704551/82b3086f-2a95-4b83-83ae-138fa7aec29f)


## Licença
Este projeto é licenciado sob a MIT License.

