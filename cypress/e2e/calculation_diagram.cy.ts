import { cy, it } from 'local-cypress'
import { authenticate } from './authenticate';


describe('Test calculation diagram', () => {

    beforeEach(authenticate);

    it('Opens the application and checks if the calculation is working', () => {
        cy.get('#diagram-page-link').click();

        // calculation button present
        cy.get('button.button-calculate').contains("recalculate");
        // diagram is being built automatically on tab opening
        cy.get('canvas.diagram').should('exist');
    })
    

    it('Removes all providers and checks if the diagram is not being displayed', () => {
        // open providers list
        cy.get('#providers-page-link').click();

        // remove all providers
        cy.get('insurance-provider:first button.button-remove-provider').click();
        cy.get('insurance-provider:first button.button-remove-provider').click();
        cy.get('insurance-provider:first button.button-remove-provider').click();
        cy.get('insurance-provider:first button.button-remove-provider').click();
        cy.get('insurance-provider:first button.button-remove-provider').click();

        // open diagram tab
        cy.get('#diagram-page-link').click();

        // calculation button present
        cy.get('button.button-calculate').contains("recalculate");
        // diagram is being build automatically on tab opening
        cy.get('canvas.diagram').should('not.exist');
    })
})