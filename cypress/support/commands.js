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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("AddingNumbers", () => {
  cy.get('[data-cypress="buttonFour"]').click();
  cy.get('[data-cypress="buttonFive"]').click();
  cy.get('[data-cypress="buttonPlus"]').click();
  cy.get('[data-cypress="buttonEight"]').click();
  cy.get('[data-cypress="buttonEqual"]').click();
  cy.get('[data-cypress="result"]').should("have.value", "53");
  cy.get("button.limpar").click();
});

Cypress.Commands.add("DecreasingNumbers", () => {
  cy.get('[data-cypress="buttonEight"]').click();
  cy.get('[data-cypress="buttonTwo"]').click();
  cy.get('[data-cypress="buttonMinus"]').click();
  cy.get('[data-cypress="buttonOne"]').click();
  cy.get('[data-cypress="buttonNine"]').click();
  cy.get('[data-cypress="buttonEqual"]').click();
  cy.get('[data-cypress="result"]').should("have.value", "63");
  cy.get("button.limpar").click();
});

Cypress.Commands.add("MultiplyingNumbers", () => {
  cy.get('[data-cypress="buttonSeven"]').click();
  cy.get('[data-cypress="buttonMultiply"]').click();
  cy.get('[data-cypress="buttonThree"]').click();
  cy.get('[data-cypress="buttonEqual"]').click();
  cy.get('[data-cypress="result"]').should("have.value", "21");
  cy.get("button.limpar").click();
});

Cypress.Commands.add("DividingNumbers", () => {
  cy.get('[data-cypress="buttonEight"]').click();
  cy.get('[data-cypress="buttonOne"]').click();
  cy.get('[data-cypress="buttonDivide"]').click();
  cy.get('[data-cypress="buttonNine"]').click();
  cy.get('[data-cypress="result"]').should("have.value", "81/9");
  cy.get('[data-cypress="buttonEqual"]').click();
  cy.get('[data-cypress="result"]').should("have.value", "9");
  cy.get("button.limpar").click();
});

Cypress.Commands.add("AddDecreaseMultiplyDivide", () => {
  cy.get('[data-cypress="buttonSix"]').click();
  cy.get('[data-cypress="buttonFour"]').click();
  cy.get('[data-cypress="result"]').should("have.value", "64");
  cy.get('[data-cypress="buttonPlus"]').click();
  cy.get('[data-cypress="buttonThree"]').click();
  cy.get('[data-cypress="result"]').should("have.value", "64+3");
  cy.get('[data-cypress="buttonMinus"]').click();
  cy.get('[data-cypress="buttonFive"]').click();
  cy.get('[data-cypress="result"]').should("have.value", "64+3-5");
  cy.get('[data-cypress="buttonMultiply"]').click();
  cy.get('[data-cypress="buttonNine"]').click();
  cy.get('[data-cypress="buttonTwo"]').click();
  cy.get('[data-cypress="result"]').should("have.value", "64+3-5*92");
  cy.get('[data-cypress="buttonDivide"]').click();
  cy.get('[data-cypress="buttonFour"]').click();
  cy.get('[data-cypress="result"]').should("have.value", "64+3-5*92/4");
  cy.get('[data-cypress="buttonEqual"]').click();
  cy.get('[data-cypress="result"]').should("have.value", "-48");
});

Cypress.Commands.add("AssertingResultValues", () => {
  cy.get('[data-cypress="buttonThree"]').click();
  cy.get('[data-cypress="result"]').should("have.value", "3");
  cy.get("button.limpar").click();
  cy.get('[data-cypress="buttonFour"]').click();
  cy.get('[data-cypress="buttonFive"]').click();
  cy.get('[data-cypress="result"]').should("have.value", "45");
  cy.get("button.limpar").click();
});
