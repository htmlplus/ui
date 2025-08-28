/// <reference types="cypress" />
import 'cypress-file-upload';

Cypress.Commands.add('init', (content: string) => {
	cy.visit('/');
	cy.get('body').then(($el) => {
		$el.empty();
		$el.append(content);
	});
	cy.get('body').children().first().as('element');
	cy.wait(500);
});

Cypress.Commands.add('listen', (event: string) => {
	const handler = cy.spy().as('event');
	cy.get('@element').then(($element) => {
		$element[0].addEventListener(event, handler);
	});
});
