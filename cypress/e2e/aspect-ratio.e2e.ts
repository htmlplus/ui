/// <reference types="cypress" />
import { property } from '../support/utils';

describe('plus-aspect-ratio', () => {
  const values = [
    [1 / 2, 0.5],
    [2 / 1, 2.0],
    ['1/2', 0.5],
    ['2/1', 2.0],
    ['2/2', 1.0],
    ['9/2', 4.5]
  ];

  beforeEach(() => {
    cy.init(`
      <plus-aspect-ratio>
        <div style="background: #ddd">
          Content
        </div>
      </plus-aspect-ratio>
    `);
  });

  property('@element', 'value', Number, 1, false);

  it('width should be equal to height in the initialize', () => {
    cy.get('@element').then(($element) => {
      expect($element.width()).to.eq($element.width());
    });
  });

  it('dimensions of the child should be equal to parent', () => {
    cy.get('@element')
      .invoke('prop', 'value', 5)
      .then(($element) => {
        expect($element.find('*').width()).to.eq($element.width());
        expect($element.find('*').height()).to.eq($element.height());
      });
  });

  it('multiple values should be meet the expectations', () => {
    cy.wrap(values).each((value) => {
      const [input, output] = value;
      cy.get('@element')
        .invoke('prop', 'value', input)
        .then(($element) => {
          const ratio = parseFloat(($element.width() / $element.height()).toFixed(2));
          expect(ratio).to.eq(output);
        });
    });
  });
});
