import { LoginPage } from './login.po';
import { browser, logging } from 'protractor';

describe('Go to login page', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('When I on on login page', () => {
    page.navigateTo();
  });

  
  it('When I enter username and password', () => {
    page.setUsername();
    page.setPassword();
  });

  
  it('Then  I should be logged in', () => {
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
