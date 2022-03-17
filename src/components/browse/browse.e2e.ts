let element;

describe('plus-browse', () => {
  beforeEach(() => {
    cy.setContent(`<plus-browse></plus-browse>`);
    cy.get('plus-browse').then((el) => element = el);
  });

  // it('', () => {
  //   console.log(1, element.shadow())
  //   // element.shadow().find('input').attachFile('testPicture.png');
  // });
});