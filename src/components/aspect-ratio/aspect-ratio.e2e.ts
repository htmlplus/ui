import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing';

let
  page: E2EPage,
  element: E2EElement;

beforeEach(async () => {

  // create a new e2e test page
  page = await newE2EPage();

  // set the page content
  await page.setContent(`<plus-aspect-ratio><div></div></plus-aspect-ratio>`);

  // find the elemnt in the page
  element = await page.find('plus-aspect-ratio');
})

describe('plus-aspect-ratio', () => {

  // check css class
  it('renders', () => expect(element).toHaveClass('hydrated'));

  // TODO
  it('child size', async () => {

    // set value attribute
    element.setAttribute('value', 5);

    // wait for the changes to apply
    await page.waitForChanges();

    // get parent style
    const parentStyle = await element.getComputedStyle();

    // get child style
    const childStyle = await (await element.find('*')).getComputedStyle();

    // check width
    expect(parentStyle.width).toBe(childStyle.width);

    // check height
    expect(parentStyle.height).toBe(childStyle.height);
  });

  // all cases
  const cases = [
    [1 / 2, 0.5],
    [2 / 1, 2.0],
    ['1/2', 0.5],
    ['2/1', 2.0],
    ['2/2', 1.0],
    ['9/2', 4.5],
  ];

  // for each case
  test.each(cases)(
    'attribute [value="%s"]',
    async (value, expected) => {

      // set value attribute
      element.setAttribute('value', value);

      // wait for the changes to apply
      await page.waitForChanges();

      // get style
      const style = await element.getComputedStyle();

      // calc ratio
      const ratio = parseFloat((parseFloat(style.width) / parseFloat(style.height)).toFixed(2));

      // check ratio style
      expect(ratio).toBe(expected);
    }
  );
});
