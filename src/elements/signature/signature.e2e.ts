/// <reference types="cypress" />
import 'cypress-real-events';

describe('plus-signature', () => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150" width="300" height="150"><line x1="0" y1="0" x2="300" y2="150" stroke="black" /></svg>`;

  beforeEach(() => {
    cy.init(`<plus-signature background-color="lightgray"></plus-signature>`);
  });

  it('display should be block', () => {
    cy.get('@element').should('have.css', 'display', 'block');
  });

  it('initial dimensions should be 300px for width and 150px for height', () => {
    cy.get('@element').should('have.css', 'width', '300px').should('have.css', 'height', '150px');
  });

  it('value property should be empty in initialization', () => {
    cy.get('@element').invoke('prop', 'value').should('eq', undefined);
  });

  it('value property should be a SVG string after drawing', () => {
    cy.get('@element').realSwipe('toRight').invoke('prop', 'value').should('match', /^<svg/);
  });

  it('history should work', () => {
    cy.get('@element').invoke('prop', 'undoable').should('eq', false);
    cy.get('@element').invoke('prop', 'redoable').should('eq', false);

    cy.get('@element').realSwipe('toRight');

    cy.get('@element').invoke('prop', 'undoable').should('eq', true);
    cy.get('@element').invoke('prop', 'redoable').should('eq', false);

    cy.get('@element').realSwipe('toLeft');

    cy.get('@element').invoke('prop', 'undoable').should('eq', true);
    cy.get('@element').invoke('prop', 'redoable').should('eq', false);

    cy.get('@element').then(($element: any) => $element[0].undo());

    cy.get('@element').invoke('prop', 'undoable').should('eq', true);
    cy.get('@element').invoke('prop', 'redoable').should('eq', true);

    cy.get('@element').then(($element: any) => $element[0].undo());

    cy.get('@element').invoke('prop', 'undoable').should('eq', false);
    cy.get('@element').invoke('prop', 'redoable').should('eq', true);
  });

  it('change event should fire after each drawing', () => {
    cy.listen('plus-change');

    cy.get('@element').realSwipe('toRight');
    cy.get('@event').should('have.been.calledOnce');

    cy.wait(500);

    cy.get('@element').realSwipe('toLeft');
    cy.get('@event').should('have.been.calledTwice');
  });

  it('value property should not be updated by drawing when the element is disabled at initialization', () => {
    cy.init(`<plus-signature background-color="lightgray" disabled></plus-signature>`);

    cy.get('@element').invoke('prop', 'disabled', true);

    cy.get('@element').realSwipe('toRight');

    cy.get('@element').invoke('prop', 'value').should('eq', undefined);
  });

  it('value property should not be updated by drawing when the element is disabled at runtime', () => {
    cy.get('@element').invoke('prop', 'disabled', true);

    cy.get('@element').realSwipe('toRight');

    cy.get('@element').invoke('prop', 'value').should('eq', undefined);
  });

  it('change event should not be fired by drawing when the element is disabled at initialization', () => {
    cy.init(`<plus-signature background-color="lightgray" disabled></plus-signature>`);

    cy.listen('plus-change');

    cy.get('@element').invoke('prop', 'disabled', true);

    cy.get('@element').realSwipe('toRight');

    cy.get('@event').should('not.have.been.called');
  });

  it('change event should not be fired by drawing when the element is disabled at runtime', () => {
    cy.listen('plus-change');

    cy.get('@element').invoke('prop', 'disabled', true);

    cy.get('@element').realSwipe('toRight');

    cy.get('@event').should('not.have.been.called');
  });

  it('history should be reset after updating the value property', () => {
    cy.get('@element').invoke('prop', 'value', svg);

    cy.wait(500);

    cy.get('@element').invoke('prop', 'value').should('eq', svg);

    cy.get('@element').invoke('prop', 'undoable').should('eq', false);
    cy.get('@element').invoke('prop', 'redoable').should('eq', false);
  });
});
