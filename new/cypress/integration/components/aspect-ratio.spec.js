describe('plus-aspect-ratio', () => {

  it('open page', () => {
    cy.visit('http://localhost:10001/');
    cy.get('body').then($el => {
      $el.append('<plus-aspect-ratio data-cy="test"><div></div></plus-aspect-ratio>')
    });
  })

  it('child size', () => {
    cy.get('[data-cy="test"]').then($el => {
      $el[0].setAttribute('value', 5);
      const childStyle = $el.find('*');

      // check width
      expect($el.width).to.eq(childStyle.width);

      // check height
      expect($el.height).to.eq(childStyle.height);
    })
  })

  it('test based on attributes', () => {

    const cases = [
      [1 / 2, 0.5],
      [2 / 1, 2.0],
      ['1/2', 0.5],
      ['2/1', 2.0],
      ['2/2', 1.0],
      ['9/2', 4.5],
    ];
    cy.get('[data-cy="test"]').then($el => {
      cy.wrap(cases).each(async (attr) => {

        await $el[0].setAttribute('value', attr[0]);

        const styles = getComputedStyle($el[0]);

        const ratio = parseFloat((parseFloat(styles.width) / parseFloat(styles.height)).toFixed(2));

        expect(ratio).to.eq(attr[1]);
      })
    })

  })
});

