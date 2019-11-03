import { Productpage } from './product.po';
import { browser, logging } from 'protractor';

describe('Go to add product page', () => {
  let page: Productpage;

  beforeEach(() => {
    page = new Productpage();
  });

  it('When I on on product page', () => {
    page.navigateTo();
  });

  
  it('When I enter name, category, unit,description, discount, location and quantity', () => {
    page.setUsername();
    page.setPassword();
    page.setUnit();
    page.setDes();
    page.setDis();
    page.setLoc();
    page.setQuant();
    
  });

  
  it('Then product should be added', () => {
    // page.clickBttt();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
