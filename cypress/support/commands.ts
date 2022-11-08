/// <reference types="cypress" />
import 'cypress-file-upload';

Cypress.Commands.add('init', (content) => {
  cy.visit('/');
  cy.get('body').then(($el) => $el.append(content));
  cy.get('body').children().first().as('element');
});
