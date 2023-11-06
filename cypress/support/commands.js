//import 'cypress-localstorage-commands'

Cypress.Commands.add("login", () => {
  cy.visit("http://127.0.0.1:64578").wait(1000).get(".login-btn").click();

  cy.get("#loginEmail")
    .invoke("val", "sindbert99@stud.noroff.no")
    .should("have.value", "sindbert99@stud.noroff.no");

  cy.get("#loginPassword").invoke("val", "12345678");

  cy.get("#login-btn").click();
});

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
