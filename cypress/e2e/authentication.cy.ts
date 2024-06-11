import { cy, it } from 'local-cypress'

describe('Test authentication', () => {
    it('Opens the application and checks if authentication is working', () => {
        cy.visit('http://localhost:4200/auth');

        // login button disabled when there are no data entered
        cy.get('#login-button').should('be.disabled');

        // enter valid email
        cy.get('input#email').clear().type('aaa@aa.aa');

        // login button disabled since no password is entered
        cy.get('#login-button').should('be.disabled');

        // enter invalid (too short) password
        cy.get('input#password').clear().type('aaaa');

        // login button disabled since the password is invalid
        cy.get('#login-button').should('be.disabled');

        // enter valid password
        cy.get('input#password').clear().type('aaaaa');

        // login button enabled since the password and the email are valid
        cy.get('#login-button').should('not.be.disabled');

        // enter invalid email
        cy.get('input#email').clear().type('invalid_email');

        // login button disabled since the email is invalid
        cy.get('#login-button').should('be.disabled');

        // enter valid email
        cy.get('input#email').clear().type('valid_email@server');

        // login button enabled since the email and the password are valid again
        cy.get('#login-button').should('not.be.disabled');

        // login with valid credentials
        cy.get('#login-button').click();

        // logout button enabled after login
        cy.get('#logout-button').should("exist");

        // redirect to / page after login
        cy.location('pathname').should('eq', '/')

        // logout
        cy.get('#logout-button').click();

        // redirect to /auth page after logout
        cy.location('pathname').should('eq', '/auth')

        // try to login with valid but 'non-registered' email and password
        cy.get('input#email').clear().type('invalid@email');
        cy.get('input#password').clear().type('invalidpassword');
        cy.get('#login-button').click();

        // check error message to be displayed
        cy.get('#login-error-message').should('exist');
        cy.get('#login-error-message').contains('Error happened, please try again');

    })
})