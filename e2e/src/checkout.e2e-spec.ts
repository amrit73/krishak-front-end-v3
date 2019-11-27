import { CheckoutPage } from './checkout.po';
import { browser, logging } from 'protractor';

describe('Go to Checkout page', () => {
  let page: CheckoutPage;

  beforeEach(() => {
    page = new CheckoutPage();
  });

  it('Given I am on checkout page', () => {
    page.navigateTo();
  });

  
  it('When I enter name, credit card number, month, year and cvv', () => {
    page.setUsername();
    page.setNum();
    page.setMonth();
    page.setYear();
    page.setCVV();
  });

  
  it('Then  Checkout', () => {
    // page.clickLogin();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
