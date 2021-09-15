export {};

it('', () => {
  cy.visit('/login');
  cy.get('button').should('have.text', 'Login to Github');
})