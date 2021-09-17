
export {}
/// <reference types="Cypress" />
describe('Login to Github', () => {
  it('Login to Github', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('button').should('have.text', 'Login to Github');
    // cy.get('button').should('have.text', 'Login to Github').click();
  })
});