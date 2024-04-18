describe('Test provider management', () => {
  it('Opens the application and checks if the providers adding/removing is working', () => {
    cy.visit('http://localhost:4200/');

    // there should be 5 default providers on start
    cy.get('insurance-provider').should("have.length", 5);

    // remove the first provider
    cy.get('insurance-provider:first-of-type button.button-remove-provider').click();

    // there should be 4 providers after removal
    cy.get('insurance-provider').should("have.length", 4);

    // add new provider
    cy.get('button.button-add-provider').click();

    // there should be 5 providers after adding
    cy.get('insurance-provider').should("have.length", 5);

  })
})