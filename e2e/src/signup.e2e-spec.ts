import { SignupPage } from './signup.po';
import { browser, logging } from 'protractor';

describe('Go to Signup page', () => {
  let page: SignupPage;

  beforeEach(() => {
    page = new SignupPage();
  });

  it('When I on on signp page', () => {
    page.navigateTo();
  });

  
  it('When I enter username and password', () => {
    page.setUsername();
    page.setPassword();
  });

  
  it('Then  I should be signup in', () => {
    page.clickLogin();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
