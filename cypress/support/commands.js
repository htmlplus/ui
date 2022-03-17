import 'cypress-file-upload';

Cypress.Commands.add('setContent', (content) => {
  cy.visit('/');
  cy.get('body').then(($el) => $el.append(content));
});
