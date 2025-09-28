import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given("que estou na página de cadastro", () => {
  cy.visit("https://walkdog.vercel.app/");
});

Given("quero ser dog walker", () => {
  cy.contains("Quero ser Dog Walker").click();
});

When("tento enviar o formulário sem preencher os campos obrigatórios", () => {
    cy.get('[name="addressDetails"]').type("casa branca");
    cy.contains("Cuidar").click();
    cy.contains("Adestrar").click();
    cy.get('[class="button-register"]').click().wait(500);
});

Then("apresenta os campos que são obrigatórios preencher", () => {
  cy.get('[name="name"]').parent().find('.alert-error').should('be.visible');
  cy.get('[name="email"]').parent().find('.alert-error').should('be.visible');
  cy.get('[name="cpf"]').parent().find('.alert-error').should('be.visible');
  cy.get('[name="cep"]').parent().find('.alert-error').should('be.visible');
  cy.get('[name="addressNumber"]').parent().find('.alert-error').should('be.visible');
  cy.get('.alert-error').contains('Adcione um documento com foto').should('be.visible');

});

