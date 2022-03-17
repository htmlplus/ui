let element;

const values = [
  [1 / 2, 0.5],
  [2 / 1, 2.0],
  ['1/2', 0.5],
  ['2/1', 2.0],
  ['2/2', 1.0],
  ['9/2', 4.5],
];

describe('plus-aspect-ratio', () => {
  beforeEach(() => {
    cy.setContent(`
      <plus-aspect-ratio>
        <div style="background: #ddd">
          Content
        </div>
      </plus-aspect-ratio>
    `);
    cy.get('plus-aspect-ratio').then((el) => element = el);
  });

  it('default value', () => {
    expect(element.width()).to.eq(element.height());
  });

  it('child size', async () => {
    await element[0].setAttribute('value', 5);
    const $child = element.find('*');
    expect(element.width()).to.eq($child.width());
    expect(element.height()).to.eq($child.height());
  });

  it('value attribute', () => {
    cy.wrap(values).each(async (value) => {
      const [input, output] = value;
      await element[0].setAttribute('value', input);
      const ratio = parseFloat((element.width() / element.height()).toFixed(2));
      expect(ratio).to.eq(output);
    });
  });

  it.skip('attribute to property', () => {
    cy.wrap(values).each(async (value) => {
      const [input] = value;
      await element[0].setAttribute('value', input);
      expect(element[0]).to.have.property('value').and.eq(input.toString());
    });
  });

  it.skip('property to attribute', () => {
    cy.wrap(values).each(async (value) => { });
  });
});