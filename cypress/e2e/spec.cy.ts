describe('Open the application', () => {
  it('Opens the application and checks if the calculation is working', () => {
    cy.visit('http://localhost:4200/');

    // calculation button present
    cy.get('button.button-calculate').contains("calculate");
    // diagram not present initially
    cy.get('canvas.diagram').should('not.exist');

    cy.get('button.button-calculate').click();

    // button label changed
    cy.get('button.button-calculate').contains("recalculate");
    // diagram should be present
    cy.get('canvas.diagram').should('exist');
  })
})