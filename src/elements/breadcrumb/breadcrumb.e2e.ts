/// <reference types="cypress" />
import { property } from '../../../cypress/support/utils';

describe('plus-breadcrumb', () => {
	beforeEach(() => {
		cy.init(`
      <plus-breadcrumb>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
      </plus-breadcrumb>
    `);
		cy.get('@element').shadow().find('.container > *').as('children');
	});

	property('@element', 'expanderText', String, 'Show path', false);
	property('@element', 'offset', Number, 1, false);
	property('@element', 'max', Number, undefined, false);
	property('@element', 'separator', String, undefined, false);

	it('`aria-label` attribute should be equal `breadcrumb`', () => {
		cy.get('@element').should('have.attr', 'aria-label', 'breadcrumb');
	});

	it('direct children should have `slot` attribute with a value', () => {
		cy.get('@element')
			.children()
			.each(($child, index) => {
				cy.wrap($child).should('have.attr', 'slot', index.toString());
			});
	});

	it('count of direct children should be equal with count of shadow children', () => {
		cy.get('@element')
			.children()
			.then(($children) => {
				cy.get('@children').should('have.length', $children.length);
			});
	});

	it('each item in the shadow should have `part` attribute with a value equal `item`', () => {
		cy.get('@children').each(($child) => {
			cy.wrap($child).should('have.attr', 'part', 'item');
		});
	});

	it('each item in the shadow should have `one` child', () => {
		cy.get('@children').each(($child) => {
			cy.wrap($child).children().should('have.length', 1);
		});
	});

	it("each item in the shadow should have `one` child and the child's type equals `slot`", () => {
		cy.get('@children').each(($child) => {
			cy.wrap($child[0].children.item(0)?.nodeName).should('eq', 'SLOT');
		});
	});

	it("each item in the shadow should have `one` child and the child's name should have a value", () => {
		cy.get('@children').each(($child, index) => {
			// biome-ignore lint: TODO
			cy.wrap($child[0].children.item(0)?.['name']).should('eq', index.toString());
		});
	});
});
