import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given("que estou na página de cadastro", () => {
  cy.visit("https://walkdog.vercel.app/");
});

Given("quero ser dog walker", () => {
  cy.contains("Quero ser Dog Walker").click();
});

When("preencho os campos obrigatórios e seleciono a ativadade extra adestrar", () => {
    cy.get('[name="name"]').type("Andrew Dutra Jorge");
    cy.get('[name="email"]').type("andrew@teste.com.br");
    cy.get('[name="cpf"]').type("12345678910");
    cy.get('[name="cep"]').type("88802400");
    cy.intercept('https://viacep.com.br/ws/88802400/json/').as('buscarCEP')
    cy.get('[value="Buscar CEP"]').click();
    cy.wait('@buscarCEP', { timeout: 90000 }).its("response.statusCode").should('eq', 200)
    cy.get('[name="addressNumber"]').type("30");
    cy.get('[name="addressDetails"]').type("casa branca");
    cy.contains("Adestrar").click();
    cy.get('input[type="file"]').attachFile('uploads/documento-RG.jpeg', { force: true });
});

When("envio o formulário", () => {
  cy.get('[class="button-register"]').click();
});

Then("devo ver a mensagem de sucesso", () => {
  cy.contains("Recebemos o seu cadastro e em breve retornaremos o contato.").should("be.visible");
});
