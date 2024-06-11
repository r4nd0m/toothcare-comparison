import { cy, it } from 'local-cypress'

export function authenticate() {
    cy.visit('http://localhost:4200/auth');

    cy.get('input#email').clear().type('aaa@aaaa');
    cy.get('input#password').clear().type('aaaaaa');
    cy.get('#login-button').click();
};