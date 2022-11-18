/// <reference types="cypress" />

// TODO: problem with 'disabled' key
// cy.get(selector).should('have.attr', key, `${init}`);
// it(`"${key}" attribute should be updates "${key}" property`, () => {
//   cy.get(selector).invoke('attr', key, true).invoke('prop', key).should('eq', true);
// });
// if (!reflect) {
//   it(`"${key}" property should not be reflected on the attribute`, () => {
//     cy.get('@element').invoke('prop', key, true);
//     cy.get('@element').should('not.have.attr', key);
//   });
// }

export const property = (selector, key, type, init, reflect) => {
  const hasReflection = reflect && typeof init != 'undefined';

  context(`"${key}" property`, () => {
    it('should be exist', () => {
      cy.get(selector)
        .then(($elements) => key in $elements[0])
        .should('eq', true);
    });

    it('should has getter and setter', () => {
      let values;

      switch (type) {
        case Array:
          values = [];
          break;

        case Boolean:
          values = [undefined, false, true];
          break;

        case Number:
          values = [0, 10, 100, 1000, 10000];
          break;

        case String:
          values = ['', 'string', 'undefined', 'null', 'false', 'true', '-1', '0', '1'];
          break;

        default:
          values = Array.isArray(type) ? type : [type];
          break;
      }

      cy.wrap(values).each((value) => {
        cy.get(selector)
          .then(($elements) => {
            $elements[0][key] = value;
            return {
              value: $elements[0][key]
            };
          })
          .its('value')
          .should('eq', value);
      });
    });

    it(`should be "${init}" in the initialize`, () => {
      cy.get(selector).invoke('prop', key).should('eq', init);
    });
  });

  context(`"${key}" attribute`, () => {
    if (hasReflection) {
      it('should exist in the initialize', () => {
        cy.get(selector).should('have.attr', key);
      });
      it(`should be equal "${init}" in the initialize`, () => {
        cy.get(selector)
          .then(($elements) => $elements[0].getAttribute(key))
          .should('eq', `${init}`);
      });
    }

    if (!hasReflection) {
      it(`should not exist in the initialize`, () => {
        cy.get(selector).should('not.have.attr', key);
      });
    }

    if (reflect) {
      it(`should be reflected`, () => {
        const values = (() => {
          switch (type) {
            case Boolean:
              return [
                [true, true, ''],
                [false, false, null]
              ];
            // TODO
            // case Number:
            //   return [[1, 1, '1']];
            // case String:
            //   return [
            //     ['', '', ''],
            //     ['Test', 'Test', 'Test']
            //   ];
          }
        })();
        cy.wrap(values).each(([main, property, attribute]) => {
          cy.get(selector)
            .invoke('prop', key, main)
            .then(($elements) => $elements[0].getAttribute(key))
            .should('eq', attribute);
        });
      });
    }
  });
};
