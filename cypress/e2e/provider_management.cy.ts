import { cy, it } from 'local-cypress'

describe('Test provider management', () => {
  it('Opens the application and checks if the providers adding/removing is working', () => {
    cy.visit('http://localhost:4200/');

    // there should be 5 default providers on start
    cy.get('insurance-provider').should("have.length", 5);
    cy.get('.message-no-providers').should("not.exist");

    // remove the first provider
    cy.get('insurance-provider:first button.button-remove-provider').click();

    // there should be 4 providers after removal
    cy.get('insurance-provider').should("have.length", 4);

    // add new provider
    cy.get('button.button-add-provider').click();

    // there should be 5 providers after adding
    cy.get('insurance-provider').should("have.length", 5);

    // remove all providers
    cy.get('insurance-provider button.button-remove-provider').each(($el) => {
        cy.wrap($el).click();
    })
    
    cy.get('insurance-provider').should("have.length", 0);

    cy.get('.message-no-providers').should("exist");
  })
})