/// <reference types="cypress" />
import { property } from '../support/utils';

describe('plus-click-outside', () => {
  const trigger = (target: 'parent' | 'self' | 'child') => {
    return cy.get('@element').then(($element) => {
      const handler = cy.spy();
      $element.on('plus-click-outside', handler);
      const element = (() => {
        switch (target) {
          case 'parent':
            return cy.get('@element').parent();
          case 'self':
            return cy.get('@element');
          case 'child':
            return cy.get('@element').children().first();
        }
      })();
      element
        .click()
        .click()
        .then(() => handler);
    });
  };

  beforeEach(() => {
    cy.init(`<plus-click-outside></plus-click-outside>&nbsp;`);
  });

  property('@element', 'disabled', Boolean, undefined, true);
  property('@element', 'once', Boolean, undefined, false);

  it('display should be block', () => {
    cy.get('@element').should('have.css', 'display', 'block');
  });

  it('height should be 0px', () => {
    cy.get('@element').should('have.css', 'height', '0px');
  });

  it('width should not be 0px', () => {
    cy.get('@element').should('not.have.css', 'width', '0px');
  });

  it('width should be equal to the own parent', () => {
    const width = Math.floor(Math.random() * 1000) + 'px';
    cy.get('@element').parent().invoke('attr', 'style', `width: ${width}`);
    cy.get('@element').should('have.css', 'width', width);
  });

  it('default slot should be works', () => {
    cy.get('@element').invoke('html', 'content').should('not.have.css', 'height', '0px');
  });

  it('event should be triggered when clicked on outside it', () => {
    trigger('parent').then((handler) => expect(handler).to.be.calledTwice);
  });

  it('event should not be triggered when clicked on it', () => {
    cy.get('@element').invoke('html', 'content');
    trigger('self').then((handler) => expect(handler).to.not.be.called);
  });

  it('event should not be triggered when clicked on inside it', () => {
    cy.get('@element').invoke('html', '<div>content</div>');
    trigger('child').then((handler) => expect(handler).to.not.be.called);
  });

  it('event should not be triggered when it has `disabled` attribute in the initialize', () => {
    cy.init(`<plus-click-outside disabled></plus-click-outside>&nbsp;`);
    trigger('parent').then((handler) => expect(handler).to.not.be.called);
  });

  it('event should not be triggered when `disabled` property equals `true`', () => {
    cy.get('@element').invoke('prop', 'disabled', true);
    trigger('parent').then((handler) => expect(handler).to.not.be.called);
  });
});
