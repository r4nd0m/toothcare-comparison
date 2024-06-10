import { cy, it } from 'local-cypress'

describe('Test price management', () => {
  it('Opens the application and checks if the provider prices adding/removing is working', () => {
    cy.visit('http://localhost:4200/');

    // 3 price rows by default
    cy.get('insurance-provider').first().find('.row-provider-price').should("have.length", 3);

    // remove a price row
    cy.get('insurance-provider').first().find('.row-provider-price:first-of-type button.button-remove-price').click();

    // there should be 2 price rows after removal
    cy.get('insurance-provider').first().find('.row-provider-price').should("have.length", 2);

    // add new price row
    cy.get('insurance-provider').first().find('button.button-add-price').click();

    // there should be 3 price rows after adding
    cy.get('insurance-provider').first().find('.row-provider-price').should("have.length", 3);

  })
})