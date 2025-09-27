# Cypress E2E Tests com BDD

Este projeto contém **testes automatizados end-to-end (E2E)** usando **Cypress** e **BDD (Behavior Driven Development)** com o **Cucumber Preprocessor**.

---

## Pré-requisitos

Para baixar e executar o projeto, necessário ter os seguintes sistemas instalados em seu computador:

- [git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/)

## Download

Para realizar download do projeto no GitHub, acesse o repositório e clique no botão **Code** > **HTTPS** > **Copy**.

 Abra o terminal e navegue até a pasta onde deseja salvar o projeto. Cole o comando copiado e execute.

 
## Instalação

Para instalar as dependências de desenvolvimento, execute o comando `npm install`.

---

## Executando os Testes

### 1. Abrir Cypress em modo interativo:

```bash
npx cypress open
```

- Selecione os testes na interface do Cypress e execute.

### 2. Executar testes em modo headless:

```bash
npx cypress run
```

---

## Observações

- Os testes utilizam **BDD**, com arquivos `.feature` para descrever cenários de forma legível.  
- Arquivos de upload e fixtures estão dentro da pasta `cypress/fixtures`.    

---

## Estrutura de Cenários

Exemplo de cenários BDD:

- Realizar cadastro de dog walker com sucesso  
