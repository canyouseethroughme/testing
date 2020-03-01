/// <reference types="cypress" />

context("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://canyouseethrough.me/calculatorJS/");
  });
  describe("TDD and BDD testing on a javascript calculator", () => {
    it("should check for data attributes and css properties", () => {
      cy.get("form").should("have.attr", "name");
      cy.get("button").should("have.attr", "class");
      cy.get("button").should("have.css", "width");
      cy.get("button").should("have.css", "height");
      cy.get("input").should("have.attr", "data-cypress");
      cy.get("input").should("have.css", "width");
      cy.get("input").should("have.css", "height");
      cy.get("body").should("have.descendants", "form");
    });
    it("should do some random math", () => {
      cy.AssertingResultValues();
      cy.AddingNumbers();
      cy.DecreasingNumbers();
      cy.MultiplyingNumbers();
      cy.DividingNumbers();
      cy.AddDecreaseMultiplyDivide();
    });
  });
});
