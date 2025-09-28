# Cypress E2E Tests com BDD e CI 🚀

Este projeto contém **testes end-to-end (E2E)** usando **Cypress** e **BDD (Behavior Driven Development)** com o **Cucumber Preprocessor**, além de **Integração Contínua (CI) com GitHub Actions** que roda **automaticamente a cada push**. 

---

## Pré-requisitos 🛠️

Para rodar o projeto no seu computador, você vai precisar de:

* [git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/)

---

## Download 📥

Clone o repositório e entre na pasta do projeto:

```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_PROJETO>
```

---

## Instalação ⚡

Instale as dependências:

```bash
npm install
```

---

## Executando os Testes 🎯

### 1. Modo interativo (pra ver tudo acontecer):

```bash
npx cypress open
```

### 2. Modo headless (pra rodar sem interface):

```bash
npx cypress run
```

---

## Integração Contínua (CI) 🤖

O CI do GitHub Actions roda **a cada push** e cuida de tudo:

* Faz checkout do código
* Instala dependências
* Executa todos os testes Cypress
* Faz upload de **screenshots** apenas se houver falha

> ⚠️ Os artefatos do CI permitem revisar **erros, falhas e toda execução dos testes**, mesmo sem rodar localmente.

---

## Observações 📝

* Testes escritos em **BDD** com arquivos `.feature`
* Fixtures e arquivos de upload estão em `cypress/fixtures`

---

## Estrutura de Cenários 📋

* Realizar cadastro para cuidar de cães com sucesso
* Realizar cadastro para adestrar cães com sucesso
* Realizar cadastro sem preencher os campos obrigatórios
